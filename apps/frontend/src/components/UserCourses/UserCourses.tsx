import React from 'react';
import { Bar, Progress } from './UserCourses.styles';

interface Course {
  _id: string;
  title: string;
  description: string;
  percentCompleted: number;
  inscriptionDate: string;
}

interface UserCoursesProps {
  courses: Course[];
}

const UserCourses: React.FC<UserCoursesProps> = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course._id}>
          <h3>{course.title}</h3>
          <Bar>
            <Progress maxWidth={course.percentCompleted} />
          </Bar>
          <p>Inscription Date: {course.inscriptionDate}</p>
        </div>
      ))}
    </div>
  );
};

export default UserCourses;
