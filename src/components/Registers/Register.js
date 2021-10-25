import * as Yup from "yup";
import { Formik } from "formik";
import { auth } from "../firebase";
import "../../index.css";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Register = (props) => {
  const emailRef = useRef(null);
  
  const passwordRef = useRef(null);
  const userNameRef = useRef("");
  const confirmPassword = useRef("")
  const RegisterHandler = (values) => {
    console.log(values);
  };
  

  const LoginValidationSchema = Yup.object().shape({
    userName: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string()
      .required("password is required")
      .max(15, "maximum of 15")
      .min(5, "minimum of 5")
      .matches(),
    changePassword: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });
const histroy=useHistory()
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
        histroy.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
      

      
  };

 

  return (
    <div className="container register">
      <div className="row">
      <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        <input type="submit" name="" value="Register"/><br/>
                    </div>
      <div className="col-md-9 register-right">

      <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <div class="row register-form">
      <div class="col-md-6">
        <Formik
          onSubmit={RegisterHandler}
          validationSchema={LoginValidationSchema}
          initialValues={{
            userName: "",
            email: "",
            password: "",
            changePassword: "",
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
          
            <form onSubmit={handleSubmit} >
              
              
              <div className="form-group">
                <h2 className="mb-8 text-3xl text-center">
                  Create an account
                </h2>
               
                <br/>
                <label className="tracking-widest">
                  userName:
                  <input
                    className="form-control"
                    placeholder="enter a userName"
                    type="text"
                    name="userName"
                    value={values.userName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    ref={userNameRef}
                  />
                  {touched.userName && errors.userName && (
                    <small className="text-red-500">{errors.userName}</small>
                  )}
                </label>
              </div>
              <div className="form-group">
                <label className="tracking-widest">
                  email:
                  <input
                     className="form-control"
                    placeholder="email your email"
                    type="email"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    ref={emailRef}
                  />
                  {touched.email && errors.email && (
                    <small className="text-red-500">{errors.email}</small>
                  )}
                </label>
              </div>
              <div className="form-group">
                <label className="tracking-widest">
                  password:
                  <input
                     className="form-control"
                    placeholder="password"
                    type="password"
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    ref={passwordRef}
                  />
                  {touched.password && errors.password && (
                    <small className="text-red-500">{errors.password}</small>
                  )}
                </label>
              </div>
              <div className="form-group">
                <label className="tracking-widest">
                  confirm-password:
                  <input
                    className="form-control"
                      // errors.email
                      //   ? "w-full outline-none border-red-300 focus:border-purple-500 rounded p-2 border"
                      //   : "w-full outline-none focus:border-purple-500 rounded p-2 border"
                    
                    placeholder="confirm-password"
                    type="password"
                    name="changePassword"
                    value={values.changePassword}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    ref={confirmPassword}
                  />
                  {touched.password && errors.password && (
                    <small className="text-red-500">{errors.password}</small>
                  )}
                </label>
              </div>
              <button
                type="submit"
                className="btnRegister"
                onClick={signUp}
              >
                Register
              </button>
              
            </form>
          )}
        </Formik>
      
      <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="no-underline border-b border-blue text-blue" href="./login">
                        Log in
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

export default Register;
