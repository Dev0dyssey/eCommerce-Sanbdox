import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          ></FormInput>
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;

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
