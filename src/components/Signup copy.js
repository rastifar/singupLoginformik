import React, { useEffect, useState } from "react";
//components
import Modal from "./Modal";
//Api
import axios from "axios";
import styles from "./Signup.module.css";
import { useFormik } from "formik";
import * as yup from "yup";

import {
  FormControl,
 
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  NativeSelect,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const validationSchema = yup.object().shape({
  firstName: yup.string().required(" فیلد ضروری است"),
  lastName: yup.string().required(" فیلد ضروری است"),
  password: yup.string().required(" فیلد ضروری است"),
  education: yup.string().required(" فیلد ضروری است"),
  institute: yup.string().required("فیلد ضروری است"),
  province: yup.string().required(" فیلد ضروری است"),
  city: yup.string().required(" فیلد ضروری است"),
  email: yup
    .string()
    .email("پست الکترونیکی معتبر نمی باشد")
    .required("فیلد ضروری است"),
});

// const useStyles = makeStyles(theme => ({
//   helperText: {
//     color: "red",
//     direction:"rtl"
//   }
// }))


const Signup = () => {
  // const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      education: "",
      institute: "",
      province: "",
      city: "",
    },
    onSubmit: (values) => {
      setTimeout(() => {
        // alert(JSON.stringify(values, null, 2));
        axios.post(" http://localhost:3001/users", values);

        setMessage(true);
        setIsOpen(true);
      }, 1000);
    },
    validationSchema,
  });

  const [provinces, setProvinces] = useState("");
  const [message, setMessage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  useEffect(() => {
    axios
      .get(" http://localhost:3001/province")
      .then((res) => setProvinces(res.data));
  }, []);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  // Object.keys(provinces).map((item, index) => (console.log(item,index)))
  return (
    <div className={styles.container}>
      <p>رایگان ثبت نام کنید</p>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        {/* name */}

        <TextField
          inputProps={{
            placeholder: "نام",
            style: {
              color: "#fff",
            },
          }}
         
          sx={{ mt: ".7rem", color: "warning.main" }}
          variant="outlined"
          id="firstName"
          name="firstName"
          type="text"
          size="small"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.firstName}
          helperText={
            formik.errors.firstName &&
            formik.touched.firstName &&
            formik.errors.firstName
          }
        />

        {/* lastname */}

        <TextField
          sx={{ mt: ".7rem" }}
          inputProps={{
            placeholder: "نام خانوادگی",
            style: {
              color: "#fff",
            },
          }}
          id="lastName"
          name="lastName"
          type="text"
          size="small"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.lastName}
          helperText={
            formik.errors.lastName &&
            formik.touched.lastName &&
            formik.errors.lastName
          }
        />

        {/* email */}

        <TextField
          sx={{ mt: ".7rem" }}
          inputProps={{
            placeholder: "پست الکترونیکی",
            style: {
              color: "#fff",
            },
          }}
          id="email"
          name="email"
          type="email"
          size="small"
          fullWidth
          onChange={formik.handleChange}
          value={formik.values.email}
          helperText={
            formik.errors.email && formik.touched.email && formik.errors.email
          }
        />

        {/* password */}
        <FormControl variant="outlined" fullWidth>
          <OutlinedInput
            sx={{ mt: ".7rem" }}
            size="small"
            id="password"
            type={passwordShown ? "text" : "password"}
            value={formik.values.password}
            inputProps={{
              placeholder: "کلمه عبور",
              style: {
                color: "#fff",
              },
            }}
            onChange={formik.handleChange}
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
              formik.errors.password &&
              formik.touched.password &&
              formik.errors.password
            }
          />
        </FormControl>

        {/* educatoin */}
        <TextField
          sx={{ mt: ".7rem" }}
          size="small"
          fullWidth
          inputProps={{
            placeholder: "آخرین مدرک تحصیلی",
            style: {
              color: "#fff",
            },
          }}
          id="education"
          name="education"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.education}
          helperText={
            formik.errors.education &&
            formik.touched.education &&
            formik.errors.education
          }
        />

        {/* institute */}

        <TextField
          sx={{ mt: ".7rem" }}
          size="small"
          fullWidth
          inputProps={{
            placeholder: "محل تحصیلی",
            style: {
              color: "#fff",
            },
          }}
          id="institute"
          name="institute"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.institute}
          helperText={
            formik.errors.institute &&
            formik.touched.institute &&
            formik.errors.institute
          }
        />

        {/* province */}
<NativeSelect
        
          select
          sx={{ mt: ".7rem" }}
          type="text"
          name="province"
          onChange={formik.handleChange}
          size="small"
          fullWidth
          label="استان"
          value={formik.values.province}
         
        >
          {/* <MenuItem defaultValue="DEFAULT">استان</MenuItem> */}
          <option  value="">
            <em>استان</em>
          </option >
          {Object.keys(provinces).map((item, index) => (
            <MenuItem  value={item} key={index}>
              {item}
            </MenuItem >
          ))}
       </NativeSelect>
<span style={{color:"red",textAlign:"right"}}>{
            formik.errors.province &&
            formik.touched.province &&
            formik.errors.province
          }</span>
        {/* city */}

        <NativeSelect
          select
         
          label="شهر"
          sx={{ my: ".7rem" }}
          type="text"
          name="city"
          onChange={formik.handleChange}
          size="small"
          fullWidth
          helperText={
            formik.errors.city && formik.touched.city && formik.errors.city
          }
        >
          {/* <MenuItem defaultValue="DEFAULT">شهر</MenuItem> */}
          <option  value="">
            <em>شهر</em>
          </option >
          {formik.values.province ? (
            <div>
              {provinces[formik.values.province].map((item, index) => (
                <option  value={item} key={index}>
                  {item}
                </option >
              ))}
            </div>
          ) : <option  value="">
          <em>شهر</em>
        </option >}
        </NativeSelect>

        <button
          type="submit"
          className={styles.btnField}

          // onClick={() => setIsOpen(true)}
        >
          ثبت نام
        </button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          message={message}
        />
      </form>
    </div>
  );
};
export default Signup;
// export default WithFetching(Signup,"put");
