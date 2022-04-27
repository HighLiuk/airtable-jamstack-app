const formattedReturn = require("./helpers/formattedReturn")
const getCourses = require("./helpers/getCourses")
const createCourse = require("./helpers/createCourse")
const deleteCourse = require("./helpers/deleteCourse")
const updateCourse = require("./helpers/updateCourse")

const routes = {
  GET: getCourses,
  POST: createCourse,
  DELETE: deleteCourse,
  PUT: updateCourse,
}

exports.handler = async (event) => {
  return (await routes?.[event.httpMethod]?.(event)) ?? formattedReturn(405, {})
}
