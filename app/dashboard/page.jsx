import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";

function Dashboard() {
  return (
    <div>
      <WelcomeBanner />
      <CourseList />
    </div>
  );
}

export default Dashboard;
export const dynamic = "force-dynamic"; // Prevent static rendering
