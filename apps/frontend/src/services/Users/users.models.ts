export interface User {
  _id: string;
  isOnline: boolean;
  name: string;
  avatar: string;
  lastName: string;
  email: string;
  username: string;
  phone: string;
  inscriptionDate: string;
  fullName: string;
  courses: Course[]
}

interface Course {
  _id: string;
  title: string;
  description: string;
  percentCompleted: number;
  inscriptionDate: string;
}

