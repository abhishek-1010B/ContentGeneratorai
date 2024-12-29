"use client";

import React from "react";
import WelcomeBanner from "./WelcomeBanner";
import CourseList from "./CourseList";

function ClientDashboard() {
  return (
    <div>
      <WelcomeBanner />
      <CourseList />
    </div>
  );
}

export default ClientDashboard;
