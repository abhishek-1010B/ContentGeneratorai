"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function DashboardHeader() {
  const pathname = usePathname();

  const isDashboardRoute = pathname === "/dashboard";

  return (
    <div
      className={`w-full p-3 shadow-md flex items-center ${
        isDashboardRoute ? "justify-end" : "justify-between"
      }`}
    >
      {!isDashboardRoute && (
        <div className="flex items-center space-x-2">
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
          <Link href={"/dashboard"}>
            <span className="text-xl md:text-2xl font-bold">Study Genie</span>
          </Link>
        </div>
      )}
      <UserButton />
    </div>
  );
}

export default DashboardHeader;
