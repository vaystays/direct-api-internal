import * as Env from 'dotenv'

Env.config()

export const NODE_URL = process.env.NODE_URL
export const API_URL = process.env.API_URL
export const REDIS_URL = process.env.REDIS_URL
