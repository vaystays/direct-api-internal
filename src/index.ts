import { GraphQLServer } from 'graphql-yoga'
import {
  GraphQLDate as Date,
  GraphQLTime as Time,
  GraphQLDateTime as DateTime
} from 'graphql-iso-date'
import GraphQLJSON from 'graphql-type-json'

const resolvers = {
  Date,
  Time,
  DateTime,
  JSON: GraphQLJSON,

  Query: {
    hello: (_, { name }) => {
      const returnValue = `Hello ${name || 'World!'}`
      return returnValue
    }
  }
}

const server = new GraphQLServer({
  typeDefs: ['./src/schema.graphql'],
  resolvers
})

server.start(() => console.log('Server is running on http://localhost:4000'))
