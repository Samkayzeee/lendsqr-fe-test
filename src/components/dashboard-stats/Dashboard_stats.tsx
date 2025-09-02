import "./Dashboard_stats.scss";

import user from "/images/dashboard/users.png";
import active_users from "/images/dashboard/active-users.png";
import loan_users from "/images/dashboard/loan-users.png";
import savings_users from "/images/dashboard/savings-users.png";




const Dashboard_stats = () => {
  return (
    <div className="dashboard_stats">
        <h2>Users</h2>
        <div className="stats">
            <div className="card">
                <img src={user} alt="user-stats logo" />
                <h4>USERS</h4>
                <h2> 2,453 </h2>
            </div>
            <div className="card">
                <img src={active_users} alt="active-users stats" />
                <h4>ACTIVE USERS</h4>
                <h2>2,453</h2>
            </div>
            <div className="card">
                <img src={loan_users} alt="loan-users stats" />
                <h4>USERS WITH LOAN</h4>
                <h2>12,453</h2>
            </div>
            <div className="card">
                <img src={savings_users} alt="users-with-savings stats" />
                <h4>USERS WITH SAVINGS</h4>
                <h2>102, 453</h2>
            </div>
        </div>
    </div>
  )
}

export default Dashboard_stats;