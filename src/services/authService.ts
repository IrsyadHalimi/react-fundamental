type LoginPayload = {
  email: string
  password: string
}

type LoginResponse = {
  token: string
}

export const loginService =
  async (
    payload: LoginPayload
  ): Promise<LoginResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token: "fake-jwt-token"
        })
      }, 1000)
    })
  }