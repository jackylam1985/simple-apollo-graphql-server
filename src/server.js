import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './graphql/typeDefs'
import resolvers from './graphql/resolvers'
import mongoose from 'mongoose'
import mongoDbConfig from '../config/database'

const PORT = process.env.PORT || 3000
const app = express()

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

mongoose.Promise = global.Promise
mongoose.connect(`mongodb://${mongoDbConfig.host}:${mongoDbConfig.port}`, { useMongoClient: true })

const Article = mongoose.model('Article', {
  headline: String,
  intro: String,
  authors: [{
    firstName: String,
    lastName: String
  }]
})

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: executableSchema, context: { Article } }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
