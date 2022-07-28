import React, { useContext, useEffect, useState } from "react";
import { Formik } from "formik";
import styles from "./Signup.module.css";
import Modal from "./Modal";



import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import axios from "axios";
import { isAuthenticatedContext } from "./AuthContextProvider";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
 const { addToUser } = useContext(isAuthenticatedContext);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => setData(res.data));
  }, []);
  const checkLogin = (values) => {
    data.map((item) => {
      if (item.email === values.email && item.password === values.password) {
        addToUser(`${item.firstName} ${item.lastName}`);
        return;
      }
    });
  };
  return (
    <div className={styles.container}>
      <p> خوش آمدید</p>

      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "ایمیل فیلد ضروری است";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "ایمیل وارد شده معتبر نمی باشد";
          }
          if (!values.password) {
            errors.password = "پسورد فیلد ضروری است";
          }

          return errors;
        }}
        // onSubmit={(values, { setSubmitting }) => {
        //   alert(JSON.stringify(values, "null", 2));

        //   // setTimeout(() => {
        //   //   setMessage(true);
        //   //   setIsOpen(true);
        //   //   setSubmitting(false);
        //   // }, 400);
        // }}
        onSubmit={(values, actions) => {
          // alert(JSON.stringify(values, "null", 2));

          checkLogin(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => {
          return (
            <form onSubmit={handleSubmit} className={styles.form}>
              <TextField
                inputProps={{
                  placeholder: "نام",
                  style: {
                    color: "#fff",
                  },
                }}
                sx={{ mt: ".7rem", color: "warning.main" }}
                variant="outlined"
                placeholder="پست الکترونیکی"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                size="small"
                fullWidth
                helperText={
                  errors.firstName && touched.firstName && errors.firstName
                }
              />

              <FormControl variant="outlined" fullWidth>
                <OutlinedInput
                  sx={{ mt: ".7rem" }}
                  size="small"
                  id="password"
                  type={passwordShown ? "text" : "password"}
                  value={values.password}
                  inputProps={{
                    placeholder: "کلمه عبور",
                    style: {
                      color: "#fff",
                    },
                  }}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={togglePassword}
                        onMouseDown={togglePassword}
                        edge="end"
                      >
                        {passwordShown ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                />
              </FormControl>

              <button
                type="submit"
                className={styles.btnField}
                disabled={isSubmitting}
              >
                ورود
              </button>
              <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                message={message}
              />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Login;
// export default WithFetching(Login,"get");
