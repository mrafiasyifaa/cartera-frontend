"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/wallet", label: "Wallet" },
  { href: "/dashboard/send", label: "Send" },
];

function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Dashboard navigation">
      <ul className="flex flex-col gap-1">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`block px-4 py-2 rounded-md text-sm font-medium hoverEffect
                  ${isActive
                    ? "bg-cassiterite-brown text-white"
                    : "text-black-slug hover:bg-casual-khaki"
                  }`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default DashboardNav;
