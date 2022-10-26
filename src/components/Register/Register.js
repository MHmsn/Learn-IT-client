import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AllContext } from "../../contexts/Context/ContextProvider";

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AllContext);
    const navigate = useNavigate();

    const registerHandle = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(() => {
          updateUserProfile({displayName: name, photoURL: photoURL})
          navigate('/');
        })
        .catch(e => console.error(e));
    }
  return (
    <div className=" text-left mx-auto bg-secondary w-2/5 p-20 rounded-xl">
      <h2 className="text-2xl my-4">Register</h2>
      <form onSubmit={registerHandle}>
        <div className="my-4">
          <label htmlFor="inputName">Name</label>
          <br/>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="p-2 rounded-lg w-full"
            required
          ></input>
        </div>
        <div className="my-4">
          <label htmlFor="inputPassword">Photo URL</label>
          <br/>
          <input
            name="photoURL"
            type="text"
            placeholder="Enter your PhotoURL"
            className="p-2 rounded-lg w-full"
            required
          ></input>
        </div>
        <div className="my-4">
        <label htmlFor="inputEmail">Email</label>
          <br/>
          <input
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="p-2 rounded-lg w-full"
            required
          ></input>
        </div>
        <div className="my-4">
          <label htmlFor="inputPassword">Password</label>
          <br/>
          <input
            name="password"
            type="password"
            placeholder="Enter your Password"
            className="p-2 rounded-lg w-full"
            required
          ></input>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
