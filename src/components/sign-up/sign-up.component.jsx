import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);

// const SignUp = () => {
//     const [displayName, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");

//     const handleSubmit = async event => {
//       event.preventDefault();

//       if (password !== confirmPassword) {
//         alert("Password do not match!");
//         return;
//       }

//       try {
//         const { user } = await auth.createUserWithEmailAndPassword(
//           email,
//           password
//         );

//         await createUserProfileDocument(user, { displayName });

//         setName("");
//         setEmail("");
//         setPassword("");
//         setConfirmPassword("");

//       } catch (error) {
//         console.error(error);
//       }
//     };

//     const handleChange = event => {
//         const { name, value } = event.target

//     }

//     return (
//       <div className="sign-up">
//         <h2 className="title">I do not have a account</h2>
//         <span>Sign up with your email and password</span>
//         <form className="sign-up-form" onSubmit={handleSubmit()}>
//           <FormInput
//             type="text"
//             name="displayName"
//             value={displayName}
//             onChange={handleChange()}
//             label="Display Name"
//             required
//           ></FormInput>
//           <FormInput
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange()}
//             label="Email"
//             required
//           ></FormInput>
//           <FormInput
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange()}
//             label="Password"
//             required
//           ></FormInput>
//           <FormInput
//             type="password"
//             name="confirmPassword"
//             value={confirmPassword}
//             onChange={handleChange()}
//             label="Confirm Password"
//             required
//           ></FormInput>
//           <CustomButton type="submit">SIGN UP</CustomButton>
//         </form>
//       </div>
//     );
//   };
