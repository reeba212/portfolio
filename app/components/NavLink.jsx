import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} scroll={true}>
      <span className='block py-2 pl-3 pr-4 text-ink-soft font-semibold sm:text-lg rounded md:p-0 hover:text-primary transition-colors cursor-pointer'>
        {title}
      </span>
    </Link>
  );
};

export default NavLink;
