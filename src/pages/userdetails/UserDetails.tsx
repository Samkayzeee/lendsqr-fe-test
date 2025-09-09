// src/pages/UserDetails/UserDetails.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";

interface User {
  id: string;
  username: string;
  email: string;
  phoneNumber: string;
  status: string;
  account_number: string;
  bank_name: string;
  BVN: string;
  children: number;
  type_of_residence: string;
  duration_of_employment: string;
  office_email: string;
  monthly_income: string;
  loan_repayment: string;
  twitter: string;
  facebook: string;
  instagram: string;
}

export default function UserDetails() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const usersData = localStorage.getItem("users");
    if (usersData) {
      const users: User[] = JSON.parse(usersData);
      const selectedUser = users.find((u) => u.id == id);
      setUser(selectedUser || null);
    }
  }, [id]);

  if (!user) return <p>User not found</p>;

  return (
    <DefaultLayout>
      <div className="user-details">
      <h2>{user.username}'s Details</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phoneNumber}</p>
      <p><strong>Status:</strong> {user.status}</p>
      <p><strong>Account Number:</strong> {user.account_number}</p>
      <p><strong>Bank:</strong> {user.bank_name}</p>
      <p><strong>BVN:</strong> {user.BVN}</p>
      <p><strong>Children:</strong> {user.children}</p>
      <p><strong>Residence:</strong> {user.type_of_residence}</p>
      <p><strong>Employment Duration:</strong> {user.duration_of_employment}</p>
      <p><strong>Office Email:</strong> {user.office_email}</p>
      <p><strong>Monthly Income:</strong> {user.monthly_income}</p>
      <p><strong>Loan Repayment:</strong> {user.loan_repayment}</p>
      <p><strong>Twitter:</strong> {user.twitter}</p>
      <p><strong>Facebook:</strong> {user.facebook}</p>
      <p><strong>Instagram:</strong> {user.instagram}</p>
    </div>
    </DefaultLayout>
  );
}
