const { table } = require("./airtable")
const formattedReturn = require("./formattedReturn")

module.exports = async (event) => {
  return table
    .select()
    .firstPage()
    .then((courses) =>
      courses.map((course) => ({
        id: course.id,
        ...course.fields,
      }))
    )
    .then((courses) => formattedReturn(200, courses))
    .catch(() => formattedReturn(500, { msg: "Something went wrong" }))
}
