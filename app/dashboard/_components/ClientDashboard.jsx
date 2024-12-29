// /dashboard/ClientDashboard.jsx
"use client";

import dynamic from "next/dynamic";

const WelcomeBanner = dynamic(() => import("./WelcomeBanner"), {
  ssr: false,
  loading: () => <WelcomeBannerSkeleton />,
});

const ButtonsPart = dynamic(() => import("./ButtonsPart"), {
  ssr: false,
});

const CourseList = dynamic(() => import("./CourseList"), {
  ssr: false,
  loading: () => <CourseListSkeleton />,
});

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

export function ClientDashboard() {
  return (
    <div>
      <WelcomeBanner />
      <ButtonsPart />
      <CourseList />
    </div>
  );
}
