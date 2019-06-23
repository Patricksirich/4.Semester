export class User {
  _id?: string;
  localId?: string;
  username: string;
  password?: string;
  email: string;
  birthDate: Date;
  phoneNumbers?: phoneNumbers[];
  country?: string;
}
export class phoneNumbers {
  number: string;
}
