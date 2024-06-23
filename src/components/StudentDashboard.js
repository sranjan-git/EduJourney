import React from "react";
import { useDispatch, useSelector } from "react-redux";

const StudentDashboard = () => {
  const dispatch = useDispatch();
  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
  const completedCourses = useSelector((state) => state.courses.completedCourses);

  const markAsCompleted = (courseId) => {
    dispatch({ type: "COMPLETE_COURSE", payload: courseId });
  };

  return (
    <div className="container">
      <h2>Student Dashboard</h2>
      <ul className="list-group mt-3">
        {enrolledCourses.map((course) => (
          <li key={course.id} className="list-group-item">
            <div className="d-flex justify-content-between">
              <div>
                <h5>{course.name}</h5>
                <p>Instructor: {course.instructor}</p>
                <p>Due Date: {course.dueDate || "No due date"}</p>
                <div>
                  Progress: <progress value={completedCourses.includes(course.id) ? 100 : 0} max="100"></progress>
                </div>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => markAsCompleted(course.id)}
                disabled={completedCourses.includes(course.id)}
              >
                {completedCourses.includes(course.id) ? "Completed" : "Mark as Completed"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
