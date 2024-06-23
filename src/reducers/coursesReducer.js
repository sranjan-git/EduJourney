const initialState = {
    enrolledCourses: [
      // Example enrolled courses
      {
        id: 1,
        name: "Introduction to React",
        instructor: "John Doe",
        dueDate: "2023-07-01",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
      },
      // Add more enrolled courses if needed
    ],
    completedCourses: [],
  };
  
  const coursesReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ENROLL_COURSE":
        return {
          ...state,
          enrolledCourses: [...state.enrolledCourses, action.payload],
        };
      case "COMPLETE_COURSE":
        return {
          ...state,
          completedCourses: [...state.completedCourses, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default coursesReducer;
  