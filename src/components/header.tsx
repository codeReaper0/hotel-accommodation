"use client";

import Link from "next/link";
import {navLinks} from "@/lib/links";
import {usePathname} from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="px-10 py-5 flex justify-between items-center">
      <Link href="/">
        <h1 className="flex flex-col">
          <span className="text-4xl">TELLA</span>
          <span className="text-sm">Home of Luxury</span>
        </h1>
      </Link>

      <nav>
        <ul className="flex gap-6">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.path);
            return (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={
                    isActive
                      ? "border-b border-b-white pb-1"
                      : "hover:border-b hover:border-b-white hover:pb-1 transition-all duration-300 ease-linear"
                  }
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
