import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import "../../assets/css/dashboard.css";
import Password from "antd/es/input/Password";
import { DatePicker, Empty, Radio, Select, Space } from "antd";
const { RangePicker } = DatePicker;
import { Formik, useFormik, Field, useFormikContext } from "formik";
import FormList from "antd/es/form/FormList";
import { ListGroup, Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import { EventNoteTwoTone, TouchAppRounded } from "@mui/icons-material";
// import Button from "@mui/material/Button";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import axios from "axios";
import { creatNewUser } from "../../service/UserService";
import { Navigate, json, useNavigate } from "react-router-dom";
import { MDBCollapse } from "mdb-react-ui-kit";
import { schemaAnimal } from "./validationAnimal";
function AddAnimal(pros) {
  const [options, setOptions] = useState([]);
  const [errorQuantity, setErrorQuantity] = useState("");
  const [errorFood, setErrorFood] = useState("");
  const [fields, setFields] = useState([
    {
      foodId: "",
      description: "",
      amount: "",
    },
  ]);
  const getList = () => {
    return fetch("https://localhost:44352/api/Food").then((data) =>
      data.json()
    );
  };
  useEffect(() => {
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setOptions(items);
      }
    });
    return () => (mounted = false);
  }, []);
  const [selectedFoodIds, setSelectedFoodIds] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState("Pig");
  const [selectedCage, setSelectedCage] = useState();

  const addField = () => {
    setFields([...fields, { foodId: "", description: "", amount: "" }]);
  };
  const removeField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
  };

  const handleChange = (value) => {
    // console.log(value)
    setSelectedValues((prev) => [...prev, value]);
  };
  const handleFoodSelect = (event, field, form) => {
    const selectedFoodId = event.target.value;
    setSelectedFoodIds((prevSelectedFoodIds) => [
      ...prevSelectedFoodIds,
      selectedFoodId,
    ]);
    form.setFieldValue(field.name, selectedFoodId);
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [listCage, setListCage] = useState([]);
  const [listZooTrainer, setListZooTrainer] = useState([]);
  const [selectedAnimalId, setSelectedAnimalId] = useState("");
  const handleCageSelect = (event) => {
    console.log(event.target.value);
  };
  const handleTrainerSelect = (event) => {
    console.log(event.target.value);
  };
  const getCageList = () => {
    return fetch("https://localhost:44352/api/Cage").then((data) =>
      data.json()
    );
  };
  useEffect(() => {
    let mounted = true;
    getCageList().then((items) => {
      if (mounted) {
        setListCage(items);
      }
    });
    return () => (mounted = false);
  }, []);
  const getZooTrainerList = () => {
    return fetch("https://localhost:44352/api/User/users").then((data) =>
      data.json()
    );
  };
  useEffect(() => {
    let mounted = true;
    getZooTrainerList().then((items) => {
      if (mounted) {
        setListZooTrainer(items);
      }
    });
    return () => (mounted = false);
  }, []);

  const ZooTrainerList = listZooTrainer.filter((user) => user.role === 3);
  const CageListFilter = listCage.filter(
    (cage) => cage.name === selectedSpecies
  );
  const handleClick = () => {
    setShowmodalAdd(true);
    setAnchorEl(null);
  };

  const handleClick4 = (value) => {
    console.log(value);
  };
  const [selectedEnclosure, setSelectedEnclosure] = useState("");

  //-----------------------------------
  // const [test, setTest] = useState(species);
  //----------------------------------
  const handleSelect = (e) => {
    setSelectedCage(e.target.value);
  };
  const { show, handleClose } = pros;
  const navigator = useNavigate();
  const submitForm = async (values) => {
    // values.fields.forEach(field => {
    //   if (!field.id) {
    //     setErrorFood('Food ID is required');
    //   } else if (field.id) {
    //     setErrorFood(null);
    //   } if (!field.quantity) {
    //     setErrorQuantity('Quantity is required');
    //   } else if (field.quantity) {
    //     setErrorQuantity(null);
    //   }
    //   return;
    // })
    console.log(values);
    const animal = {
      name: values.name,
      description: values.description,
      sex: values.gender,
      region: values.region,
      healthCheck: values.healthCheck,
      birthday: values.birthday,
      species: values.species,
      rarity: values.rarity,
      entryCageDate: values.entryCageDate,
      startTrainDate: values.startTrainDate,
      animalFoods: values.fields,
    };
    console.log(animal);
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
      navigator("/staff/2");
      window.location.reload();
    }
  };
  const a = "huhu";

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
                <Formik
                  initialValues={{
                    name: "",
                    region: "",
                    description: "",
                    gender: true,
                    healthCheck: "",
                    birthday: "",
                    startTrainDate: "",
                    cageId: "",
                    species: "Pig",
                    entryCageDate: "",
                    rarity: true,
                    fields,
                    userId: "",
                  }}
                  validationSchema={schemaAnimal}
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
                    <Form onSubmit={handleSubmit}>
                      <div className="form-content mb-3">
                        <div className="form">
                          <div className="label-info">
                            <label>Animal Information Basic</label>
                          </div>
                          <div className="mb-3 Animal_Infomation">
                            <div className="row mb-3">
                              <div className="mb-3" style={{ width: "33%" }}>
                                <label className="form-label">
                                  Enter Name Animal
                                </label>
                                <Form.Control
                                  id="name"
                                  type="text"
                                  placeholder="name of the animal"
                                  aria-describedby="inputGroupPrepend"
                                  name="name"
                                  value={values.name}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={errors.name && touched.name}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.name}
                                </Form.Control.Feedback>
                              </div>
                              <div className="mb-3" style={{ width: "33%" }}>
                                <label className="form-label">
                                  Enter Country
                                </label>
                                <Form.Control
                                  type="text"
                                  id="region"
                                  placeholder="Country"
                                  aria-describedby="inputGroupPrepend"
                                  name="region"
                                  value={values.region}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={errors.region && touched.region}
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.region}
                                </Form.Control.Feedback>
                              </div>
                              <div className="mb-3" style={{ width: "33%" }}>
                                <label className="form-label">
                                  Choose species
                                </label>
                                <Field name="species">
                                  {() => (
                                    <Form.Select
                                      value={values.species}
                                      onChange={(e) => {
                                        setFieldValue(
                                          "species",
                                          e.target.value
                                        );
                                        setSelectedSpecies(e.target.value);
                                      }}
                                    >
                                      <option value="Pig">Pig</option>
                                      <option value="Cow">Cow</option>
                                      <option value="Dog">Dog</option>
                                      <option value="Cat">Cat</option>
                                      <option value="Monkey">Monkey</option>
                                      <option value="Shark">Shark</option>
                                      <option value="Lion">Lion</option>
                                    </Form.Select>
                                  )}
                                </Field>
                              </div>
                            </div>
                            <div className="row mb-2">
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
                                    value={values.gender}
                                    buttonStyle="solid"
                                    defaultValue={values.gender}
                                    onChange={handleChange}
                                  >
                                    <Radio
                                      style={{
                                        width: "34%",
                                      }}
                                      value={true}
                                    >
                                      <span style={{ verticalAlign: "middle" }}>
                                        Male
                                      </span>
                                    </Radio>
                                    <Radio
                                      style={{
                                        width: "34%",
                                      }}
                                      value={false}
                                    >
                                      FeMale
                                    </Radio>
                                  </Radio.Group>
                                </div>
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
                                    value={values.rarity}
                                    defaultValue={values.rarity}
                                    onChange={handleChange}
                                  >
                                    <Radio
                                      style={{
                                        width: "34%",
                                      }}
                                      value={true}
                                    >
                                      Danger
                                    </Radio>
                                    <Radio
                                      style={{
                                        width: "34%",
                                      }}
                                      value={false}
                                    >
                                      Normal
                                    </Radio>
                                  </Radio.Group>
                                </div>
                              </div>
                              <div className="mb-3" style={{ width: "33%" }}>
                                <label className="form-label">
                                  Choose Animal Birthday
                                </label>
                                <Form.Control
                                  type="date"
                                  id="birthday"
                                  aria-describedby="inputGroupPrepend"
                                  name="birthday"
                                  value={values.birthday}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={
                                    errors.birthday && touched.birthday
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.birthday}
                                </Form.Control.Feedback>
                              </div>
                            </div>
                            <div className="mb-3" style={{marginRight: "20px"}}>
                              <label className="form-label">
                                Enter healthCheck
                              </label>
                              <Form.Control
                                as="textarea"
                                style={{ height: "100px" }}
                                id="healthCheck"
                                placeholder="healthCheck"
                                aria-describedby="inputGroupPrepend"
                                name="healthCheck"
                                value={values.healthCheck}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={
                                  errors.healthCheck && touched.healthCheck
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.healthCheck}
                              </Form.Control.Feedback>
                            </div>
                            <div className="mb-2" style={{marginRight: "20px"}}>
                              <label className="form-label">
                                Enter Description
                              </label>
                              <Form.Control
                                as="textarea"
                                id="description"
                                placeholder="description"
                                aria-describedby="inputGroupPrepend"
                                name="description"
                                style={{ height: "100px" }}
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={
                                  errors.description && touched.description
                                }
                              />
                              <Form.Control.Feedback type="invalid">
                                {errors.description}
                              </Form.Control.Feedback>
                            </div>
                          </div>
                          <div className="label-info">
                            <label>Cage Information</label>
                          </div>
                          <div className="mb-3 Cage_Infomation">
                            <div className="mb-3">
                              <label className="form-label">
                                Choose Cage for Animal
                              </label>
                              <Form.Select
                                size="lg"
                                placeholder="Chọn món ăn"
                                id="cageId"
                                name="cageId"
                                style={{ width: "85%" }}
                                // onChange={(event) => handleCageSelect(event)}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={errors.cageId && touched.cageId}
                              >
                                <option value={null}>Choose Cage</option>
                                {/* Render các option từ API */}
                                {CageListFilter.map((option) => (
                                  <option key={option.cId} value={option.cId}>
                                    {option.cId} - MaxCapacity :{" "}
                                    {option.maxCapacity} - AnimalQuantity :{" "}
                                    {option.animalQuantity}
                                  </option>
                                ))}
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">
                                {errors.cageId}
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
                                  value={values.entryCageDate}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={
                                    errors.entryCageDate &&
                                    touched.entryCageDate
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.entryCageDate}
                                </Form.Control.Feedback>
                              </div>
                            </div>
                          </div>
                          <div className="label-info">
                            <label>ZooTrainer Information</label>
                          </div>
                          <div className="mb-3 ZooTrainer-Information">
                            <div className="mb-3">
                              <label className="form-label">
                                Choose ZooTrainer for Animal
                              </label>
                              <Form.Select
                                size="lg"
                                id="userId"
                                name="userId"
                                placeholder="Chọn món ăn"
                                style={{ width: "85%" }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                isInvalid={errors.userId && touched.userId}
                              >
                                <option value={null}>Choose ZooTrainer</option>
                                {/* Render các option từ API */}
                                {ZooTrainerList.map((option) => (
                                  <option
                                    key={option.userId}
                                    value={option.userId}
                                  >
                                    <div style={{ height: "50px" }}>
                                      {option.email} - MaxCapacity :{" "}
                                      {option.firstname} - AnimalQuantity :{" "}
                                      {option.lastname}
                                    </div>
                                  </option>
                                ))}
                              </Form.Select>
                              <Form.Control.Feedback type="invalid">
                                {errors.userId}
                              </Form.Control.Feedback>
                              {values.userId && console.log(values.userId)}
                            </div>
                            <div className="row mb-3 mt-4">
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
                                  value={values.startTrainDate}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  isInvalid={
                                    errors.startTrainDate &&
                                    touched.startTrainDate
                                  }
                                />
                                <Form.Control.Feedback type="invalid">
                                  {errors.startTrainDate}
                                </Form.Control.Feedback>
                              </div>
                            </div>
                          </div>
                          <div className="label-info">
                            <label>Food Information</label>
                          </div>
                          <div className="Food-Information">
                            <div className="mb-3">
                              <label className="form-label">
                                Choose Food For Animal
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
                                    name={`fields[${index}].foodId`}
                                    // as="select"
                                    // onChange={(e) => handleChange(e.target.value)}
                                  >
                                    {({ field, form }) => (
                                      <Form.Select
                                        {...field}
                                        placeholder="Chọn món ăn"
                                        style={{
                                          width: "35%",
                                          marginRight: "20px",
                                        }}
                                        onChange={(event) =>
                                          handleFoodSelect(event, field, form)
                                        }
                                      >
                                        <option value="">Choose Food</option>
                                        {/* Render các option từ API */}
                                        {options.map((option) => (
                                          <option
                                            key={option.foodId}
                                            value={option.foodId}
                                            disabled={selectedFoodIds.includes(
                                              option.foodId
                                            )}
                                          >
                                            {option.fName}
                                          </option>
                                        ))}
                                      </Form.Select>
                                    )}
                                  </Field>
                                  <Field
                                    placeholder="Enter Quantity"
                                    name={`fields[${index}].amount`}
                                    component="input"
                                    style={{
                                      width: "35%",
                                      marginRight: "20px",
                                    }}
                                    className="control-field"
                                  />

                                  <Field
                                    name={`fields[${index}].description`}
                                    component="input"
                                    placeholder="Enter description"
                                    className="control-field"
                                    style={{ width: "35%" }}
                                  />
                                  {/* <button onClick={() => removeField(index)}>
                          Remove
                        </button> */}
                                </div>
                              ))}
                              {errors.fields && (
                                <div style={{ color: "red" }}>
                                  Choose Food and Quantity and Description
                                </div>
                              )}
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <Button onClick={addField}>More Food</Button>
                            </div>
                          </div>
                        </div>
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
            <MDBModalFooter></MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
export default AddAnimal;
