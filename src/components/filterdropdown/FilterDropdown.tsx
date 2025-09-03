import React, { useState } from "react";
import styles from "./FilterDropdown.module.scss";
import filter from "/images/dashboard/filter-results-button.png";

const FilterDropdown: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.filterDropdown}>
        <span onClick={() => setOpen(!open)} className={styles.icon}>
        <img src={filter} alt="" />
      </span>


      {open && (
        <div className={styles.menu}>

          <div>
            <label htmlFor="organization">Organization</label>
            <select name="organization" id="">
              <option value="Select">Select</option>
            </select>
          </div>

          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="" placeholder="User"/>
          </div>

          <div>
            <label htmlFor="email">Emails</label>
            <input type="email" name="email" id="" placeholder="Email"/>
          </div>

          <div>
            <label htmlFor="date">Date</label>
            <input type="date" name="date" id="" placeholder="Date"/>
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="text" name="phone" id="" placeholder="Phone Number"/>
          </div>

          <div>
            <label htmlFor="status">Status</label>
            <select name="status" id="">
              <option value="Select">Select</option>
            </select>
          </div>

          <div>
            <button>Reset</button>
            <button>Filter</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
