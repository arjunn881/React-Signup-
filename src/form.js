import React, { useState } from "react";
import Style from "./form.module.css";

const form = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const submitUser = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <form className={Style.form}>
        <div className={Style.btncon}>
          <h1>SIGN UP</h1>
        </div>
        <div className={Style.input}>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={user.fname}
            onChange={handleInput}
          />
        </div>
        <div className={Style.input}>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={user.lname}
            onChange={handleInput}
          />
        </div>

        <div className={Style.input}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
        </div>

        <div className={Style.input}>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={user.phone}
            onChange={handleInput}
          />
        </div>

        <div className={Style.input}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            value="checkbox"
            onChange={handleInput}
          />
          <label className={Style.checkbox} htmlFor="vehicle1">
            {" "}
            Agreed T&Cs
          </label>
        </div>
        <div className={Style.btncon}>
          <button className={Style.btn} onClick={submitUser}>
            {" "}
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default form;
