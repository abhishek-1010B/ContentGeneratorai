import React from "react";
import WelcomeBanner from "./_components/WelcomeBanner";
import CourseList from "./_components/CourseList";
import ButtonsPart from "./_components/ButtonsPart";

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
