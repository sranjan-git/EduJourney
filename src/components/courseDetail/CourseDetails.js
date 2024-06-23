import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './CourseDetails.css';
import { database } from "../../firebase/firebase";
import { ref, get } from "firebase/database";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchCourseData = async () => {
      console.log(`Fetching data for course ID: ${id}`);
      const coursesRef = ref(database, 'courses');
      try {
        const snapshot = await get(coursesRef);
        if (snapshot.exists()) {
          const coursesData = snapshot.val();
          const foundCourse = coursesData.find(course => course.id === parseInt(id, 10));
          if (foundCourse) {
            console.log("Course data fetched successfully:", foundCourse);
            setCourse(foundCourse);
          } else {
            setError(`No data found for course ID: ${id}`);
          }
        } else {
          setError('No courses data found');
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
              {course.syllabus && course.syllabus.map((item, index) => (
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
