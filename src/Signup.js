import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  firstName: yup.string().required(" فیلد ضروری است"),
  lastName: yup.string().required(" فیلد ضروری است"),

  province: yup.string().required(" فیلد ضروری است"),

  email: yup
    .string()
    .email("پست الکترونیکی معتبر نمی باشد")
    .required("فیلد ضروری است"),
});

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",

      lastName: "",

      email: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.setSubmitting(false);      
      formik.resetForm(); 
      
    },
    validationSchema,
  });
  const [provinces, setProvinces] = useState("");
  useEffect(() => {
    axios
      .get(" http://localhost:3001/province")
      .then((res) => setProvinces(res.data));
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>

      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      {formik.errors.firstName &&
        formik.touched.firstName &&
        formik.errors.firstName}
      <label htmlFor="lastName">Last Name</label>

      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label htmlFor="email">Email Address</label>

      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <div>
        <select
          defaultValue="استان"
          type="text"
          name="province"
          onChange={formik.handleChange}
          value={formik.values.province}
        >
          <option defaultValue="DEFAULT">استان</option>
          {Object.keys(provinces).map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <span>
          {formik.errors.province &&
            formik.touched.province &&
            formik.errors.province}
        </span>
      </div>

      <button type="submit" onClick={formik.resetForm}>Submit</button>
    </form>
  );
};

export default Signup;
