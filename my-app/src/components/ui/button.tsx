import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function NavButton({ href, children, className }: NavButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1 font-semibold text-cassiterite-brown",
        "hoverEffect hover:text-black-slug",
        className
      )}
    >
      <span className="hoverEffect opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
        &gt;
      </span>
      {children}
    </Link>
  );
}

export default NavButton;
