export interface IUserRegistrationFormData {
  firstName: string;
  lastName: string;
  gender:string;
  dob:Date;
  phone:number;
  city:string;
  country:string;
  pincode:string;
  profession:string;
  email: string;
  password: string;
  confirmpassword: string;
  isAdmin:boolean;
  isActive:boolean;
}