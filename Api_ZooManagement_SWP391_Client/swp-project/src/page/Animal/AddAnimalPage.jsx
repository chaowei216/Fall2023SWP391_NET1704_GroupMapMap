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
import Password from "antd/es/input/Password";
import { DatePicker, Radio, Select, Space } from "antd";
const { RangePicker } = DatePicker;
import { Formik, useFormik } from "formik";
import FormList from "antd/es/form/FormList";
import Form from "react-bootstrap/Form";
import { EventNoteTwoTone, TouchAppRounded } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import axios from "axios";
import { creatNewUser } from "../../service/UserService";
import { Navigate, json, useNavigate } from "react-router-dom";
import { MDBCollapse } from "mdb-react-ui-kit";
import { schemaAnimal } from "./validationAnimal";
function AddAnimal(pros) {
  const { show, handleClose } = pros;
  const navigator = useNavigate();
  const submitForm = async (values) => {
    console.log(values);
    console.log(formik.errors)
    const animal = {
      name: values.name,
      description: values.description,
      sex: values.gender,
      entryDate: values.entryDate,
      region: values.region,
      healthCheck: values.healthCheck,
      birthday: values.birthday,
      species: values.species,
      rarity: values.rarity,
      entryCageDate: values.entryCageDate,
      startTrainDate: values.startTrainDate,
    };
    const params = {
      userId: values.userId,
      cageId: values.cageId,
    };

    const url = `https://localhost:44352/api/Animal?${new URLSearchParams(
      params
    )}`;
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animal),
    };
    // request.body = JSON.stringify(animal)
    const response = await fetch(url, request);
    if (response.ok) {
      console.log("Success");
      navigator('/staff/2')
      window.location.reload();
    }
  };
  const a = "huhu";
  const formik = useFormik({
    initialValues: {
      name: "",
      userId: "",
      description: "",
      gender: true,
      region: "",
      healthCheck: "",
      birthday: "",
      startTrainDate: "",
      entryCageDate: "",
      cageId: "",
      species: "",
      rarity: true,
      entryDate: "",
      // image: "",
    },
    validationSchema: schemaAnimal,
    onSubmit: (values) => {
      submitForm(values);
    },
  });
  return (
    <>
      <MDBModal staticBackdrop tabIndex="-1" show={show} onHide={handleClose}>
        <MDBModalDialog size="xl">
          {/* style={{ height: "890px" }} */}
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add Animal</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={handleClose}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="form-container-1">
                <div className="form-header">
                  <p className="fw-bold fs-2">Create Animal</p>
                </div>
                <Form noValidate onSubmit={formik.handleSubmit}>
                  <div className="form-content">
                    <div className="form">
                      <div className="row mb-3">
                        <div className="mb-3 row-content">
                          <label className="form-label">
                            Enter Name Animal
                          </label>
                          <Form.Control
                            id="name"
                            type="text"
                            placeholder="name of the animal"
                            aria-describedby="inputGroupPrepend"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                              formik.errors.name && formik.touched.name
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.name}
                          </Form.Control.Feedback>
                        </div>
                        <div className="mb-3 row-content">
                          <label className="form-label">Enter Region</label>
                          <Form.Control
                            type="text"
                            id="region"
                            placeholder="region"
                            aria-describedby="inputGroupPrepend"
                            name="region"
                            value={formik.values.region}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                              formik.errors.region && formik.touched.region
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.region}
                          </Form.Control.Feedback>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">
                            Enter Species Animal
                          </label>
                          <Form.Control
                            type="string"
                            id="species"
                            placeholder="Species Animal"
                            aria-describedby="inputGroupPrepend"
                            name="species"
                            value={formik.values.species}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                              formik.errors.species && formik.touched.species
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.species}
                          </Form.Control.Feedback>
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">
                            Choose Animal EntryDate
                          </label>
                          <Form.Control
                            type="date"
                            id="entryDate"
                            aria-describedby="inputGroupPrepend"
                            name="entryDate"
                            value={formik.values.entryDate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                              formik.errors.entryDate &&
                              formik.touched.entryDate
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {a}
                          </Form.Control.Feedback>
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <div>
                            <label
                              className="form-label"
                              style={{ verticalAlign: "middle" }}
                            >
                              Is Animal Rarity
                            </label>
                            <br />
                            <Radio.Group
                              id="rarity"
                              name="rarity"
                              style={{ height: "33%", width: "100%" }}
                              // onChange={(e) => {
                              //   handleRoleChange(e);
                              // }}
                              buttonStyle="solid"
                              value={formik.values.rarity}
                              defaultValue={formik.values.rarity}
                              onChange={formik.handleChange}
                            >
                              <Radio.Button
                                style={{
                                  width: "40%",
                                  textAlign: "center",
                                  height: "37px",
                                }}
                                value={true}
                              >
                                <span style={{ verticalAlign: "middle" }}>
                                  Rarity
                                </span>
                              </Radio.Button>
                              <Radio.Button
                                style={{
                                  width: "40%",
                                  textAlign: "center ",
                                  height: "37px",
                                }}
                                value={false}
                              >
                                <span style={{ verticalAlign: "middle" }}>
                                  None
                                </span>
                              </Radio.Button>
                            </Radio.Group>
                          </div>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">Enter cageID</label>
                          <Form.Control
                            type="string"
                            id="cageId"
                            placeholder="cageId"
                            aria-describedby="inputGroupPrepend"
                            name="cageId"
                            value={formik.values.cageId}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            isInvalid={
                              formik.errors.cageId && formik.touched.cageId
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.cageId}
                          </Form.Control.Feedback>
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">Enter User Id</label>
                          <Form.Control
                            type="text"
                            id="userId"
                            placeholder="userId"
                            aria-describedby="inputGroupPrepend"
                            name="userId"
                            value={formik.values.userId}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                              formik.errors.userId && formik.touched.userId
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {formik.errors.userId}
                          </Form.Control.Feedback>
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <div>
                            <label
                              className="form-label"
                              style={{ verticalAlign: "middle" }}
                            >
                              Choose Gender
                            </label>
                            <br />
                            <Radio.Group
                              id="gender"
                              name="gender"
                              style={{ height: "33%", width: "100%" }}
                              // onChange={(e) => {
                              //   handleRoleChange(e);
                              // }}
                              value={formik.values.gender}
                              buttonStyle="solid"
                              defaultValue={formik.values.gender}
                              onChange={formik.handleChange}
                            >
                              <Radio.Button
                                style={{
                                  width: "40%",
                                  textAlign: "center",
                                  height: "37px",
                                }}
                                value={true}
                              >
                                <span style={{ verticalAlign: "middle" }}>
                                  Male
                                </span>
                              </Radio.Button>
                              <Radio.Button
                                style={{
                                  width: "40%",
                                  textAlign: "center ",
                                  height: "37px",
                                }}
                                value={false}
                              >
                                <span style={{ verticalAlign: "middle" }}>
                                  FeMale
                                </span>
                              </Radio.Button>
                            </Radio.Group>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Enter healChech</label>
                        <Form.Control
                          type="text"
                          style={{ height: "56px" }}
                          id="healthCheck"
                          placeholder="healthCheck"
                          aria-describedby="inputGroupPrepend"
                          name="healthCheck"
                          value={formik.values.healthCheck}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          // onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          isInvalid={
                            formik.errors.healthCheck &&
                            formik.touched.healthCheck
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {formik.errors.healthCheck}
                        </Form.Control.Feedback>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Enter Description</label>
                        <Form.Control
                          type="text"
                          id="description"
                          placeholder="description"
                          aria-describedby="inputGroupPrepend"
                          name="description"
                          style={{ height: "56px" }}
                          value={formik.values.description}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          // onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          isInvalid={
                            formik.errors.description &&
                            formik.touched.description
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {formik.errors.description}
                        </Form.Control.Feedback>
                      </div>

                      <div className="row mb-5 mt-4">
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">
                            Choose Start Train
                          </label>
                          <br />
                          
                            <Form.Control
                              type="date"
                              id="startTrainDate"
                              placeholder="address"
                              aria-describedby="inputGroupPrepend"
                              name="startTrainDate"
                              value={formik.values.startTrainDate}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              isInvalid={
                                formik.errors.startTrainDate &&
                                formik.touched.startTrainDate
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {formik.errors.startTrainDate}
                            </Form.Control.Feedback>
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <div>
                            <label className="form-label">
                              Choose Entry Cage
                            </label>
                            <br />
                            
                              <Form.Control
                                type="date"
                                name="entryCageDate"
                                value={formik.values.entryCageDate}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                isInvalid={
                                  formik.errors.entryCageDate &&
                                  formik.touched.entryCageDate
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {formik.errors.entryCageDate}
                              </Form.Control.Feedback>
                          </div>
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">Choose birthday</label>
                          <br />
                          
                            <Form.Control
                              type="date"
                              name="birthday"
                              value={formik.values.birthday}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              isInvalid={
                                formik.errors.birthday &&
                                formik.touched.birthday
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              {formik.errors.birthday} 
                            </Form.Control.Feedback>
                        </div>
                        {/* <div className="mb-3">
                        <label className="form-label">Enter Description</label>
                        <Form.Control
                          type="file"
                          id="image"
                          placeholder="image"
                          aria-describedby="inputGroupPrepend"
                          name="image"
                          value={formik.values.image} 
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          // onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          isInvalid={
                            formik.errors.image &&
                            formik.touched.image
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          {formik.errors.image}
                        </Form.Control.Feedback>
                      </div> */}
                      </div>
                      <div className="btn-footer">
                        <div
                          style={{
                            marginRight: "20px",
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
                        <div>
                          <Button
                            style={{ background: "gainsboro" }}
                            variant="primary"
                            type="submit"
                            onClick={submitForm}
                            active
                          >
                            Create animal
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
export default AddAnimal;
