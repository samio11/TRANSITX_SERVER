export enum IUserRole {
  rider = "rider",
  driver = "driver",
  admin = "admin",
}

export interface IUser {
  _id: string;
  email: string;
  password: string;
  role: IUserRole;
  name: string;
  phone: string;
  profileImage?: string;
  isActive: boolean;
  isBlocked: boolean;
}
