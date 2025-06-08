import { LoginRequest } from "../../interfaces/user"

interface User {
  email: string | null;
  password: string | null;
  name: string | null;
}

export const FormatLoginPayload = (user: Partial<User>): LoginRequest => {
  return {
    email: user.email || '',
    password: user.password || '',
    name: user?.name || ''
  }
}