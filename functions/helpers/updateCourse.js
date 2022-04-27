const { table } = require("./airtable")
const formattedReturn = require("./formattedReturn")

module.exports = async (event) => {
  const { id, ...fields } = JSON.parse(event.body)

  return table
    .update([{ id, fields }])
    .then((course) => formattedReturn(200, course))
    .catch(() => formattedReturn(500, { msg: "Something went wrong" }))
}
