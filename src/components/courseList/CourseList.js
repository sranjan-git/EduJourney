import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './CourseList.css';
import { database } from "../../firebase/firebase";
import { ref, get } from "firebase/database";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesRef = ref(database, 'courses');
      try {
        const snapshot = await get(coursesRef);
        if (snapshot.exists()) {
          const coursesData = Object.values(snapshot.val());
          setCourses(coursesData);
        } else {
          console.error('No courses data found');
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="header d-flex justify-content-between align-items-center">
        <h2>List of courses</h2>
        <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
      </div>
      <input
        type="text"
        className="form-control mt-3"
        placeholder="Search by course name or instructor..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className="list-group mt-3">
        {filteredCourses.map((course) => (
          <li key={course.id} className="list-group-item course-item">
            <Link to={`/courses/${course.id}`} className="d-flex align-items-center text-decoration-none">
              <img src={course.thumbnail} alt={`${course.name} thumbnail`} className="course-thumbnail" />
              <div className="course-info ml-3">
                <h5>{course.name}</h5>
                <p>Instructor: {course.instructor}</p>
                <p>Enrollment Status: {course.enrollmentStatus}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
