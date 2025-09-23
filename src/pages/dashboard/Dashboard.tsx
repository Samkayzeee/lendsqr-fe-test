import DefaultLayout from "../../layouts/DefaultLayout";
import "./Dashboard.scss";
import Dashboard_stats from "../../components/dashboard-stats/Dashboard_stats";
import usersData from "../../assets/data/mock_users.json";
import { useEffect, useState } from "react";
import UsersTable from "../../components/userstable/UsersTable";
import type { UserTable } from "../../ts/types";


const Dashboard = () => {

    const [users, setUsers] = useState<UserTable[]>([]);


    useEffect(() => {
          setUsers(usersData);
    },[]);

    localStorage.setItem("users", JSON.stringify(users));



    return ( 
        <DefaultLayout>
            <main className="dashboard">
                <Dashboard_stats />

                <div>
                    <UsersTable users={users} />
                </div>
            </main>
        </DefaultLayout>
     );
}
 
export default Dashboard;