import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import "./UserDetails.scss";
import { FaRegUser, FaNairaSign } from "react-icons/fa6";
import { FaRegStar, FaStar } from "react-icons/fa";

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
  profile: profile
}

interface profile{
  firstName: string;
  lastName: string;
  gender: string;
  accountBalance: number;
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

          <div className="head">
            <div className="first">

                <div className="profile_details">
                  
                  <span>
                    <FaRegUser />
                  </span>

                  <main> 
                    <h2> {user.profile.firstName} {user.profile.lastName}</h2>
                    <p> {user.username} </p>
                  </main>
                </div>

                <div>
                  <h6> User's Tier </h6>
                  <p>
                    <FaStar style={{ color: "yellow" }}/>
                    <FaRegStar />
                    <FaRegStar />
                  </p>
                </div>

                <div>
                  <h2> <FaNairaSign /> <span> { Math.round(user.profile.accountBalance) } </span> </h2>
                  <p> <span>{ user.account_number }</span> / <span> { user.bank_name } </span> </p>
                </div>
            </div>

            <div>

            </div>
          </div>
      </main>
      :
      <p>User not found</p>
      }
    </DefaultLayout>
  );
}
