import React, { useState, useEffect } from "react";
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
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import { ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import { DatePicker, Radio, Select, Space } from "antd";
import { South } from "@mui/icons-material";

export default function ViewUser(pros) {
  const [staticModal, setStaticModal] = useState(false);
  const { show, handleClose, dataUserView } = pros;

  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState("");
  const [role, setRole] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (show) {
      setUserId(dataUserView.userId);
      setEmail(dataUserView.email);
      setFirstName(dataUserView.firstname);
      setLastName(dataUserView.lastname);
      setAddress(dataUserView.address);
      setPhone(dataUserView.phone);
      setSex(dataUserView.sex === true ? "male" : "female");
      setRole(dataUserView.role === 2 ? "Staff" : "ZooTrainer");
      setStartDate(dataUserView.startDate.slice(0, 10));
      setEndDate(
        dataUserView.endDate === null ? null : dataUserView.endDate.slice(0, 10)
      );
      setStatus(dataUserView.status);
    }
  }, [dataUserView]);

  const handleSave = () => {
    console.log("haha");
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(dataAnimalView);
  };
  return (
    <>
      <MDBModal staticBackdrop tabIndex="-1" show={show} onHide={handleClose}>
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={handleClose}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="form-container-1">
                <div className="form-header">
                  <p className="fw-bold fs-2">View User</p>
                </div>
                <Form noValidate onSubmit={handleFormSubmit}>
                  <div className="form-content">
                    <div className="form">
                      <div className="row mb-3">
                        <div className="mb-3 row-content">
                          <label className="form-label">UserId</label>
                          <Form.Control
                            id="userId"
                            type="text"
                            placeholder="name of the animal"
                            disabled
                            aria-describedby="inputGroupPrepend"
                            name="userId"
                            value={userId}
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
                          <label className="form-label">Email</label>
                          <Form.Control
                            type="text"
                            id="email"
                            placeholder="region"
                            aria-describedby="inputGroupPrepend"
                            disabled
                            name="email"
                            value={email}
                            onChange={(event) => setRegion(event.target.value)}
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
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">First Name</label>
                          <Form.Control
                            type="string"
                            id="species"
                            disabled
                            placeholder="Species Animal"
                            aria-describedby="inputGroupPrepend"
                            name="species"
                            value={firstName}
                            // value={formik.values.species}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // isInvalid={phone == nul}
                          />
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">Last Name</label>
                          <Form.Control
                            type="text"
                            id="lastName"
                            aria-describedby="inputGroupPrepend"
                            name="lastName"
                            disabled
                            value={lastName}
                            // value={formik.values.entryDate}
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
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">Address</label>
                          <Form.Control
                            type="text"
                            id="address"
                            aria-describedby="inputGroupPrepend"
                            name="address"
                            disabled
                            value={address}
                            // value={formik.values.entryDate}
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
                      </div>
                      <div className="row mb-3">
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">Phone</label>
                          <Form.Control
                            type="string"
                            id="cageId"
                            disabled
                            placeholder="phone"
                            aria-describedby="inputGroupPrepend"
                            name="cageId"
                            value={phone}
                            onChange={(event) => setCageID(event.target.value)}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // isInvalid={phone == nul}
                          />
                          <Form.Control.Feedback type="invalid">
                            Haha
                          </Form.Control.Feedback>
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">Status</label>
                          <Radio.Group
                            id="status"
                            name="status"
                            style={{ height: "33%", width: "100%" }}
                            // onChange={(e) => {
                            //   handleRoleChange(e);
                            // }}
                            value={role}
                            buttonStyle="solid"
                            disabled
                          >
                            {role === "Staff" && (
                              <Radio
                                style={{
                                  width: "40%",
                                  color: "red",
                                }}
                                value="Staff"
                              >
                                <span style={{ verticalAlign: "middle" }}>
                                  Staff
                                </span>
                              </Radio>
                            )}
                            {role === "ZooTrainer" && (
                              <Radio
                                style={{
                                  width: "40%",
                                  color: "green",
                                }}
                                value="ZooTrainer"
                              >
                                <span style={{ verticalAlign: "middle" }}>
                                  ZooTrainer
                                </span>
                              </Radio>
                            )}
                          </Radio.Group>
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <div>
                            <label className="form-label">Gender</label>
                            <Radio.Group
                              id="sex"
                              name="sex"
                              style={{ height: "33%", width: "100%" }}
                              // onChange={(e) => {
                              //   handleRoleChange(e);
                              // }}
                              value={sex}
                              buttonStyle="solid"
                              disabled
                            >
                              {sex === "male" && (
                                <Radio
                                  style={{
                                    width: "40%",
                                    color: "blue",
                                  }}
                                  value="male"
                                >
                                  <span style={{ verticalAlign: "middle" }}>
                                    Male
                                  </span>
                                </Radio>
                              )}
                              {sex === "female" && (
                                <Radio
                                  style={{
                                    width: "40%",
                                    color: "pink",
                                  }}
                                  value="female"
                                >
                                  <span style={{ verticalAlign: "middle" }}>
                                    Female
                                  </span>
                                </Radio>
                              )}
                            </Radio.Group>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">Start Date</label>
                          <br />
                          <Space
                            direction="vertical"
                            size={20}
                            style={{ width: "90%" }}
                          >
                            <Form.Control
                              type="date"
                              id="startTrainDate"
                              placeholder="address"
                              aria-describedby="inputGroupPrepend"
                              disabled
                              name="startTrainDate"
                              value={startDate}
                              // onBlur={formik.handleBlur}
                            />
                          </Space>
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <div>
                            <label className="form-label">End Date</label>
                            <br />
                            <Space
                              direction="vertical"
                              size={20}
                              style={{ width: "90%" }}
                            >
                              <Form.Control
                                type="date"
                                name="entryCageDate"
                                value={endDate}
                                disabled
                              />
                            </Space>
                          </div>
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">Status</label>
                          <Radio.Group
                            id="status"
                            name="status"
                            style={{ height: "33%", width: "100%" }}
                            // onChange={(e) => {
                            //   handleRoleChange(e);
                            // }}
                            value={status}
                            buttonStyle="solid"
                            disabled
                          >
                            {status === true && (
                              <Radio
                                style={{
                                  width: "45%",
                                  fontWeight: "bolder"
                                }}
                                value={true}
                              >
                                <span style={{ verticalAlign: "middle" }}>
                                  Available
                                </span>
                              </Radio>
                            )}
                            {status === false && (
                              <Radio
                                style={{
                                  width: "45%",
                                }}
                                value={false}
                              >
                                <span style={{ verticalAlign: "middle" }}>
                                  None
                                </span>
                              </Radio>
                            )}
                          </Radio.Group>
                        </div>
                      </div>
                      <div className="btn-footer">
                        <div
                          style={{
                            background: "gainsboro",
                          }}
                        >
                          <Button
                            variant="secondary"
                            onClick={handleClose}
                            active
                            style={{ width: "80px" }}
                          >
                            Close
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
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
