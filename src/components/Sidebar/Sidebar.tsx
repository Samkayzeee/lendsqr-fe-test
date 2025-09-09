import React from "react";
import "./Sidebar.scss";


import briefcase from "/images/sidebar/briefcase.png";
import home from "/images/sidebar/home.png";
import user_face from "/images/sidebar/user-friends.png";
import guarantors from "/images/sidebar/guarantors.png";
import loan from "/images/sidebar/loans_logo.png";
import saving from "/images/sidebar/savings.png";
import loan_request from "/images/sidebar/loan-request.png";
import bank from "/images/sidebar/bank.png";
import transactions from "/images/sidebar/transaction.png";
import services from "/images/sidebar/services.png";
import service_account from "/images/sidebar/service-account.png";
import settlements from "/images/sidebar/settlements.png";
import reports from "/images/sidebar/reports.png";
import preferences from "/images/sidebar/preferences.png";
import fees_and_pricing from "/images/sidebar/fees-and-pricing.png";
import audit_logs from "/images/sidebar/audit-logs.png";

import {
  FaCoins,
  FaRegHandshake
} from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaUserCheck, FaUserXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";



interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>

      <div className="sidebar-content">
        <div className="switch-org">
          <img src={briefcase} alt="Switch Organization Logo" />
          <span>Switch Organization</span>
          <RiArrowDropDownLine className="icon"/>
        </div>

        <ul className="menu">
          <li className="dashboard-link">
            <NavLink to={'/dashboard/users'}>
              <img src={home} alt="Home-dashboard" />
              <span> Dashboard </span>
            </NavLink>
          </li>

          <p className="section-title">CUSTOMERS</p>
          <li>
            <NavLink to={'/dashboard/users'} className={({ isActive }) => (isActive ? "active-link" : "")}>
            <img src={user_face} alt="user-logo" />
            <span>Users</span> </NavLink>
          </li>
          <li>
            <Link to={'#'}>
            <img src={guarantors} alt="guarantors-logo" />
            Guarantors </Link>
          </li>
          <li>
            <Link to={'#'}>
            <img src={loan} alt="loans-logo" />
            Loans</Link>
          </li>
          <li>
            <Link to={'#'}> <FaRegHandshake /> Decision Models </Link>
          </li>
          <li>
            <Link to={'#'}>
            <img src={saving} alt="saving-logo" />
            Savings</Link>
          </li>
          <li>
            <Link to={'#'}>
            <img src={loan_request} alt="Loan-Request" />
            Loan Requests</Link>
          </li>
          <li>
            <Link to={"#"}><FaUserCheck /> Whitelist</Link>
          </li>
          <li>
            <Link to={"#"}><FaUserXmark /> Karma</Link>
          </li>

          <p className="section-title">BUSINESSES</p>
          <li className="">
            <Link to={"#"}>
            <img src={briefcase} alt="Organization Logo" />
            Organization </Link>
          </li>
          <li>
            <Link to={"#"}>
            <img src={loan_request} alt="Loan-Request" />
            Loan Products</Link>
          </li>
          <li>
            <Link to={"#"}>
            <img src={bank} alt="bank-logo" />
            Savings Products</Link>
          </li>
          <li>
            <Link to={"#"}><FaCoins /> Fees and Charges</Link>
          </li>
          <li>
            <Link to={"#"}>
            <img src={transactions} alt="transaction-logo" />
            Transactions</Link>
          </li>
          <li>
            <Link to={"#"}>
            <img src={services} alt="services-logo" />
            Services</Link>
          </li>
          <li>
            <Link to={"#"}>
            <img src={service_account} alt="service-account logo" />
            Service Account</Link>
          </li>
          <li>
            <Link to={"#"}>
            <img src={settlements} alt="settlements-logo" />
            Settlements</Link>
          </li>
          <li>
            <Link to={"#"}>
            <img src={reports} alt="reports-logo" />
            Reports </Link>
          </li>

          <p className="section-title">SETTINGS</p>
          <li>
            <Link to={"#"}>
            <img src={preferences} alt="preferences-logo" />
            Preferences </Link>
          </li>
          <li>
            <Link to={"#"}>
            <img src={fees_and_pricing} alt="fees-and-pricing logo" />
            Fees and Pricing</Link>
          </li>

          <li>
            <Link to={"#"}>
            <img src={audit_logs} alt="audit-logs logo" />
            Audit Logs</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
