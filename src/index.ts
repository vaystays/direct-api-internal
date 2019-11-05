import {
  GraphQLServer,
  Options,
  OptionsWithHttps
} from 'graphql-yoga'
import {
  GraphQLDate as Date,
  GraphQLTime as Time,
  GraphQLDateTime as DateTime
} from 'graphql-iso-date'
import GraphQLJSON from 'graphql-type-json'

import { info, error } from './config/logging'
import { Props } from 'graphql-yoga/dist/types'

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
    },
  },
}

type ServerOptions = Options | OptionsWithHttps | Props<any> | any

const options: ServerOptions = {
  port: process.env.PORT || 4000,
  typeDefs: ['./src/schema.graphql'],
  resolvers,
  debug: true,
  tracing: true,
  logFunction: message => {
    console.log(message)
    info(message.key, message.data)
  }
}

const server: GraphQLServer = new GraphQLServer(options)

server.start(() => console.log(`Started: http://localhost:${options.port}`))
      .catch(err => {
        console.log(err)
        return error(err)
      })
