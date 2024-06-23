import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseList from "./components/courseList/CourseList";
import CourseDetails from "./components/courseDetail/CourseDetails";
import StudentDashboard from "./dashboard/StudentDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="*" element={<CourseList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
