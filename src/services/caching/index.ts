import Redis from 'ioredis'
import { REDIS_URL } from '../../config/env'

const redis = new Redis(REDIS_URL)

export const ONE_HOUR = 60 * 60 * 1000

export interface SaveOptions {
  shouldCache: boolean
  expiresInSeconds: number
}

const save = async (
  key: string,
  value: object | [],
  options: SaveOptions = {
    expiresInSeconds: ONE_HOUR,
    shouldCache: true
  }) => {
  const result = await redis.hmset(key, value)
  console.log(result)
  if (options.shouldCache)
    await expiresIn(key, options.expiresInSeconds)
  return {
    result
  }
}

const deleteByKey = async (key) => redis.del(key)

const findByKey = async (key: string, ...fields: any): Promise<any> => redis.hgetall(key, fields)

const exists = async (key: string) => {
  const results = await redis.exists(key)
  return results === 1
}

const expiresIn = async (key: string, expiresInSeconds: number = ONE_HOUR) => redis.expire(key, expiresInSeconds)

export {
  save,
  deleteByKey,
  findByKey,
  exists,

  redis
}


