import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import "../../assets/css/dashboard.css";
import Button from "react-bootstrap/Button";
import Password from "antd/es/input/Password";
import { DatePicker, Radio, Select, Space } from "antd";
const { RangePicker } = DatePicker;
import { Formik, useFormik } from "formik";
import FormList from "antd/es/form/FormList";
import { basicSchema } from "./validateForm";
import "../../assets/css/dashboard.css";
import Form from "react-bootstrap/Form";
import { Email, EventNoteTwoTone, TouchAppRounded } from "@mui/icons-material";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import axios from "axios";
import { creatNewUser } from "../../service/UserService";
import { Navigate, useNavigate } from "react-router-dom";
const onOk = (value) => {
  console.log("onOk: ", value);
};
const onSubmit = () => {
  console.log("submit");
};

export default function EditPage(pros) {
  const { show, handleClose, dataUserEdit } = pros;
  const { Show, setShow } = useState(false);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Submit");
  };
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [Sex, setSex] = useState("");
  const [company, setCompany] = useState("");
  const [uID, setUID] = useState("");
  const [endDate, setEndDate] = useState(null);
  const [status, setStatus] = useState(true);
  const [wID, setWID] = useState("2");
  const [error, setError] = useState("");
  useEffect(() => {
    if (show) {
      setUID(dataUserEdit.userId);
      setFirst_name(dataUserEdit.firstname),
        setLast_name(dataUserEdit.lastname),
        setPhone(dataUserEdit.phone),
        setEmail(dataUserEdit.email),
        setPassword(dataUserEdit.password),
        setAddress(dataUserEdit.address),
        setRole(dataUserEdit.role);
      setSex(String(dataUserEdit.sex) === "true" ? "2" : "3"),
        setCompany(dataUserEdit.company),
        setEndDate(dataUserEdit.endDate),
        setStatus(dataUserEdit.status),
        setWID(dataUserEdit.wID === null ? '2' : `${wID}`)
    }
  }, [dataUserEdit]);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      userId: event.target.elements.first_name.value,
    };
    const user = {
      userId: uID,
      firstname: first_name,
      lastname: last_name,
      address: address,
      phone: phone,
      role: Role,
      endDate: endDate,
      status: status,
    };
    console.log(user.firstname === dataUserEdit.firstname);
    if (user.firstname === dataUserEdit.firstname) {
      console.log("Nothing changed");
      setError("Nothing changed");
      return;
    }
    console.log("OK");
    console.log(user);
    const response = await fetch(`https://localhost:44352/api/User/${uID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      console.log("Success");
      // localStorage.setItem("isAdded", true);
      // handleClose()
      window.location.href = "/staff/1";
      // navigate("/staff/1")
    }
  };
  const [Role, setRole] = useState("");
  const handleRadioChange = (value) => {
    setSex(value.target.value);
  };
  const handleRoleChange = (value) => {
    // console.log(`selected ${value}`);
    setRole(value.target.value);
  };

  // const [validated, setValidated] = useState(false);
  const onChange = (value, dateString) => {
    const date = Array.of(dateString);
    setStarDate(date[0][0]);
    setEndDate(date[0][1]);
  };
  const onChange1 = (value, dateString) => {
    const date1 = Array.of(dateString);
    setStarDate1(date1[0][0]);
    setEndDate1(date1[0][1]);
  };
  const handleChange1 = (value) => {
    // console.log(`selected ${value}`);
    // setRole(value);
    setWID(value.target.value);
  };
  const handleRadioChange2 = (value) => {
    setStatus(value.target.value);
  };
  const handlePhoneChange = (value) => {
    if (value.target.value == null) {
      console.log("not enter");
    }
    if (value.target.value === phone) {
      console.log("exist");
    }
    setPhone(value.target.value);
  };
  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   setValidated(true);
  // };
  return (
    <>
      <MDBModal staticBackdrop tabIndex="-1" show={show} onHide={handleClose}>
        <MDBModalDialog size="xl">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Edit User</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={handleClose}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="form-container-1">
                <div className="form-header">
                  <p className="fw-bold fs-2">Edit User</p>
                </div>
                <Form noValidate onSubmit={handleFormSubmit}>
                  <div className="form-content">
                    <div className="form">
                      <div className="row mb-3">
                        {error && (
                          <div className="mb-3" style={{"textAlign": "center", "fontWeight": "bolder", "color": "red", "fontSize": "30px"}}>
                            {error}
                          </div>
                        )}
                       
                        <div className="mb-3 row-content">
                          <label className="form-label">Enter FirstName</label>
                          <Form.Control
                            id="first_name"
                            type="text"
                            placeholder="first_name"
                            aria-describedby="inputGroupPrepend"
                            name="first_name"
                            value={first_name}
                            onChange={(e) => setFirst_name(e.target.value)}
                            // onBlur={formik.handleBlur}
                            // isInvalid={
                            //   formik.errors.first_name &&
                            //   formik.touched.first_name
                            // }
                          />
                          {/* <Form.Control.Feedback type="invalid">
                            {formik.errors.first_name}
                          </Form.Control.Feedback> */}
                        </div>
                        <div className="mb-3 row-content">
                          <label className="form-label">Enter LastName</label>
                          <Form.Control
                            type="text"
                            id="last_name"
                            placeholder="last_name"
                            aria-describedby="inputGroupPrepend"
                            name="last_name"
                            value={last_name}
                            onChange={(e) => setLast_name(e.target.value)}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // isInvalid={
                            //   formik.errors.last_name &&
                            //   formik.touched.last_name
                            // }
                          />
                          {/* <Form.Control.Feedback type="invalid">
                            {formik.errors.last_name}
                          </Form.Control.Feedback> */}
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="mb-3 row-content">
                          <label className="form-label">Enter Email</label>
                          <Form.Control
                            type="email"
                            disabled
                            id="email"
                            placeholder="email"
                            aria-describedby="inputGroupPrepend"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // isInvalid={
                            //   formik.errors.email && formik.touched.email
                            // }
                          />
                          {/* <Form.Control.Feedback type="invalid">
                            {formik.errors.email}
                          </Form.Control.Feedback> */}
                        </div>
                        <div className="mb-3 row-content">
                          <label className="form-label">Choose Role</label>
                          <br />
                          <Radio.Group
                            id="role"
                            name="role"
                            onChange={(e) => {
                              handleRoleChange(e);
                            }}
                            value={Role}
                            defaultValue={Role}
                            buttonStyle="solid"
                          >
                            <Radio.Button
                              style={{
                                textAlign: "center",
                                height: "37px",
                              }}
                              value={2}
                            >
                              <span style={{ verticalAlign: "middle" }}>
                                Staff
                              </span>
                            </Radio.Button>
                            <Radio.Button
                              style={{
                                textAlign: "center ",
                                height: "37px",
                              }}
                              value={3}
                            >
                              <span style={{ verticalAlign: "middle" }}>
                                ZooTrainer
                              </span>
                            </Radio.Button>
                          </Radio.Group>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="mb-3 row-content">
                          <label className="form-label">Enter Phone</label>
                          <Form.Control
                            type="number"
                            id="phone"
                            placeholder="phone"
                            aria-describedby="inputGroupPrepend"
                            name="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            isInvalid={phone == null}
                          />
                          <Form.Control.Feedback type="invalid">
                            Haha
                          </Form.Control.Feedback>
                        </div>
                        <div className="mb-3 row-content">
                          <label className="form-label">Gender</label>
                          <br />
                          <Radio.Group
                            id="sex"
                            name="sex"
                            onChange={handleRadioChange}
                            value={Sex}
                            disabled
                            buttonStyle="solid"
                          >
                            <Radio.Button value="2">Male</Radio.Button>
                            <Radio.Button value="3">Female</Radio.Button>
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
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          // onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          // isInvalid={
                          //   formik.errors.address && formik.touched.address
                          // }
                        />
                        {/* <Form.Control.Feedback type="invalid">
                          {formik.errors.address}
                        </Form.Control.Feedback> */}
                      </div>
                      <div className="row mb-3 mt-5">
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">Enter EndDate</label>
                          <br />
                            <Form.Control
                              type="date"
                              id="endDate"
                              placeholder="address"
                              aria-describedby="inputGroupPrepend"
                              name="endDate"
                              value={endDate}
                              onChange={(event) =>
                                setEndDate(event.target.value)
                              }
                              // onBlur={formik.handleBlur}
                            />
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">Company</label>
                          <Form.Control
                            type="text"
                            id="company"
                            placeholder="company"
                            aria-describedby="inputGroupPrepend"
                            name="company"
                            value={company}
                            disabled
                            // onBlur={formik.handleBlur}
                            // isInvalid={
                            //   // formik.errors.company && formik.touched.company
                            //   !Role.includes("None") && test == null
                            // }
                          />
                          {/* <Form.Control.Feedback type="invalid"> */}
                          {/* {formik.errors.company} */}
                          {/* Please enter value */}
                          {/* </Form.Control.Feedback> */}
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">Choose wID</label>
                          <br />
                          <Radio.Group
                            id="wID"
                            name="wID"
                            onChange={handleChange1}
                            value={wID}
                            buttonStyle="solid"
                          >
                            <Radio.Button value="2">Staff</Radio.Button>
                            <Radio.Button value="3">ZooTrainer</Radio.Button>
                          </Radio.Group>
                        </div>
                      </div>
                      <div className="mb-3 row-content">
                        <label className="form-label">Set Status</label>
                        <br />
                        <Radio.Group
                          id="status"
                          name="status"
                          onChange={handleRadioChange2}
                          value={status}
                          buttonStyle="solid"
                        >
                          <Radio.Button value={true}>Active</Radio.Button>
                          <Radio.Button value={false}>Inactive</Radio.Button>
                        </Radio.Group>
                      </div>
                      <div className="btn-footer">
                        <div style={{ marginRight: "20px" }}>
                          <Button
                            variant="secondary"
                            onClick={handleClose}
                            active
                            style={{ width: "80px" }}
                          >
                            Close
                          </Button>
                        </div>
                        <div>
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={show}
                            active
                          >
                            Edit user
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
                {/* Same as */}
                <ToastContainer />
              </div>
            </MDBModalBody>
            <MDBModalFooter></MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
