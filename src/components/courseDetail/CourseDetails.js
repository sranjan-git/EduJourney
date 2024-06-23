// src/components/CourseDetails.js

import React from "react";
import { useParams } from "react-router-dom";
import courses from "../../coursesData"; // Import your courses data
import './CourseDetails.css'; // Import custom CSS

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));
  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-details-container">
      <div className="course-card">
        <div className="course-header">
          <h2>{course.name}</h2>
        </div>
        <div className="course-body">
          <div className="course-info">
            <h5>Instructor: {course.instructor}</h5>
            <p><strong>Description:</strong> {course.description}</p>
            <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Schedule:</strong> {course.schedule}</p>
            <p><strong>Location:</strong> {course.location}</p>
            <p><strong>Prerequisites:</strong> {course.prerequisites}</p>
          </div>
          <div className="course-syllabus">
            <strong>Syllabus:</strong>
            <ul>
              {course.syllabus.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;




// // src/components/CourseDetails.js
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { database } from '../firebase';
// import './CourseDetails.css';

// const CourseDetails = () => {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     const fetchCourse = async () => {
//       try {
//         const snapshot = await database.ref(`courses/${1}`).once('123');
//         const data = snapshot.val();
//         if (data) {
//           setCourse(data);
//         }
//       } catch (error) {
//         console.error('Error fetching course:', error);
//       }
//     };

//     fetchCourse();
//   }, [id]);

//   if (!course) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="rcourse-details-containe">
//       <h1>{course.name}</h1>
//       <p><strong>Instructor:</strong> {course.instructor}</p>
//       <p><strong>Description:</strong> {course.description}</p>
//       <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
//       <p><strong>Duration:</strong> {course.duration}</p>
//       <p><strong>Schedule:</strong> {course.schedule}</p>
//       <p><strong>Location:</strong> {course.location}</p>
//       <p><strong>Pre-requisites:</strong> {course.prerequisites}</p>
//       <div className="syllabus">
//         <h3>Syllabus</h3>
//         <ul>
//           {course.syllabus.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CourseDetails;
