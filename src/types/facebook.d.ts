declare type FacebookAuthResponse = {
  accessToken: string
  userID: string
}

declare type FacebookUserData = {
  name: string
  email: string
}

type FacebookLoginCallback = (response: {
  authResponse?: FacebookAuthResponse
}) => void

type FacebookUserCallback = (response: FacebookUserData) => void

type FacebookAPI = {
  login(callback: FacebookLoginCallback, options: { scope: string }): void
  api(path: string, callback: FacebookUserCallback): void
}
