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
        {
            id: 2,
            name: "Advanced React",
            instructor: "Jane Smith",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
        },
        {
            id: 4,
            name: "Full-Stack Web Development",
            instructor: "Emily Davis",
            thumbnail: "https://codingbytes.com/wp-content/uploads/2022/03/full-stack-web-development.jpg"
        },
        {
            id: 5,
            name: "Python for Data Science",
            instructor: "Sophia Lee",
            thumbnail: "https://w1.pngwing.com/pngs/835/530/png-transparent-python-logo-programming-language-computer-programming-python-programming-basics-for-absolute-beginners-scripting-language-source-code-php-code-climate-inc-thumbnail.png"
        },
    
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
  