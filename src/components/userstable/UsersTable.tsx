import React, { useState, useMemo } from "react";
import styles from "./UsersTable.module.scss";
import Pagination from "../pagination/Pagination";
import FilterDropdown from "../filterdropdown/FilterDropdown";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  phone: string;
  createdAt: string;
  status: string;
}

interface UsersTableProps {
  users: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ users }) => {


  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const [openDropdown, setOpenDropdown] = useState<Number | null>(null);

  const totalItems = users.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  // Clamp current page if pageSize changes
  const safePage = Math.min(currentPage, totalPages);

  const currentUsers = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return users.slice(start, start + pageSize);
  }, [users, pageSize, safePage]);



  const navigate = useNavigate();
  const toggleDropdown = (id: Number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div>
      <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
                <div className={styles.div_flex}>ORGANIZATION <FilterDropdown /></div>
            </th>
            <th>
                <div className={styles.div_flex}>USERNAME <FilterDropdown /></div>
            </th>
            <th>
                <div className={styles.div_flex}>EMAIL <FilterDropdown /></div>
            </th>
            <th>
                <div className={styles.div_flex}>PHONE NUMBER <FilterDropdown /></div>
            </th>
            <th>
                <div className={styles.div_flex}>DATE JOINED <FilterDropdown /></div>
            </th>
            <th>
                <div className={styles.div_flex}>STATUS <FilterDropdown /></div>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.organization.slice(0, 10)}...</td>
              <td>{user.username}</td>
              <td>{user.email.slice(0, 10)}..</td>
              <td>{user.phone.slice(0, 10)}..</td>
              <td>{user.createdAt.slice(0, 8)}..</td>
              <td>
                <span className={`${styles.status} ${styles[user.status.toLowerCase()]}`}>
                  {user.status}
                </span>
              </td>
              <td>
                <div className={styles.view_details}>
                  <span
                  onClick={() => toggleDropdown(user.id)}
                  >
                    <HiOutlineDotsVertical />
                  </span>

                {openDropdown === user.id && (
                <div>
                  <Link to={`/dashboard/users/${user.id}`}>View Details</Link>
                  <Link to={`#`}>Blacklist User</Link>
                  <Link to={`#`}>Activate User</Link>
                </div>
        )}

                </div>
              </td>
            </tr>
          ))}
          {currentUsers.length === 0 && (
            <tr>
              <td colSpan={6} style={{ padding: "16px", textAlign: "center" }}>
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
        </div>


      <Pagination
      currentPage={safePage}
      totalItems={totalItems}
      pageSize={pageSize}
      onPageChange={setCurrentPage}
      onPageSizeChange={(size) => {
        setPageSize(size);
        setCurrentPage(1);
      }}
    />
    </div>
  );
};

export default UsersTable;
