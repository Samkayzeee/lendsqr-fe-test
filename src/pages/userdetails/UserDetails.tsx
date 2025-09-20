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

type guarantor = {
  firstName: string;
  lastName: string;
  phone: string | number;
  email: string;
  relationship: string;
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
                  <h2> <FaNairaSign /> <span> { Math.round(user.profile.accountBalance).toString().slice(0, 3) },{ Math.round(user.profile.accountBalance).toString().slice(3) }.00</span> </h2>
                  <p> <span>{ user.account_number }</span> / <span> { user.bank_name } </span> </p>
                </div>
            </div>

            <div>

            </div>
          </div>

          <div className="details">
            <div className="personal_information">
              <h2>Personal information</h2>

              <div className="main_details">

                <div>
                  <h6> FULL NAME </h6>
                  <p> { user.profile.firstName } {user.profile.lastName} </p>
                </div>

                 <div>
                  <h6> PHONE NUMBER </h6>
                  <p> { user.phone } </p>
                </div>

                 <div>
                  <h6> EMAIL ADDRESS </h6>
                  <p> { user.email } </p>
                </div>

                 <div>
                  <h6>BVN</h6>
                  <p> {user.BVN} </p>
                </div>

                 <div>
                  <h6>GENDER</h6>
                  <p> {user.profile.gender} </p>
                </div>

                 <div>
                  <h6> MARITAL STATUS </h6>
                  <p> {user.profile.maritalStatus} </p>
                </div>

                 <div>
                  <h6>CHILDREN</h6>
                  <p> {user.children} </p>
                </div>

                 <div>
                  <h6> TYPE OF RESIDENCE </h6>
                  <p>{user.type_of_residence}</p>
                </div>



              </div>
            </div>

            <div className="education">
              <h2>Education and Employment</h2>

              <div className="main_details">
                  <div>
                  <h6> LEVEL OF EDUCATION</h6>
                  <p> { user.profile.levelOfEducation } </p>
                </div>

                 <div>
                  <h6> EMPLOYMENT STATUS </h6>
                  <p> { user.profile.employmentStatus } </p>
                </div>

                 <div>
                  <h6>SECTOR OF EMPLOYMENT</h6>
                  <p> {user.profile.sector} </p>
                </div>

                 <div>
                  <h6>DURATION OF EMPLOYMENT</h6>
                  <p> {user.duration_of_employment} </p>
                </div>

                 <div>
                  <h6> OFFICE EMAIL </h6>
                  <p> {user.office_email} </p>
                </div>

                 <div>
                  <h6>MONTHLY INCOME</h6>
                  <p> {user.monthly_income} </p>
                </div>

                <div>
                  <h6> LOAN REPAYMENT </h6>
                  <p> { user.loan_repayment } </p>
                </div>


              </div>
            </div>

            <div className="socials">
              <h2>Socials</h2>

              <div className="main_details">

                <div>
                  <h6> TWITTER </h6>
                  <p> { user.twitter} </p>
                </div>

                <div>
                  <h6> FACEBOOK </h6>
                  <p> { user.facebook } </p>
                </div>

                <div>
                  <h6> INSTAGRAM </h6>
                  <p> { user.instagram } </p>
                </div>

              </div>
            </div>

            <div className="guarantor">
              <h2>Guarantor</h2>

              <div className="main_details">
                <div>
                  <h6> FULL NAME </h6>
                  <p> { user.guarantor.firstName } {user.guarantor.lastName} </p>
                </div>

                <div>
                  <h6> PHONE NUMBER </h6>
                  <p> { user.guarantor.phone } </p>
                </div>

                <div>
                  <h6> EMAIL </h6>
                  <p> { user.guarantor.email} </p>
                </div>

                <div>
                  <h6> RELATIONSHIP </h6>
                  <p> { user.guarantor.relationship } </p>
                </div>

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
