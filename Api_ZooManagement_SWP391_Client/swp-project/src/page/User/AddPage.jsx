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
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Submit");
    console.log(formik.values);
    // console.log(formik.errors);
  };
  const [Role, setRole] = useState("");
  const [test, setTest] = useState("");
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
  const onChange1 = (value, dateString) => {
    const date1 = Array.of(dateString);
    formik.values.startDate = date1[0][0];
    formik.values.endDate = date1[0][1];
  };
  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };
  // const onChange = (value, dateString) => {
  //   const date = Array.of(dateString);
  //   formik.values.startDate1 = date[0][0];
  //   formik.values.endDate1 = date[0][1];
  // };
  const submitForm = async (values) => {
    // // Lấy dữ liệu cần gửi
    // const { first_name, last_name } = values;
    // let res = await creatNewUser(first_name, last_name);
    // // Gọi API
    // if (res.data && res.data.id) {
    //   //success
    // toast.success("Successfully created user");
    // location.href = "http://localhost:5173/staff/1";
    // navigate("/staff/1");
    // } else {
    //   //error
    //   toast.error("Error creating user");
    // }
    // console.log(res.data);
    const { company } = values;
    const user = {
      // wId: values.wID,
      // company: company,
      email: values.email,
      firstname: values.first_name,
      lastname: values.last_name,
      address: values.address,
      phone: values.phone,
      sex: Boolean(values.sex),
      role: Number(values.role),
      userImage: "string",
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
      navigate("/staff/1");
    }
  };
  return (
    <div className="form-container">
      <div className="form-header">
        <p className="fw-bold fs-2">Create New User</p>
      </div>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <div className="form-content">
          <div className="form">
            <div className="row mb-3">
              <div className="mb-3 row-content">
                <label className="form-label">Enter FirstName</label>
                <Form.Control
                  id="first_name"
                  type="text"
                  placeholder="first_name"
                  aria-describedby="inputGroupPrepend"
                  name="first_name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    formik.errors.first_name && formik.touched.first_name
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.first_name}
                </Form.Control.Feedback>
              </div>
              <div className="mb-3 row-content">
                {/* <label className="form-label">Enter LastName</label>
                <input
                  type="text"
                  className="form-control"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  id="last_name"
                /> */}
                <label className="form-label">Enter LastName</label>
                <Form.Control
                  type="text"
                  id="last_name"
                  placeholder="last_name"
                  aria-describedby="inputGroupPrepend"
                  name="last_name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={
                    formik.errors.last_name && formik.touched.last_name
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.last_name}
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.errors.email && formik.touched.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </div>
              <div className="mb-3 row-content">
                <label className="form-label">Choose Role</label>
                <br />
                <Radio.Group
                  id="role"
                  name="role"
                  defaultValue={formik.values.role}
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  buttonStyle="solid"
                >
                  <Radio.Button value="2">Staff</Radio.Button>
                  <Radio.Button value="3">ZooTrainer</Radio.Button>
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
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.errors.phone && formik.touched.phone}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.phone}
                </Form.Control.Feedback>
              </div>
              <div className="mb-3 row-content">
                <label className="form-label">Choose Sex</label>
                <br />
                <Radio.Group
                  id="sex"
                  name="sex"
                  onChange={formik.handleChange}
                  defaultValue={formik.values.sex}
                  value={formik.values.sex}
                  buttonStyle="solid"
                >
                  <Radio value={true}>Male</Radio>
                  <Radio value={false}>Female</Radio>
                </Radio.Group>
              </div>
            </div>
            {/* <div className="mb-3">
              <label className="form-label">Enter PhoneNumber</label>
              <input
                type="number"
                className="form-control"
                value={Job}
                onChange={(event) => {
                  setJob(event.target.value);
                }}
              />
            </div> */}
            <div className="mb-3">
              <label className="form-label">Enter Address</label>
              <Form.Control
                type="text"
                id="address"
                placeholder="address"
                aria-describedby="inputGroupPrepend"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.errors.address && formik.touched.address}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.address}
              </Form.Control.Feedback>
            </div>
            <div className="mb-3">
              <label className="form-label">Enter EndDate</label>
              <Form.Control
                type="date"
                id="endDate"
                placeholder="address"
                aria-describedby="inputGroupPrepend"
                name="endDate"
                value={formik.values.endDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.errors.endDate && formik.touched.endDate}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Choose Sex</label>
              <br />
              <Radio.Group
                id="wID"
                name="wID"
                onChange={formik.handleChange}
                defaultValue={formik.values.wID}
                value={formik.values.wID}
                buttonStyle="solid"
              >
                <Radio value="2">Staff</Radio>
                <Radio value="3">ZooTrainer</Radio>
                <Radio value={null}>None</Radio>
              </Radio.Group>
              {/* <MDBCollapse show={Show}> */}
              <div className="row mb-3 mt-3">
                <div className="mb-3 row-content">
                  <label className="form-label">Enter Company</label>
                  <Form.Control
                    type="text"
                    id="company"
                    placeholder="company"
                    aria-describedby="inputGroupPrepend"
                    name="company"
                    value={formik.values.company}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    isInvalid={formik.errors.company && formik.touched.company}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.company}
                  </Form.Control.Feedback>
                </div>
              </div>
              {/* </MDBCollapse> */}
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
    </div>
  );
}

export default AddPage;
