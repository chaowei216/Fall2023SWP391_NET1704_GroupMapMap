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
import Button from "@mui/material/Button";
import { ToastContainer } from "react-toastify";
import { DatePicker, Radio, Select, Space } from "antd";
import { Formik, useFormik, Field, useFormikContext } from "formik";
import { ListGroup, Form } from "react-bootstrap";
import { Navigate, json, useNavigate } from "react-router-dom";

import { South } from "@mui/icons-material";

export default function ScheduleAnimal(pros) {
  const { show, handleClose } = pros;
  const [staticModal, setStaticModal] = useState(false);
  const [selectedFoodIds, setSelectedFoodIds] = useState([]);
  const [animalList, setAnimalList] = useState([]);
  const [fields, setFields] = useState([
    {
      scheduleId: "",
      time: "",
      description: "",
    },
  ]);
  const addField = () => {
    setFields([...fields, { scheduleId: "", time: "", description: "" }]);
  };
  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };
  const handleFoodSelect = (event, field, form) => {
    const selectedFoodId = event.target.value;
    setSelectedFoodIds((prevSelectedFoodIds) => [
      ...prevSelectedFoodIds,
      selectedFoodId,
    ]);
    form.setFieldValue(field.name, selectedFoodId);
  };
  const navigate = useNavigate();
  const handleSave = () => {
    console.log(formik.errors);
    console.log("haha");
  };

  const getAnimalList = () => {
    return fetch("https://localhost:44352/api/Animal").then((data) =>
      data.json()
    );
  };
  useEffect(() => {
    let mounted = true;
    getAnimalList().then((items) => {
      if (mounted) {
        setAnimalList(items);
      }
    });
    return () => (mounted = false);
  }, []);
  const submitForm = async (values) => {
    console.log(values);
    const schedule = {
      animaId: values.animaId,
      animalSchedules: values.fields,
    };

    // const url = "https://localhost:44352/api/Food";
    // const request = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(food),
    // };
    // const response = await fetch(url, request);
    // if (response.ok) {
    //   console.log("Success");
    //   navigate("/staff/3");
    //   window.location.reload();
    // }
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
                  <p className="fw-bold fs-2">Add Schedule</p>
                </div>
                <Formik
                  initialValues={{
                    animalId: "",
                    fields,
                  }}
                  //   validationSchema={schemaAnimal}
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
                          <div className="mb-3">
                            <label className="form-label">Choose Animal</label>
                            <Form.Select
                              size="lg"
                              placeholder="Chọn món ăn"
                              id="animalId"
                              name="animalId"
                              style={{ width: "85%" }}
                              // onChange={(event) => handleCageSelect(event)}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              //   isInvalid={errors.cageId && touched.cageId}
                            >
                              <option value={null}>Choose AnimalId</option>
                              {/* Render các option từ API */}
                              {animalList.map((value) => (
                                <option
                                  key={value.animalId}
                                  value={value.animalId}
                                >
                                  {value.animalId} - Name : {value.name} -
                                  CageId : {value.cId}
                                </option>
                              ))}
                            </Form.Select>
                            {/* <Form.Control.Feedback type="invalid">
                              {errors.cageId}
                            </Form.Control.Feedback> */}
                          </div>
                          <div className="Food-Information">
                            <div className="mb-3">
                              <label className="form-label">
                                Schedule For Animal
                              </label>
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
                                    name={`fields[${index}].scheduleId`}
                                    // as="select"
                                    // onChange={(e) => handleChange(e.target.value)}
                                  >
                                    {({ field, form }) => (
                                      <Form.Select
                                        {...field}
                                        placeholder="Chọn món ăn"
                                        style={{
                                          width: "33%",
                                        }}
                                        onChange={(event) =>
                                          handleFoodSelect(event, field, form)
                                        }
                                      >
                                        <option value="">
                                          Choose Schedule for animal
                                        </option>
                                        {/* Render các option từ API */}
                                        {animalList.map((option) => (
                                          <option
                                            key={option.animalId}
                                            value={option.animalId}
                                            disabled={selectedFoodIds.includes(
                                              option.animalId
                                            )}
                                          >
                                            {option.animalId}
                                          </option>
                                        ))}
                                      </Form.Select>
                                    )}
                                  </Field>
                                  <Field
                                    placeholder="Enter Time"
                                    type="time"
                                    name={`fields[${index}].time`}
                                    component="input"
                                    style={{
                                      width: "33%",
                                    }}
                                    className="control-field"
                                  />
                                  <Field
                                    placeholder="Enter Description"
                                    name={`fields[${index}].description`}
                                    component="input"
                                    style={{
                                      width: "33%",
                                    }}
                                    className="control-field"
                                  />
                                  <button onClick={() => removeField(index)}>
                                    Remove
                                  </button>
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
                              <Button onClick={addField}>More Schedule</Button>
                            </div>
                          </div>
                          <MDBModalFooter>
                            <Button
                              variant="secondary"
                              onClick={handleClose}
                              active
                              style={{
                                width: "80px",
                                marginRight: "20px",
                                background: "gainsboro",
                              }}
                            >
                              Close
                            </Button>
                            <Button
                              style={{ background: "blue", color: "white" }}
                              variant="primary"
                              type="submit"
                              onClick={() => {
                                handleSave();
                              }}
                              active
                            >
                              Create Schedule
                            </Button>
                          </MDBModalFooter>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
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
