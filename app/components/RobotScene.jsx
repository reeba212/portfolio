"use client";

// Model: "Animated Robot" by Quaternius (poly.pizza), CC0 — no attribution required, no watermark.

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

// Same kawaii palette in both themes — only the page background changes for dark mode.
const THEME_MATERIAL_COLORS = {
  light: { Main: "#F075AB", Grey: "#FFD3EA" },
  dark: { Main: "#F075AB", Grey: "#FFD3EA" },
};

// Tracks the cursor across the *whole page*, not just while hovering the canvas —
// R3F's own state.pointer only updates on canvas-local pointer events.
function usePagePointer() {
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);
  return pointer;
}

function useSiteTheme() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const root = document.documentElement;
    const read = () => setTheme(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
    read();
    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);
  return theme;
}

function Robot() {
  const lookGroup = useRef();
  const modelRef = useRef();
  const { scene, animations } = useGLTF("/models/robot.glb");
  const { actions } = useAnimations(animations, modelRef);
  const theme = useSiteTheme();
  const pagePointer = usePagePointer();
  const { camera, size } = useThree();

  useEffect(() => {
    const names = Object.keys(actions);
    const idle = actions["RobotArmature|Robot_Idle"] || actions[names[0]];
    idle?.reset().fadeIn(0.4).play();
    return () => idle?.fadeOut(0.4);
  }, [actions]);

  // Hide the black visor/eyebrow bar, and add a simple hair cap on the actual Head bone
  // (not the Head mesh — same name, different objects) so it follows the idle animation.
  const customizedRef = useRef(false);
  useEffect(() => {
    if (!modelRef.current || customizedRef.current) return;

    modelRef.current.traverse((child) => {
      if (child.isMesh && child.material?.name === "Black") {
        child.visible = false;
      }
    });

    let headMesh = null;
    let headBone = null;
    modelRef.current.traverse((child) => {
      if (child.isMesh && child.name === "Head") headMesh = child;
      if (child.isBone && child.name === "Head") headBone = child;
    });

    if (headMesh && headBone) {
      const box = new THREE.Box3().setFromObject(headMesh);
      const size = new THREE.Vector3();
      box.getSize(size);
      const headRadius = Math.max(size.x, size.z) / 2;
      const topWorld = new THREE.Vector3(
        (box.min.x + box.max.x) / 2,
        box.max.y,
        (box.min.z + box.max.z) / 2
      );

      const worldScale = new THREE.Vector3();
      headBone.getWorldScale(worldScale);
      const avgScale = (worldScale.x + worldScale.z) / 2 || 1;
      const localRadius = headRadius / avgScale;

      const hair = new THREE.Mesh(
        new THREE.SphereGeometry(localRadius * 1.08, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.55),
        new THREE.MeshStandardMaterial({ color: "#8B5E3C", roughness: 0.75, metalness: 0 })
      );
      hair.position.copy(headBone.worldToLocal(topWorld.clone()));
      hair.position.y -= localRadius * 0.1;
      hair.name = "HairCap";
      headBone.add(hair);

      // Cute pink eyes on the front face — hiding the "Black" material above removed
      // the whole visor, eyes included, so add simple ones back on (assumes the rig
      // faces +Z, the standard export convention). Pushed noticeably proud of the
      // head's bounding box (not flush with it) since the head is curved/rounded —
      // sitting exactly at the box edge risked burying them inside the surface.
      const eyeGeom = new THREE.SphereGeometry(localRadius * 0.22, 16, 12);
      const eyeMat = new THREE.MeshStandardMaterial({
        color: "#F075AB",
        emissive: "#F075AB",
        emissiveIntensity: 0.3,
        roughness: 0.25,
        depthTest: false,
      });
      const centerZ = (box.min.z + box.max.z) / 2;
      const frontZ = centerZ + (box.max.z - centerZ) * 1.35;
      const eyeXOffset = (box.max.x - box.min.x) * 0.22;
      [-1, 1].forEach((side) => {
        const eye = new THREE.Mesh(eyeGeom, eyeMat);
        eye.renderOrder = 10;
        const worldPos = new THREE.Vector3(
          (box.min.x + box.max.x) / 2 + side * eyeXOffset,
          box.min.y + size.y * 0.58,
          frontZ
        );
        eye.position.copy(headBone.worldToLocal(worldPos.clone()));
        eye.name = side < 0 ? "EyeLeft" : "EyeRight";
        headBone.add(eye);
      });
    }

    customizedRef.current = true;
  }, [scene]);

  // Frame the camera dead-level at the model's *visible-mesh* center — computed from
  // mesh geometry only, after the eyebrow mesh above has already been hidden (skipping
  // bones/IK pole targets too, which can otherwise skew an automatic bounding-box fit
  // and make it look like the camera is down near the feet). Runs once and stays put —
  // deliberately not reactive to canvas resize, since scroll-triggered viewport changes
  // (e.g. mobile browser chrome show/hide) were retriggering this and making the robot
  // visibly jump/resize.
  const framedRef = useRef(false);
  useEffect(() => {
    if (!modelRef.current || framedRef.current) return;
    const box = new THREE.Box3();
    let found = false;
    modelRef.current.traverse((child) => {
      if (child.isMesh && child.visible) {
        box.expandByObject(child);
        found = true;
      }
    });
    if (!found) return;

    const boxSize = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(boxSize);
    box.getCenter(center);

    const fovRad = (camera.fov * Math.PI) / 180;
    const aspect = size.width / size.height || 1;
    const distForHeight = boxSize.y / 2 / Math.tan(fovRad / 2);
    const horizontalFov = 2 * Math.atan(Math.tan(fovRad / 2) * aspect);
    const distForWidth = boxSize.x / 2 / Math.tan(horizontalFov / 2);
    const distance = Math.max(distForHeight, distForWidth) * 1.35;

    camera.position.set(center.x, center.y, center.z + distance);
    camera.lookAt(center);
    camera.updateProjectionMatrix();
    framedRef.current = true;
  }, [scene, camera, size]);

  useEffect(() => {
    const colors = THEME_MATERIAL_COLORS[theme];
    scene.traverse((child) => {
      if (!child.isMesh || !child.material) return;
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach((mat) => {
        const hex = colors[mat.name];
        if (!hex) return;
        if (!child.userData.materialCloned) {
          child.material = Array.isArray(child.material)
            ? child.material.map((m) => m.clone())
            : child.material.clone();
          child.userData.materialCloned = true;
        }
        (Array.isArray(child.material) ? child.material : [child.material]).forEach((m) => {
          if (colors[m.name]) m.color = new THREE.Color(colors[m.name]);
        });
      });
    });
  }, [theme, scene]);

  // Whole-body turn toward the cursor anywhere on the page — avoids fighting the
  // skeletal animation on individual bones, and doesn't require hovering the canvas itself.
  useFrame(() => {
    if (!lookGroup.current) return;
    const targetY = pagePointer.current.x * 0.6;
    const targetX = pagePointer.current.y * 0.18;
    lookGroup.current.rotation.y += (targetY - lookGroup.current.rotation.y) * 0.06;
    lookGroup.current.rotation.x += (targetX - lookGroup.current.rotation.x) * 0.06;
  });

  return (
    <group ref={lookGroup}>
      <primitive ref={modelRef} object={scene} />
    </group>
  );
}

export default function RobotScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 4.4], fov: 32 }}
      gl={{ alpha: true, antialias: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[3, 4, 3]} intensity={1.2} />
      <directionalLight position={[-3, 1, -2]} intensity={0.4} />
      <Suspense fallback={null}>
        <Robot />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("/models/robot.glb");
