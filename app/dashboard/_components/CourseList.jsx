"use client";

import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useState, useEffect } from "react";
import CourseCardItem from "./CourseCardItem";

function CourseList() {
  const { user } = useUser();
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    if (user) {
      GetCourseList();
    }
  }, [user]);

  const GetCourseList = async () => {
    try {
      const result = await axios.post("/api/courses", {
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });
      setCourseList(result.data.result || []); // Ensure result is an array
    } catch (error) {
      console.error("Error fetching course list:", error);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="font-bold text-2xl">Your Study Material</h2>
      <div className="grid grid-col-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {courseList?.map((course, index) => (
          <CourseCardItem course={course} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CourseList;
