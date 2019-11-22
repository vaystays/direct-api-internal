import { Client, ClientOptions, RequestParams } from '@elastic/elasticsearch'
import { NODE_URL as node } from './env'

const options: ClientOptions = {
  node,
}
export const client: Client = new Client(options)

export enum LogLevel {
  info,
  warning,
  debug,
  error
}

export interface ILog {
  level: LogLevel | string
  message?: string
  body?: object
  createdAt: Date
}

export interface ILogResponse {
  body: object
  statusCode: number
}

const getLevel = (logLevel: LogLevel) => {
  switch (logLevel) {
    case LogLevel.info:
      return 'info'
    case LogLevel.warning:
      return 'warning'
    case LogLevel.debug:
      return 'debug'
    case LogLevel.error:
      return 'error'
  }
}

export const log = async (message: string, logLevel = LogLevel.info, payload = {}) => {
  const level = getLevel(logLevel)
  const logIndex: RequestParams.Index<ILog> = {
    index: `logs`,
    body: {
      message,
      level,
      ...payload,
      createdAt: new Date()
    },
  }

  try {
    const { body, statusCode } = await client.index(logIndex)

    return {
      body,
      statusCode,
    }
  } catch (e) {
    console.log(e)
  }
}

export const info = async (message, additionalInformation = {}) => log(message, LogLevel.info, additionalInformation)

export const debug = async (message, additionalInformation = {}) => log(message, LogLevel.debug, additionalInformation)

export const warning = async (message, additionalInformation = {}) => log(message, LogLevel.warning, additionalInformation)

export const error = async (message, additionalInformation = {}) => log(message, LogLevel.error, additionalInformation)
