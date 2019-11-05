import { GraphQLServer } from 'graphql-yoga'
import {
  GraphQLDate as Date,
  GraphQLTime as Time,
  GraphQLDateTime as DateTime
} from 'graphql-iso-date'
import GraphQLJSON from 'graphql-type-json'

import { info } from './config/logging'

const resolvers = {
  Date,
  Time,
  DateTime,
  JSON: GraphQLJSON,

  Query: {
    hello: async (_, { name }) => {
      const returnValue = `Hello ${name || 'World!'}`
      await info(returnValue, { params: { name } })
      return returnValue
    }
  }
}

const server = new GraphQLServer({
  typeDefs: ['./src/schema.graphql'],
  resolvers,
  // @ts-ignore
  debug: true,
  // @ts-ignore
})

server.start(() => console.log('Server is running on http://localhost:4000'))
