import React, { useState, useEffect } from "react";
import "../../assets/css/dashboard.css";
import Password from "antd/es/input/Password";
import { DatePicker, Radio, Select, Space } from "antd";
const { RangePicker } = DatePicker;
import { Formik, useFormik, Field } from "formik";
import FormList from "antd/es/form/FormList";
import { basicSchema } from "./validateForm";
import Form from "react-bootstrap/Form";
import { EventNoteTwoTone, TouchAppRounded } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import axios from "axios";
import { creatNewUser } from "../../service/UserService";
import { Navigate, useNavigate } from "react-router-dom";
import { MDBCollapse } from "mdb-react-ui-kit";
import { boolean } from "yup";
const onOk = (value) => {
  console.log("onOk: ", value);
};
const onSubmit = () => {
  console.log("submit");
};

function AddPage() {
  // const [Password, setPassword] = useState("123456");
  // const location = useLocation();
  // const {setListUsers} =  location.state;
  const [fields, setFields] = useState([
    {
      experienceId: "",
      company: "",
    },
  ]);
  const [errorFood, setErrorFood] = useState("");
  const [errorQuantity, setErrorQuantity] = useState("");
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Submit");
    console.log(formik.values);
    // console.log(formik.errors);
  };
  const [Role, setRole] = useState("");
  const [test, setTest] = useState("");
  const [selectedFoodIds, setSelectedFoodIds] = useState([]);
  const handleRadioChange = (value) => {
    // setSex(value.target.value);
    formik.values.sex = value.target.value;
  };
  const handleRoleChange = (value) => {
    formik.values.role = value.target.value;
  };
  const handleChange1 = (value) => {
    // console.log(`selected ${value}`);
    // setRole(value);
    formik.values.wID = value;
  };
  const roleOptions = [
    { id: 1, value: "2", label: "Staff" },
    { id: 2, value: "3", label: "Zoo Trainer" },
  ];
  const handleFoodSelect = (event, field, form) => {
    const selectedFoodId = event.target.value;
    setSelectedFoodIds((prevSelectedFoodIds) => [
      ...prevSelectedFoodIds,
      selectedFoodId,
    ]);
    form.setFieldValue(field.name, selectedFoodId);
  };
  const addField = () => {
    setFields([...fields, { experienceId: "", company: "" }]);
  };
  const [Show, setShow] = useState(true);
  // const [validated, setValidated] = useState(false);
  const toggleShow = () => setShow(!Show);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "123456",
      endDate: "",
      phone: "",
      address: "",
      company: "",
      role: "2",
      sex: true,
      wID: "2",
    },
    validationSchema: basicSchema,
    onSubmit: (values) => {
      submitForm(values);
    },
  });
  const submitForm = async (values) => {
    let img = "";
    if (values.userImage === "") {
      img = "";
    } else {
      img = values.userImage;
    }
    console.log(img);
    const user = {
      email: values.email,
      firstname: values.firstname,
      lastname: values.lastname,
      address: values.address,
      phone: values.phone,
      sex: Boolean(values.sex),
      role: Number(values.role),
      userImage: img,
      experiences: []
    };
    const response = await fetch("https://localhost:44352/api/User", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      console.log("Success");
      localStorage.setItem("isAdded", true);
      navigate("/admin/1");
    }
  };
  return (
    <div className="form-container">
      <div className="form-header">
        <p className="fw-bold fs-2">Create New User</p>
      </div>
      <Formik
        initialValues={{
          email: "",
          firstname: "",
          lastname: "",
          address: "",
          phone: "",
          sex: true,
          role: "2",
          userImage: "",
          fields,
        }}
        validationSchema={basicSchema}
        onSubmit={(values) => {
          submitForm(values);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          errors,
          touched,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <div className="form-content">
              <div className="form">
                <div className="row mb-3">
                  <div className="mb-3 row-content">
                    <label className="form-label">Enter FirstName</label>
                    <Form.Control
                      id="firstname"
                      type="text"
                      placeholder="firstname"
                      aria-describedby="inputGroupPrepend"
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={
                        errors.firstname && touched.firstname
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstname}
                    </Form.Control.Feedback>
                  </div>
                  <div className="mb-3 row-content">
                    <label className="form-label">Enter LastName</label>
                    <Form.Control
                      type="text"
                      id="lastname"
                      placeholder="lastname"
                      aria-describedby="inputGroupPrepend"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={
                        errors.lastname && touched.lastname
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastname}
                    </Form.Control.Feedback>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="mb-3 row-content">
                    <label className="form-label">Enter Email</label>
                    <Form.Control
                      type="email"
                      id="email"
                      placeholder="email"
                      aria-describedby="inputGroupPrepend"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.email && touched.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </div>
                  <div className="mb-3 row-content">
                    <label className="form-label">Choose Role</label>
                    <br />
                    <Radio.Group
                      id="role"
                      name="role"
                      defaultValue={values.role}
                      value={values.role}
                      onChange={handleChange}
                      buttonStyle="solid"
                    >
                      <Radio value="2">Staff</Radio>
                      <Radio value="3">ZooTrainer</Radio>
                    </Radio.Group>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="mb-3 row-content">
                    <label className="form-label">Enter Phone</label>
                    <Form.Control
                      type="string"
                      id="phone"
                      placeholder="phone"
                      aria-describedby="inputGroupPrepend"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={errors.phone && touched.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </Form.Control.Feedback>
                  </div>
                  <div className="mb-3 row-content">
                    <label className="form-label">Choose Sex</label>
                    <br />
                    <Radio.Group
                      id="sex"
                      name="sex"
                      onChange={handleChange}
                      defaultValue={values.sex}
                      value={values.sex}
                      buttonStyle="solid"
                    >
                      <Radio value={true}>Male</Radio>
                      <Radio value={false}>Female</Radio>
                    </Radio.Group>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Enter Address</label>
                  <Form.Control
                    type="text"
                    id="address"
                    placeholder="address"
                    aria-describedby="inputGroupPrepend"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={errors.address && touched.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.address}
                  </Form.Control.Feedback>
                </div>
                <div className="mb-3">
                  <label className="form-label">Choose Image</label>
                  <Form.Control
                    type="file"
                    id="userImage"
                    placeholder="userImage"
                    aria-describedby="inputGroupPrepend"
                    name="userImage"
                    value={values.userImage}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="Food-Information">
                  <div className="mb-3">
                    <label className="form-label">
                      World Experience For Animal
                    </label>
                    {errorQuantity && errorQuantity != null && (
                      <div style={{ color: "red" }}>{errorFood}</div>
                    )}
                    {fields.map((field, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "90%",
                        }}
                        className="mb-3"
                      >
                        <Field
                          name={`fields[${index}].experienceId`}
                        // as="select"
                        // onChange={(e) => handleChange(e.target.value)}
                        >
                          {({ field, form }) => (
                            <Form.Select
                              {...field}
                              placeholder="Chọn món ăn"
                              style={{
                                width: "40%",
                              }}
                              onChange={(event) =>
                                handleFoodSelect(event, field, form)
                              }
                            >
                              <option value="">Choose Role Work Before</option>
                              {/* Render các option từ API */}
                              {roleOptions.map((option) => (
                                <option
                                  key={option.value}
                                  value={option.value}
                                  disabled={selectedFoodIds.includes(
                                    option.value
                                  )}
                                >
                                  {option.label}
                                </option>
                              ))}
                            </Form.Select>
                          )}
                        </Field>
                        <Field
                          placeholder="Enter company"
                          name={`fields[${index}].company`}
                          component="input"
                          style={{
                            width: "40%",
                          }}
                          className="control-field"
                        />
                        {/* <button onClick={() => removeField(index)}>
                          Remove
                        </button> */}
                      </div>
                    ))}
                    {errors.fields && (
                      <div style={{ color: "red" }}>
                        Choose Food and Quantity
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Button onClick={addField}>More Information</Button>
                  </div>
                </div>
                <div className="btn-footer">
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={() => {
                      handleSave();
                    }}
                  >
                    Create User
                  </Button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default AddPage;
