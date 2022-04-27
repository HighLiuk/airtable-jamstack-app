import React, { useEffect, useState } from "react"
import CourseList from "./components/CourseList"
import CourseForm from "./components/CourseForm"
import axios from "axios"

export default function App() {
  const [courses, setCourses] = useState([])

  const loadCourses = async () => {
    const { data } = await axios.get("/api/courses")

    setCourses(data)
  }

  useEffect(() => {
    loadCourses()
  }, [])

  return (
    <div className="container mt-5">
      <h1 className="mb-5 text-center">Course Tracker</h1>

      <CourseForm courseAdded={loadCourses} />

      <CourseList courses={courses} refreshCourses={loadCourses} />
    </div>
  )
}
