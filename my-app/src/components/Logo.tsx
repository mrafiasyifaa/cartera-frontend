import React from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";

function Logo({className}:{className?: string}) {
  return (
    <Link href="/dashboard" className="inline-flex">
        <h1 className="text-9xl font-bold text-black-slug hover:text-cassiterite-brown/80 hoverEffect group">
            Carter<span className="text-cassiterite-brown group-hover:text-black-slug hoverEffect">a</span>
        </h1>
    </Link>
  )
}

export default Logo