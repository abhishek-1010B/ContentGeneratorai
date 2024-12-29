"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function ButtonsPart() {
  return (
    <div className="md:hidden w-full flex justify-between  mt-6">
      <div>
        <Link href={"/create"} className="w-full">
          <Button className="w-full">+&nbsp;Create New</Button>
        </Link>
      </div>
      <div>
        <Link href={"/dashboard/upgrade"} className="w-full">
          <Button className="px-4 py-2 bg-green-500 text-white rounded-lg">
            Upgrade
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ButtonsPart;
