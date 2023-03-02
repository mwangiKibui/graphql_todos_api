var express = require('express')
var Schema = require('./schema')
var graphQLHTTP = require('express-graphql')
var app = express()
app.get("/",(req,res,next) => res.json({
  success:true,
  message:"Hello there"
}))
app.use('/', graphQLHTTP({
  schema: Schema,
  pretty: true,
  graphiql: true
}))
app.listen(process.env.PORT || 8080, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(`GraphQL Server is now running on localhost:${process.env.PORT || 8080}`)
})
