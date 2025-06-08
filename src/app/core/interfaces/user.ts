export interface UserInterface {
  id?: string;
  name: string;
  email: string;
  password?: string;
  avatar?: string; 
  isActive?: boolean; // default true
  createdAt?: Date;
  updatedAt?: Date;
  phone?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  name?: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  user: UserInterface;
  starDate: Date;
  endDate: Date;
}
