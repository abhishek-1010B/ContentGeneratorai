"use client";

import { useState, useEffect } from "react";
import WelcomeBanner from "./WelcomeBanner";
import ButtonsPart from "./ButtonsPart";
import CourseList from "./CourseList";

function ClientDashboard() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div>
        <WelcomeBannerSkeleton />
        <ButtonsPartSkeleton />
        <CourseListSkeleton />
      </div>
    );
  }

  return (
    <div>
      <WelcomeBanner />
      <ButtonsPart />
      <CourseList />
    </div>
  );
}

function WelcomeBannerSkeleton() {
  return (
    <div className="p-5 bg-slate-200 w-full rounded-lg flex items-center gap-6 animate-pulse h-32">
      <div className="w-[100px] h-[100px] bg-slate-300 rounded" />
      <div className="space-y-2">
        <div className="h-8 w-48 bg-slate-300 rounded" />
        <div className="h-4 w-96 bg-slate-300 rounded" />
      </div>
    </div>
  );
}

function ButtonsPartSkeleton() {
  return (
    <div className="md:hidden w-full flex justify-between mt-6">
      <div className="w-28 h-10 bg-slate-200 rounded animate-pulse" />
      <div className="w-28 h-10 bg-slate-200 rounded animate-pulse" />
    </div>
  );
}

function CourseListSkeleton() {
  return (
    <div className="mt-10">
      <div className="h-8 w-48 bg-slate-200 rounded mb-6" />
      <div className="grid grid-col-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="h-56 w-full bg-slate-200 rounded-lg animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}

export default ClientDashboard;
