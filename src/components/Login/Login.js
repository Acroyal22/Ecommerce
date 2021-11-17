import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import { auth } from "../firebase";
import firebase from "firebase/app";
import { GoogleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const Login = () => {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const history = useHistory();
  const LoginHandler = (values) => {
    console.log(values);
  };
  const LoginValidationSchema = Yup.object().shape({
    email: Yup.string().required("email is required"),
    password: Yup.string().required("password is required"),
  });
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log("user", user);

        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGoogle=()=>{
    const provider = new firebase.auth.GoogleAuthProvider()
    
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {

    const credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = credential.accessToken;
    console.log(token)
    // The signed-in user info.

    const user = result.user;
    history.push({pathname: '/'})
    console.log(user)

}).catch((error) => {
    // Handle Errors here.
    // const errorCode = console.log(errorCode);
    // const errorMessage = console.log(errorMessage);
    // // The email of the user's account used.
    // const email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // const credential = error.credential;
    // ...
})


  }
  
  // const sendPasswordResetEmail = async (email) => {
  //   try {
  //     await auth.sendPasswordResetEmail(email);
  //     alert("Password reset link sent!");
  //   } catch (err) {
  //     console.error(err);
  //     alert(err.message);
  //   }
  // };
  
  return (
    <div className="container-fluid">
    <div className="login-box">
    <div className="login-snip" > <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab" >Logins</label> <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab"></label>
    <div className="login-space">
   <div className="login">
        <Formik
          onSubmit={LoginHandler}
          validationSchema={LoginValidationSchema}
          initialValues={{
            email: "",
            password: "",
          }}
        >
          {({
            values,
            handleSubmit,
            errors,
            touched,
            handleChange,
            handleBlur,
          }) => (
            <>
              <form onSubmit={handleSubmit} >
                <h1 className="tab">
                  Log in to your account 🔐
                </h1>
                <div className="group">
                  <label className="label" for="user">
                    email:</label>
                    <input 
                    id="user" 
                     className="input"
                      type="email"
                      placeholder="enter your email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                      value={values.email}
                      ref={emailRef}
                    />
                    {touched.email && errors.email && (
                      <small className="text-red-500">{errors.email}</small>
                    )}
                  
                </div>
                <div className="group">
                  <label className="user" for="user">
                    password:</label>
                    <input
                      id="user" 
                      className="input"
                      type="password"
                      placeholder="enter your password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      value={values.password}
                      ref={passwordRef}
                    />
                    {touched.password && errors.password && (
                      <small className="text-red-500">{errors.password}</small>
                    )}
                  
                </div>
                <div className="group">
                  <button
                  disabled={values.password.length<4}
                    type="submit"
                    onClick={signIn}
                    className="button"
                  >
                    Login
                  </button>
                </div>
              </form>
            </>
          )}
        </Formik>
        <div className="flex  items-center text-center">
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                                <label className="block font-medium text-sm text-gray-600 w-full">
                                    or use google
                                </label>
                                <hr className="border-gray-300 border-1 w-full rounded-md" />
                            </div>
        <div>
          <div
           className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
            onClick={(e) =>{e.preventDefault(); handleGoogle()}
             
              
            }
          >
            <GoogleOutlined />
            Sign in with google
          </div>
          <div className="text-grey-dark">
                    You dont have an account?           
                    <a className="no-underline border-b border-blue text-blue" href= "/register" >
                        Register one
                    </a>.
                </div>
                 </div>
                 </div>
                 </div>
    
      </div>
      </div>
    </div>
  );
};

export default Login;
