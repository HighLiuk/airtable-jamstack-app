import axios from "axios"

export default function Course({ course, refreshCourses }) {
  const markCoursePurchased = async () => {
    await axios.put("/api/courses", { id: course.id, purchased: true })

    refreshCourses()
  }

  const deleteCourse = async () => {
    await axios.delete("/api/courses", { data: { id: course.id } })

    refreshCourses()
  }

  return (
    <div className="list-group-item">
      <a href={course.link}>
        <h4 className="list-group-item-heading">{course.name}</h4>
      </a>

      <p>
        Tags:{" "}
        {course.tags &&
          course.tags.map((tag, index) => (
            <span className="badge bg-primary me-2" key={index}>
              {tag}
            </span>
          ))}
      </p>

      {!course.purchased && (
        <button
          className="btn btn-sm btn-primary"
          onClick={markCoursePurchased}
        >
          Purchased
        </button>
      )}

      <button className="btn btn-sm btn-danger ms-2" onClick={deleteCourse}>
        Delete
      </button>
    </div>
  )
}
