import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENT_API = `${REMOTE_SERVER}/api/enrollments`;

export const getAllCourses = async () => {
  const response = await axios.get(`${ENROLLMENT_API}`);
  return response.data;
};

export const unEnrollment = async (courseId: string) => {
  const { data } = await axios.delete(`${ENROLLMENT_API}/${courseId}`);
  return data;
};
