const { table } = require("./airtable")
const formattedReturn = require("./formattedReturn")

module.exports = async (event) => {
  return table
    .create([{ fields: JSON.parse(event.body) }])
    .then((course) => formattedReturn(200, course))
    .catch(() => formattedReturn(500, { msg: "Something went wrong" }))
}
