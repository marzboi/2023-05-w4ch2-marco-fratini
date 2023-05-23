export type PersonalData = {
  name: string;
  lastname: string;
  BirthDate: Date;
  gender: "male" | "female" | "other" | "prefer not to mention";
  email: string;
  newsletter: boolean;
  username: string;
  password: string;
  repeatPassword: string;
  accountType: "personal" | "pro" | "business";
};
