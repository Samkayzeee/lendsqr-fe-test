

// profile interface
interface profile{
  firstName: string;
  lastName: string;
  gender: string;
  accountBalance: number;
  maritalStatus: string;
  levelOfEducation: string;
  employmentStatus: string;
  sector: string;
}


// guarantor type
type guarantor = {
  firstName: string;
  lastName: string;
  phone: string | number;
  email: string;
  relationship: string;
}

// main user interface
export interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  status: string;
  account_number: string;
  bank_name: string;
  BVN: string;
  children: number | string;
  type_of_residence: string;
  duration_of_employment: string;
  office_email: string;
  monthly_income: string;
  loan_repayment: string;
  twitter: string;
  facebook: string;
  instagram: string;
  profile: profile;
  guarantor: guarantor;
}

export interface UserTable {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone: string;
  createdAt: string;
  status: string;
}