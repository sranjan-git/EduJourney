// src/components/CourseList.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import coursesData from "../../coursesData";
import './CourseList.css';


const CourseList = () => {
  const [courses, setCourses] = useState(coursesData);
  const [searchTerm, setSearchTerm] = useState("");

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






// // src/components/CourseList.js
// // src/components/CourseList.js
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { ref, onValue } from 'firebase/database';
// import { database } from '../firebase'; // Import Firebase database
// import './CourseList.css';

// const CourseList = () => {
//   const [courses, setCourses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchCourses = async () => {
//       const coursesRef = ref(database, 'courses');
//       onValue(coursesRef, (snapshot) => {
//         const data = snapshot.val();
//         if (data) {
//           const fetchedCourses = Object.keys(data).map(key => ({
//             id: key,
//             ...data[key]
//           }));
//           setCourses(fetchedCourses);
//         }
//       });
//     };

//     fetchCourses();
//   }, []);

//   const filteredCourses = courses.filter(course =>
//     course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="course-list-container">
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search by course name or instructor"
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <div className="course-list">
//         {filteredCourses.map(course => (
//           <div key={course.id} className="course-card">
//             <img src={course.thumbnail} alt={course.name} className="course-thumbnail" />
//             <div className="course-info">
//               <h5>{course.name}</h5>
//               <p>Instructor: {course.instructor}</p>
//               <Link to={`/courses/${course.id}`} className="btn btn-primary">
//                 View Details
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="dashboard-button">
//         <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
//       </div>
//     </div>
//   );
// };

// export default CourseList;

