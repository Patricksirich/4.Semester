export class User {
  _id: string;
  username: string;
  password?: string;
  email: string;
  gender: Gender; 
  birthDate: Date;
  phonenumber?: number[];
  country?: string;
}

export enum Gender {
  MALE, FEMALE, OTHER
}