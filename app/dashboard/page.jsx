"use client";
import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Dashboard() {
  return (
    <div>
      <WelcomeBanner />
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
      <CourseList />
    </div>
  );
}

export default Dashboard;
