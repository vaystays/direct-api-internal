import Redis from 'ioredis'

const redis = new Redis()

const ONE_HOUR = 60 * 60 * 1000

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


