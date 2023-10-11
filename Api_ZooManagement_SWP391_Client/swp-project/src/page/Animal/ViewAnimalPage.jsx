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
import { DatePicker, Radio, Select, Space } from "antd";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../assets/css/dashboard.css";
import { ToastContainer } from "react-toastify";

export default function EditAnimal(pros) {
  const { show, handleClose, dataAnimalView } = pros;
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  const [cageID, setCageID] = useState("");
  const [userID, setUserID] = useState("");
  const [gender, setGender] = useState("");
  const [healthCheck, setHealthCheck] = useState("");
  const [description, setDescription] = useState("");
  const [birthday, setBirthday] = useState("");
  const [entryCage, setEntryCage] = useState("");
  const [startTrain, setStartTrain] = useState("");
  const [species, setSpecies] = useState("");
  const [rarity, setRarity] = useState(true);
  const [entryAnimal, setEntryAnimal] = useState("");
  const [endTraining, setEndTraining] = useState("");
  const [outCage, setOutCage] = useState("");
  useEffect(() => {
    if (show) {
      setRegion(dataAnimalView.region),
        setName(dataAnimalView.name),
        setCageID(dataAnimalView.cageID),
        setUserID(dataAnimalView.userID),
        setGender(dataAnimalView.sex === true ? "male" : "female"),
        setHealthCheck(dataAnimalView.healthCheck),
        setDescription(dataAnimalView.description),
        setBirthday(dataAnimalView.birthday.slice(0, 10)),
        setEntryAnimal(dataAnimalView.entryDate.slice(0, 10));
      setEntryCage(dataAnimalView.entryDate.slice(0, 10)),
        setStartTrain(dataAnimalView.startTrainDate.slice(0, 10)),
        setSpecies(dataAnimalView.species),
        setRarity(dataAnimalView.rarity);
    }
  }, [dataAnimalView]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(dataAnimalView);
  };

  return (
    <>
      <MDBModal staticBackdrop tabIndex="-1" show={show} onHide={handleClose}>
        <MDBModalDialog size="xl">
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
                  <p className="fw-bold fs-2">View Animal</p>
                </div>
                <Form noValidate onSubmit={handleFormSubmit}>
                  <div className="form-content">
                    <div className="form">
                      <div className="row mb-3">
                        <div className="mb-3 row-content">
                          <label className="form-label">Name Animal</label>
                          <Form.Control
                            id="name"
                            type="text"
                            placeholder="name of the animal"
                            disabled
                            aria-describedby="inputGroupPrepend"
                            name="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
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
                          <label className="form-label">Region</label>
                          <Form.Control
                            type="text"
                            id="region"
                            placeholder="region"
                            aria-describedby="inputGroupPrepend"
                            disabled
                            name="region"
                            value={region}
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
                          <label className="form-label">
                             Species Animal
                          </label>
                          <Form.Control
                            type="string"
                            id="species"
                            disabled
                            placeholder="Species Animal"
                            aria-describedby="inputGroupPrepend"
                            name="species"
                            value={species}
                            // value={formik.values.species}
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            // isInvalid={phone == nul}
                          />
                          <Form.Control.Feedback type="invalid">
                            Haha
                          </Form.Control.Feedback>
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">
                             Animal EntryDate
                          </label>
                          <Form.Control
                            type="date"
                            id="entryDate"
                            aria-describedby="inputGroupPrepend"
                            name="entryDate"
                            disabled
                            value={entryAnimal}
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
                              value={rarity}
                              buttonStyle="solid"
                              disabled
                              onChange={(event) =>
                                setRarity(event.target.value)
                              }
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
                          <label className="form-label">CageID</label>
                          <Form.Control
                            type="string"
                            id="cageId"
                            disabled
                            placeholder="phone"
                            aria-describedby="inputGroupPrepend"
                            name="cageId"
                            value={cageID}
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
                          <label className="form-label">User Id</label>
                          <Form.Control
                            type="text"
                            id="userID"
                            placeholder="userID"
                            disabled
                            aria-describedby="inputGroupPrepend"
                            name="userID"
                            value={userID}
                            onChange={(event) => setUserID(event.target.value)}
                            // isInvalid={
                            //   formik.errors.email && formik.touched.email
                            // }
                          />
                          {/* <Form.Control.Feedback type="invalid">
                            {formik.errors.email}
                          </Form.Control.Feedback> */}
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <div>
                            <label className="form-label">Gender</label>
                            <br />
                            <Radio.Group
                              id="gender"
                              name="gender"
                              style={{ height: "33%", width: "100%" }}
                              // onChange={(e) => {
                              //   handleRoleChange(e);
                              // }}
                              value={gender}
                              buttonStyle="solid"
                              disabled
                            >
                              <Radio.Button
                                style={{
                                  width: "40%",
                                  textAlign: "center",
                                  height: "37px",
                                }}
                                value="male"
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
                                value="female"
                              >
                                <span style={{ verticalAlign: "middle" }}>
                                  Female
                                </span>
                              </Radio.Button>
                            </Radio.Group>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">HealChech</label>
                        <Form.Control
                          type="text"
                          style={{ height: "56px" }}
                          id="healthCheck"
                          placeholder="healthCheck"
                          disabled
                          aria-describedby="inputGroupPrepend"
                          name="healthCheck"
                          value={healthCheck}
                          onChange={(event) =>
                            setHealthCheck(event.target.value)
                          }
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
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <Form.Control
                          type="text"
                          id="description"
                          placeholder="description"
                          aria-describedby="inputGroupPrepend"
                          disabled
                          name="description"
                          style={{ height: "56px" }}
                          value={description}
                          onChange={(event) =>
                            setDescription(event.target.value)
                          }
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

                      <div className="row mt-4">
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">
                             Start Train
                          </label>
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
                              value={startTrain}
                              onChange={(event) =>
                                setStartTrain(event.target.value)
                              }
                              // onBlur={formik.handleBlur}
                            />
                          </Space>
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <div>
                            <label className="form-label">
                               Entry Cage
                            </label>
                            <br />
                            <Space
                              direction="vertical"
                              size={20}
                              style={{ width: "90%" }}
                            >
                              <Form.Control
                                type="date"
                                name="entryCageDate"
                                value={entryCage}
                                disabled
                                onChange={(event) =>
                                  setEntryCage(event.target.value)
                                }
                              />
                            </Space>
                          </div>
                        </div>
                        <div className="mb-3" style={{ width: "33%" }}>
                          <label className="form-label">Choose birthday</label>
                          <br />
                          <Space
                            direction="vertical"
                            size={20}
                            style={{ width: "90%" }}
                          >
                            <Form.Control
                              type="date"
                              name="birthDay"
                              value={birthday}
                              disabled
                              onChange={(event) =>
                                setBirthday(event.target.value)
                              }
                            />
                          </Space>
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="mb-3 row-content">
                          <label className="form-label">
                             End Training
                          </label>
                          <Form.Control
                            id="name"
                            type="date"
                            aria-describedby="inputGroupPrepend"
                            name="name"
                            disabled
                            value={name}
                            onChange={(event) => setName(event.target.value)}
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
                          <label className="form-label">Out Cage</label>
                          <Form.Control
                            type="date"
                            id="region"
                            aria-describedby="inputGroupPrepend"
                            name="region"
                            disabled
                            value={region}
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