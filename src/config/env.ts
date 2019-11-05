import * as Env from 'dotenv'

Env.config()

const { NODE_URL } = process.env

export { NODE_URL }
