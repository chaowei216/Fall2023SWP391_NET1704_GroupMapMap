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
import { useNavigate } from "react-router-dom";

export default function EditAnimal(pros) {
  const { show, handleClose, dataAnimalEdit } = pros;
  const [region, setRegion] = useState("");
  const [animalId, setAnimalId] = useState("");
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
  const [listCage, setListCage] = useState([]);
  const [listZooTrainer, setListZooTrainer] = useState([]);
  const [options, setOptions] = useState([]);
  const [fields, setFields] = useState([
    {
      id: "",
      quantity: "",
    },
  ]);
  const [status, setStatus] = useState(true);
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();
  const handleFoodChange = (id, event) => {
    const newFood = foods.map((food) => {
      if (food.id === id) {
        food.quantity = Number(event.target.value);
      }
      return food;
    })
    setFoods(newFood);
  }
  const handleDescriptionFoodChange = (id, event) => {
    const newFood = foods.map((food) => {
      if (food.id === id) {
        food.description = event.target.value;
      }
      return food;
    })
    setFoods(newFood);
  }
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
  useEffect(() => {
    if (show) {
      setRegion(dataAnimalEdit.region),
        setName(dataAnimalEdit.name),
        setAnimalId(dataAnimalEdit.animalId),
        setCageID(dataAnimalEdit.cId),
        setUserID(dataAnimalEdit.userId),
        setGender(dataAnimalEdit.sex === true ? "male" : "female"),
        setHealthCheck(dataAnimalEdit.healthCheck),
        setDescription(dataAnimalEdit.description),
        setBirthday(dataAnimalEdit.birthday.slice(0, 10)),
        setEntryCage(dataAnimalEdit.entryCageDate.slice(0, 10)),
        setStartTrain(dataAnimalEdit.startTrainDate.slice(0, 10)),
        setSpecies(dataAnimalEdit.species),
        setRarity(dataAnimalEdit.rarity);
      setFoods(dataAnimalEdit.foods);
    }
  }, [dataAnimalEdit]);
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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(dataAnimalEdit);
    const animalEdit = {
      animalId: animalId,
      userId: userID,
      cageId: cageID,
      description: description,
      healthCheck: healthCheck,
      status: status,
      rarity: rarity,
      endTrainDate: endTraining,
      outCageDate: outCage,
      animalFoods: foods,
    };
    console.log("OK");
    console.log(animalEdit);
    const response = await fetch(`https://localhost:44352/api/Animal/${animalId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animalEdit),
    });
    if (response.ok) {
      console.log("Success");
      // localStorage.setItem("isAdded", true);
      // handleClose()
      // window.location.href = "/staff/2";
      navigate("/staff/2")
      window.location.reload();
    }
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
                  <p className="fw-bold fs-2">Edit Animal</p>
                </div>
                <Form noValidate onSubmit={handleFormSubmit}>
                  <div className="form-content">
                    <div className="form">
                      <div className="label-info">
                        <label>Animal Information Basic</label>
                      </div>
                      <div className="mb-3 Animal_Infomation">
                        <div className="row mb-3">
                          <div className="mb-3" style={{ width: "33%" }}>
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
                          <div className="mb-3" style={{ width: "33%" }}>
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
                        </div>
                        <div className="row mb-3">

                          <div className="mb-3" style={{ width: "25%" }}>
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
                                <Radio
                                  style={{
                                    width: "40%",
                                  }}
                                  value="male"
                                >
                                  <span style={{ verticalAlign: "middle" }}>
                                    Male
                                  </span>
                                </Radio>
                                <Radio
                                  style={{
                                    width: "40%",
                                  }}
                                  value="female"
                                >
                                  <span style={{ verticalAlign: "middle" }}>
                                    Female
                                  </span>
                                </Radio>
                              </Radio.Group>
                            </div>
                          </div>
                          <div className="mb-3" style={{ width: "25%" }}>
                            <div>
                              <label className="form-label">Status</label>
                              <br />
                              <Radio.Group
                                id="status"
                                name="status"
                                style={{ height: "33%", width: "100%" }}
                                onChange={(e) => {
                                  setStatus(e.target.value)
                                }}
                                value={status}
                                buttonStyle="solid"
                              >
                                <Radio
                                  style={{
                                    width: "40%",
                                  }}
                                  value={true}
                                >
                                  <span style={{ verticalAlign: "middle" }}>
                                    Available
                                  </span>
                                </Radio>
                                <Radio
                                  style={{
                                    width: "40%",
                                  }}
                                  value={false}
                                >
                                  <span style={{ verticalAlign: "middle" }}>
                                    Deadth
                                  </span>
                                </Radio>
                              </Radio.Group>
                            </div>
                          </div>
                          <div className="mb-3" style={{ width: "25%" }}>
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
                                <Radio
                                  style={{
                                    width: "40%",
                                  }}
                                  value={true}
                                >
                                  <span style={{ verticalAlign: "middle" }}>
                                    Rarity
                                  </span>
                                </Radio>
                                <Radio
                                  style={{
                                    width: "40%",
                                  }}
                                  value={false}
                                >
                                  <span style={{ verticalAlign: "middle" }}>
                                    None
                                  </span>
                                </Radio>
                              </Radio.Group>
                            </div>
                          </div>
                          <div className="mb-3" style={{ width: "25%" }}>
                            <label className="form-label">Birthday</label>
                            <br />
                            <Space
                              direction="vertical"
                              size={20}
                              style={{ width: "100%" }}
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
                        <div className="mb-3">
                          <label className="form-label">HealChech</label>
                          <Form.Control
                            type="textarea"
                            style={{ height: "56px" }}
                            id="healthCheck"
                            placeholder="healthCheck"
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
                            onChange={(event) => setCageID(event.target.value)}
                          // onChange={handleChange}
                          >
                            {/* <option value="">Choose Cage</option> */}
                            {/* Render các option từ API */}
                            {listCage.map((option) => (
                              <option key={option.cId} value={option.cId} selected={option.cId === cageID}>
                                {option.cId} - MaxCapacity :{" "}
                                {option.maxCapacity} - AnimalQuantity :{" "}
                                {option.animalQuantity}
                              </option>
                            ))}
                          </Form.Select>
                        </div>
                        <div className="mb-3" style={{ display: "flex", justifyContent: "space-between" }}>
                          <div style={{ width: "40%" }}>
                            <label className="form-label">
                              Choose Entry Cage
                            </label>
                            <br />
                            <Form.Control
                              type="date"
                              name="entryCageDate"
                              value={entryCage}
                              disabled
                              onChange={(event) => setEntryCage(event.target.value)}
                            // isInvalid={
                            //   formik.errors.entryCageDate &&
                            //   formik.touched.entryCageDate
                            // }
                            />
                            {/* <Form.Control.Feedback type="invalid">
                                {formik.errors.entryCageDate}
                              </Form.Control.Feedback> */}
                          </div>
                          <div className="mb-3" style={{ width: "40%" }}>
                            <label className="form-label">Choose Out Cage</label>
                            <Form.Control
                              type="date"
                              id="outCage"
                              aria-describedby="inputGroupPrepend"
                              name="outCage"
                              value={outCage}
                              onChange={(event) => setOutCage(event.target.value)}
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
                            onChange={(evnet) => setUserID(evnet.target.value)}
                          >
                            {/* Render các option từ API */}
                            {ZooTrainerList.map((option) => (
                              <option
                                key={option.userId}
                                value={option.userId}
                                selected={option.userId === userID}
                              >
                                ZooTrainerID : {option.userId} - MaxCapacity :{" "}
                                {option.firstname} - AnimalQuantity :{" "}
                                {option.lastname}
                              </option>
                            ))}
                          </Form.Select>
                        </div>
                        <div className="row mb-3 mt-4">
                          <div className="mb-3" style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ width: "40%" }}>
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
                                value={startTrain}
                                onChange={(event) => setStartTrain(event.target.value)}
                              // isInvalid={
                              //   formik.errors.startTrainDate &&
                              //   formik.touched.startTrainDate
                              // }
                              />
                            </div>
                            {/* <Form.Control.Feedback type="invalid">
                                {formik.errors.startTrainDate}
                              </Form.Control.Feedback> */}
                            <div style={{ width: "40%" }}>
                              <label className="form-label">
                                Choose End Training
                              </label>
                              <Form.Control
                                id="endTraining"
                                type="date"
                                aria-describedby="inputGroupPrepend"
                                name="endTraining"
                                value={endTraining}
                                onChange={(event) => setEndTraining(event.target.value)}
                              // isInvalid={
                              //   formik.errors.first_name &&
                              //   formik.touched.first_name
                              // }
                              />
                              {/* <Form.Control.Feedback type="invalid">
                            {formik.errors.first_name}
                          </Form.Control.Feedback> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="label-info">
                        <label>Food Information</label>
                      </div>
                      <div className="mb-3 Food-Information">
                        <div className="mb-1">
                          {foods.map(food => (
                            <div key={food.id}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "95%",
                              }}>
                              <div style={{ width: "30%" }}>
                                <label className="form-label">
                                  ID Food Of Animal
                                </label>
                                <Form.Control
                                  type="text"
                                  className="mb-3"
                                  aria-describedby="inputGroupPrepend"
                                  disabled
                                  style={{ width: "90%" }}
                                  value={food.id}
                                />
                              </div>
                              <div style={{ width: "30%" }}>
                                <label className="form-label">
                                  Choose Quantity Food For Animal
                                </label>
                                <Form.Control
                                  type="number"
                                  className="mb-3"
                                  aria-describedby="inputGroupPrepend"
                                  style={{ width: "90%" }}
                                  value={food.quantity}
                                  onChange={(e) => handleFoodChange(food.id, e)}
                                />
                              </div>
                              <div style={{ width: "30%" }}>
                                <label className="form-label">
                                  Edit Description Food For Animal
                                </label>
                                <Form.Control
                                  type="text"
                                  className="mb-3"
                                  aria-describedby="inputGroupPrepend"
                                  style={{ width: "90%" }}
                                  value={food.description}
                                  onChange={(e) => handleDescriptionFoodChange(food.id, e)}
                                />
                              </div>
                            </div>
                          ))}
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
                            style={{ background: "blue" }}
                            variant="primary"
                            type="submit"
                            active
                          >
                            Edit animal
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
