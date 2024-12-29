import React from "react";
import dynamic from "next/dynamic";

// Import components with dynamic loading for those that need window
const WelcomeBanner = dynamic(() => import("./_components/WelcomeBanner"), {
  ssr: false,
});

const ButtonsPart = dynamic(() => import("./_components/ButtonsPart"), {
  ssr: false,
});

const CourseList = dynamic(() => import("./_components/CourseList"), {
  ssr: false,
});

function Dashboard() {
  return (
    <div>
      <WelcomeBanner />
      <ButtonsPart />
      <CourseList />
    </div>
  );
}

export default Dashboard;
