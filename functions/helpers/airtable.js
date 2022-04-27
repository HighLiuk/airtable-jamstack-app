require("dotenv").config()

const Airtable = require("airtable")
const base = new Airtable({
  apiKey: process.env.AIRTABLE_CLIENT_KEY,
}).base(process.env.AIRTABLE_CLIENT_ID)

module.exports = {
  table: base("courses"),
}
