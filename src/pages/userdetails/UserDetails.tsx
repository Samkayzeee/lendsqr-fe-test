import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./UserDetails.scss";

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

  return (
    <DefaultLayout>
      {
        user ? 
        
      <main className="userDetails">
          <div className="first">
            <Link to={'/dashboard/users/'}>Back to Users</Link>
            <div className="usershow">
              <h2>User Details</h2>
              <div>
                <button>BLACKLIST USER</button>
                <button>ACTIVATE USER</button>
              </div>
            </div>
          </div>
      </main>
      :
      <p>User not found</p>
      }
    </DefaultLayout>
  );
}
