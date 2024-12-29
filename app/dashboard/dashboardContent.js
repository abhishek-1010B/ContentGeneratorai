// app/dashboard/page.js

// app/dashboard/DashboardContent.js
"use client";

import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { CourseCountContext } from "@/app/_context/CourseCountContext";
import CourseCardItem from "./_components/CourseCardItem";

export function DashboardContent() {
  const { user } = useUser();
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setTotalCourse } = useContext(CourseCountContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && user) {
      GetCourseList();
    }
  }, [mounted, user]);

  const GetCourseList = async () => {
    try {
      setLoading(true);
      const result = await axios.post("/api/courses", {
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });
      setCourseList(result.data.result || []);
      setTotalCourse(result.data.result.length);
    } catch (error) {
      console.error("Error fetching course list:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return <DashboardSkeleton />;
  }

  return (
    <div>
      {/* Welcome Banner */}
      <div className="p-5 bg-blue-500 w-full text-white rounded-lg flex items-center gap-6">
        <Image src={"/laptop.png"} alt="laptop" width={100} height={100} />
        <div>
          <h2 className="font-bold text-3xl">Hello, {user?.fullName}</h2>
          <p className="">
            Welcome back, its time to get back and start learning new course
          </p>
        </div>
      </div>

      {/* Buttons Part */}
      <div className="md:hidden w-full flex justify-between mt-6">
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

      {/* Course List */}
      <div className="mt-10">
        <h2 className="font-bold text-2xl flex justify-between items-center">
          Your Study Material
          <Button
            variant="outline"
            onClick={GetCourseList}
            className="border-primary text-primary"
          >
            <RefreshCw className={loading ? "animate-spin" : ""} />
            {loading ? "Loading..." : "Refresh"}
          </Button>
        </h2>
        <div className="grid grid-col-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {!loading
            ? courseList?.map((course, index) => (
                <CourseCardItem course={course} key={index} />
              ))
            : [1, 2, 3, 4, 5, 6].map((item, index) => (
                <div
                  key={index}
                  className="h-56 w-full bg-slate-200 rounded-lg animate-pulse"
                />
              ))}
        </div>
      </div>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div>
      {/* Welcome Banner Skeleton */}
      <div className="p-5 bg-slate-200 w-full rounded-lg flex items-center gap-6 animate-pulse h-32">
        <div className="w-[100px] h-[100px] bg-slate-300 rounded" />
        <div className="space-y-2">
          <div className="h-8 w-48 bg-slate-300 rounded" />
          <div className="h-4 w-96 bg-slate-300 rounded" />
        </div>
      </div>

      {/* Buttons Skeleton */}
      <div className="md:hidden w-full flex justify-between mt-6">
        <div className="w-28 h-10 bg-slate-200 rounded animate-pulse" />
        <div className="w-28 h-10 bg-slate-200 rounded animate-pulse" />
      </div>

      {/* Course List Skeleton */}
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
    </div>
  );
}
