"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href={"/"}>
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
      {links.map((link) => (
          <li key={link.href} >
            <Link
            href={link.href}
            className={classnames({
              'text-blue-400': link.href === currentPath,
              'text-zinc-500':link.href!==currentPath,
              'hover:text-blue-400 transition-colors':true
            })}
          >
            {link.label}
          </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
