export interface ILoginRequest {
  username: string,
  password: string,
  remember: boolean
}

export interface ILoginResp {
  token: string,
}
