const { table } = require("./airtable")
const formattedReturn = require("./formattedReturn")

module.exports = async (event) => {
  return table
    .destroy(JSON.parse(event.body).id)
    .then((course) => formattedReturn(200, course))
    .catch(() => formattedReturn(500, { msg: "Something went wrong" }))
}
