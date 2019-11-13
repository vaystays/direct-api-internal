import ky from 'ky-universal'

export interface IClient {
  post: Function,
  get: Function,
  put: Function,
  del: Function,
}

export const createClient: IClient | any = (token: string) => ky.create({
  credentials: 'omit',
  headers: {
    'Authorization': token,
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.direct.v1',
  }
})
