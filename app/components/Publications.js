// app/components/Publications.js

const publicationsData = [
  {
    title: "Explainable AI Techniques Used in Healthcare",
    venue: "AIP Conference Proceedings",
    summary: "Built a ResNet-50 + LIME model to predict breast cancer with 81.44% accuracy.",
    url: "https://pubs.aip.org/aip/acp/article/3121/1/040005/3303044/Explainable-AI-techniques-used-in-healthcare",
    detail: {
      overview:
        "Applied explainable AI to breast cancer prediction, pairing a ResNet-50 image classifier with LIME (Local Interpretable Model-agnostic Explanations) so the model's predictions could be understood rather than treated as a black box — important for a healthcare setting where trust in the model's reasoning matters as much as raw accuracy.",
      results: ["Achieved 81.44% prediction accuracy using ResNet-50.", "Published in AIP Conference Proceedings."],
    },
  },
  {
    title: "Multimodal Machine Learning Approach for Detecting Spyware and Ransomware",
    venue: "IEEE",
    summary: "Benchmarked 6 ML models across two malware datasets — SVM and XGBoost topped out around 99.7%.",
    url: "https://ieeexplore.ieee.org/document/10581161",
    detail: {
      overview:
        "A comparative study benchmarking six machine learning models — XGBoost, Random Forest, SVM, Logistic Regression, Naive Bayes, and a Deep Neural Network — for detecting ransomware and spyware from structured behavioral features, using two public datasets. Used LIME to make the winning model's decisions interpretable instead of a black box.",
      approach: [
        "Preprocessed and cleaned two Kaggle datasets (ransomware; spyware/malware from memory dumps), removing missing/duplicate rows and encoding labels numerically.",
        "Ran exploratory data analysis on structural features (image versions, OS versions, section counts) to surface trends correlated with malware presence.",
        "Trained and validated all six models with a 75/25 split and a fixed random state for reproducibility.",
        "Applied LIME (Local Interpretable Model-agnostic Explanations) to explain individual predictions and identify which features pushed a sample toward \"malware\" vs. \"benign.\"",
      ],
      results: [
        "SVM was the most balanced performer overall — ~99.7% accuracy on ransomware with high precision and recall, avoiding a failure mode seen in other models.",
        "XGBoost and Random Forest hit ~99.9% accuracy on ransomware but with 0% precision/recall — they were trivially predicting \"no malware\" for every sample, a red flag the paper calls out rather than reporting as a win.",
        "XGBoost led on the spyware dataset at ~99.6% accuracy, with Random Forest and the DNN close behind; SVM underperformed there (~74%).",
        "LIME explanations surfaced which binary/file-structure features (e.g. DebugRVA, MajorOSVersion, ResourceSize) most influenced each prediction, adding interpretability on top of raw accuracy.",
      ],
    },
  },
  {
    title: "Q Learning and Deep Deterministic Policy Gradient Method for Energy Optimization in HVAC System",
    venue: "SPIN 2025 · Springer LNEE",
    presented: true,
    summary: "Compared Q-Learning vs. DDPG for HVAC energy control in a custom Gym environment — presented this one at the conference.",
    url: "https://doi.org/10.1007/978-981-96-9975-9_4",
    detail: {
      overview:
        "Built a custom OpenAI Gym environment simulating HVAC systems (indoor/outdoor temperature, humidity, thermal comfort) and trained two reinforcement learning agents — Q-Learning and Deep Deterministic Policy Gradient (DDPG) — to balance occupant comfort against energy consumption in commercial buildings. Presented this paper at SPIN 2025 (International Conference on Signal Processing and Integrated Networks); published in Advancements in Embedded System Design and Robotic Applications, Springer Lecture Notes in Electrical Engineering vol. 1452.",
      approach: [
        "Designed a custom Gym environment with a reward function balancing thermal comfort against energy use, randomizing initial temperature/humidity each episode.",
        "Implemented Q-Learning as a baseline, using a Q-table over discretized states and actions.",
        "Implemented DDPG (actor-critic architecture, deterministic policy, experience replay, target networks, Ornstein-Uhlenbeck noise for exploration) to handle the continuous action space HVAC control actually needs.",
        "Evaluated both agents on reward trend, indoor temperature stability, and modeled energy consumption across training episodes.",
      ],
      results: [
        "Q-Learning's rewards fluctuated between roughly -4,145 and -1,373 over 10 episodes with no stable improvement, and its temperature control stayed erratic.",
        "DDPG's rewards climbed from roughly -735,000 in episode 1 to -1.28 by episode 10 — a consistent, converging upward trend.",
        "DDPG's temperature control showed a smooth, stabilizing decline, and its modeled energy consumption trended down over training, while Q-Learning's stayed flat and erratic.",
        "Concluded DDPG's continuous-action, actor-critic approach is better suited to HVAC control than a discretized value-based method like Q-Learning.",
      ],
    },
  },
];

export default publicationsData;
