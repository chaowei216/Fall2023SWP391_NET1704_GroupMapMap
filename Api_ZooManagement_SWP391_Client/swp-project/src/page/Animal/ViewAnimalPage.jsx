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
import Table from "react-bootstrap/Table";
import { DatePicker, Radio, Select, Space } from "antd";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../assets/css/dashboard.css";
import { ToastContainer } from "react-toastify";
import ListGroup from "react-bootstrap/ListGroup";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function ViewAnimal(pros) {
  const { show, handleClose, dataAnimalView } = pros;
  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  const [cageID, setCageID] = useState("");
  // const [userID, setUserID] = useState([]);
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
  const [showListTrainer, setShowListTrainer] = useState(false);
  const [showList, setShowList] = useState(false);
  const [listCageOld, setListCageOld] = useState([]);
  const [listTrainerOld, setListTrainerOld] = useState([]);
  const [animalID, setAnimalID] = useState("");
  const [listFoods, setListFoods] = useState([]);
  const [foodId, setFoodID] = useState("");
  const [listFoodsFilter, setListFoodsFilter] = useState([]);

  useEffect(() => {
    if (show) {
      var today = new Date();
      var date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      setAnimalID(dataAnimalView.animalId),
        setRegion(dataAnimalView.region),
        setName(dataAnimalView.name),
        setCageID(dataAnimalView.cId),
        setUserID(dataAnimalView.userId),
        setGender(dataAnimalView.sex === true ? "male" : "female"),
        setHealthCheck(dataAnimalView.healthCheck),
        setDescription(dataAnimalView.description),
        setBirthday(
          dataAnimalView.birthday === null
            ? null
            : dataAnimalView.birthday.slice(0, 10)
        ),
        console.log(date);
      console.log(dataAnimalView.birthday.slice(0, 10));
      // setEntryAnimal();
      setEntryCage(
        dataAnimalView.entryCageDate === null
          ? null
          : dataAnimalView.entryCageDate.slice(0, 10)
      ),
        setStartTrain(
          dataAnimalView.startTrainDate === null
            ? null
            : dataAnimalView.startTrainDate.slice(0, 10)
        ),
        setEndTraining(date),
        setOutCage(date),
        setSpecies(dataAnimalView.species),
        setRarity(dataAnimalView.rarity);
      setFoodID(dataAnimalView.foods);
    }
  }, [dataAnimalView]);
  const date = new Date();
  useEffect(() => {
    const getZooTrainerList = () => {
      return fetch(`https://localhost:44352/api/User/users`).then((data) =>
        data.json()
      );
    };
    let mounted = true;
    getZooTrainerList().then((items) => {
      if (mounted) {
        setListZooTrainer(items);
      }
    });
    return () => (mounted = false);
  }, []);
  useEffect(() => {
    const getFoodList = () => {
      return fetch(`https://localhost:44352/api/Food`).then((data) =>
        data.json()
      );
    };
    let mounted = true;
    getFoodList().then((items) => {
      if (mounted) {
        setListFoods(items);
      }
    });
    return () => (mounted = false);
  }, []);
  useEffect(() => {
    const getCageList = () => {
      return fetch("https://localhost:44352/api/Cage").then((data) =>
        data.json()
      );
    };
    let mounted = true;
    getCageList().then((items) => {
      if (mounted) {
        setListCage(items);
      }
    });
    return () => (mounted = false);
  }, []);
  useEffect(() => {
    const getTrainerOld = () => {
      return fetch(
        `https://localhost:44352/api/Animal/${animalID}/oldcages`
      ).then((data) => data.json());
    };
    let mounted = true;
    getTrainerOld().then((items) => {
      if (mounted) {
        setListCageOld(items);
      }
    });
    return () => (mounted = false);
  }, [animalID]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://localhost:44352/api/Animal/${animalID}/oldtrainers`
      );
      const data = await response.json();
      setListTrainerOld(data);
    };

    if (animalID) {
      fetchData();
    }
  }, [animalID]);
  useEffect(() => {
    if (foodId) {
      // Lấy ids
      // const fIds = foodId.map(f => f.id);
      // // Lọc foods
      // const filteredFoods = listFoods.filter(food => {
      //   return fIds.includes(food.foodId);
      // }).map(food => {
      //   // Tìm fId object có id trùng với food.id
      //   const fId = fIds.find(f => f.id === food.foodId);

      //   // Trả về object mới có quantity là của fId
      //   return {
      //     ...food,
      //     quantity: foodId.quantity
      //   }
      // });
      const foodFilter = listFoods
        .filter((food) => {
          return foodId.some((fId) => fId.foodId === food.foodId);
        })
        .map((food) => {
          // Tìm fId object có id trùng với food.id
          const matchedFId = foodId.find((fId) => fId.foodId === food.foodId);

          // Nếu không tìm thấy fId thì trả về food
          if (!matchedFId) {
            return food;
          }

          // Trả về object mới có quantity là của fId
          return {
            ...food,
            amount: matchedFId.amount,
            description: matchedFId.description,
          };
        });
      // Cập nhật state
      setListFoodsFilter(foodFilter);
    }
  }, [listFoods, foodId]);
  const handleButton = () => {
    setShowList(!showList);
  };
  // Danh sách users
  const users = listZooTrainer;
  // Danh sách userId trong animalTrainers
  const animalTrainers = userID;
  // Lọc ra các user có id trùng với animalTrainers
  // const trainers = users.filter(user => {
  //   return animalTrainers.some(trainer => {
  //     return trainer.userId === user.userId;
  //   })
  // });
  const trainers = users.filter((user) => user.userId === userID);
  const cages = listCage.filter((cage) => cage.cId === cageID);
  //   useEffect(() => {
  //   const getCageList = () => {
  //     return fetch(`https://localhost:44352/api/Cage/CageId?${cageID}`).then((data) =>
  //       data.json()
  //     );
  //   };
  //   let mounted = true;
  //   getCageList().then((items) => {
  //     if (mounted) {
  //       setListCage(items);
  //     }
  //   });
  //   return () => (mounted = false);
  // }, []);
  // console.log(listCage)

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
                              onChange={(event) =>
                                setRegion(event.target.value)
                              }
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
                            <label className="form-label">Species Animal</label>
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
                          <div className="mb-3" style={{ width: "33%" }}>
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
                        <div className="row mb-3">
                          <label className="form-label">Health Check</label>
                          <Form.Control
                            type="textarea"
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
                        <div className="mb-3 row">
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
                      </div>
                      <div className="label-info">
                        <label>Cage Information</label>
                      </div>
                      <div
                        className="mb-3 Cage_Infomation"
                        style={{ paddingRight: "25px" }}
                      >
                        <div style={{ textAlign: "end", marginTop: "10px" }}>
                          <Button variant="primary" onClick={handleButton}>
                            More Old List
                          </Button>
                        </div>
                        <div>
                          {/* here */}
                          {showList && (
                            <div className="list" style={{ marginTop: "10px" }}>
                              <Table striped bordered hover>
                                <thead>
                                  <tr>
                                    <th>Cage Name</th>
                                    <th>Quantity</th>
                                    <th>Max Capacity</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {listCageOld &&
                                    listCageOld.length > 0 &&
                                    listCageOld.map((value) => {
                                      return (
                                        <tr>
                                          <td>{value.name}</td>
                                          <td>{value.animalQuantity}</td>
                                          <td>{value.maxCapacity}</td>
                                        </tr>
                                      );
                                    })}
                                  {listCageOld.length === 0 && (
                                    <tr>
                                      <td colSpan={3}>Empty List</td>
                                    </tr>
                                  )}
                                </tbody>
                              </Table>
                            </div>
                          )}
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Cage for Animal</label>
                          <Table striped bordered hover>
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Cage Name</th>
                                <th>Max Capacity</th>
                                <th>Quantity</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cages &&
                                cages.length > 0 &&
                                cages.map((value) => {
                                  return (
                                    <tr>
                                      <td>{value.cId}</td>
                                      <td>{value.name}</td>
                                      <td>{value.maxCapacity}</td>
                                      <td>{value.animalQuantity}</td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </Table>
                        </div>
                        <div
                          className="row"
                          style={{ justifyContent: "space-between" }}
                        >
                          <div className="mb-3" style={{ width: "40%" }}>
                            <div>
                              <label className="form-label">
                                Entry Cage Date
                              </label>
                              <br />
                              <Form.Control
                                type="date"
                                name="entryCageDate"
                                disabled
                                value={entryCage}
                              />
                            </div>
                          </div>
                          <div className="mb-3" style={{ width: "40%" }}>
                            <label className="form-label">Out Cage</label>
                            <Form.Control
                              type="date"
                              id="outCage"
                              aria-describedby="inputGroupPrepend"
                              name="outCage"
                              disabled
                              value={outCage}
                              onChange={(event) =>
                                setRegion(event.target.value)
                              }
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
                      <div
                        className="ZooTrainer-Information"
                        style={{ paddingRight: "25px" }}
                      >
                        <div style={{ textAlign: "end", marginTop: "10px" }}>
                          <Button
                            variant="primary"
                            onClick={() => setShowListTrainer(!showListTrainer)}
                          >
                            More Old List
                          </Button>
                        </div>
                        <div>
                          {showListTrainer && (
                            <div className="list" style={{ marginTop: "10px" }}>
                              <Table striped bordered hover>
                                <thead>
                                  <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Capacity</th>
                                    <th>Phone</th>
                                    <th>StartDate</th>
                                    <th>EndDate</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {listTrainerOld &&
                                    listTrainerOld.length > 0 &&
                                    listTrainerOld.map((value) => {
                                      return (
                                        <tr>
                                          <td>{value.userId}</td>
                                          <td>{value.firstname}</td>
                                          <td>{value.lastname}</td>
                                          <td>{value.phone}</td>
                                          <td>{value.startDate}</td>
                                          <td>{value.endDate === null ? "Empty" : value.endDate}</td>
                                        </tr>
                                      );
                                    })}
                                  {listTrainerOld.length === 0 && (
                                    <tr>
                                      <td colSpan={6}>Empty List</td>
                                    </tr>
                                  )}
                                </tbody>
                              </Table>
                            </div>
                          )}
                        </div>
                        <div className="mb-2">
                          <label className="form-label">
                            ZooTrainer for Animal
                          </label>
                          <Table striped bordered hover>
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {trainers &&
                                trainers.length > 0 &&
                                trainers.map((value) => {
                                  return (
                                    <tr>
                                      <td>{value.userId}</td>
                                      <td>{value.firstname}</td>
                                      <td>{value.lastname}</td>
                                      <td>{value.phone}</td>
                                      <td>{value.email}</td>
                                      <td>
                                        {value.status === true ? (
                                          <div
                                            style={{
                                              background: "#008800",
                                              borderRadius: "50px",
                                              textAlign: "center",
                                              color: "white",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            Working
                                          </div>
                                        ) : (
                                          <div
                                            style={{
                                              background: "red",
                                              borderRadius: "50px",
                                              textAlign: "center",
                                              color: "white",
                                              fontWeight: "bold",
                                            }}
                                          >
                                            End Work
                                          </div>
                                        )}
                                      </td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </Table>
                        </div>
                        <div
                          className="row"
                          style={{ justifyContent: "space-between" }}
                        >
                          <div className="mb-3" style={{ width: "40%" }}>
                            <div>
                              <label className="form-label">
                                StartTraining Date
                              </label>
                              <br />
                              <Form.Control
                                type="date"
                                name="entryCageDate"
                                disabled
                                value={startTrain}
                              />
                            </div>
                          </div>
                          <div className="mb-3" style={{ width: "40%" }}>
                            <label className="form-label">End Training</label>
                            <Form.Control
                              id="endTraining"
                              type="date"
                              aria-describedby="inputGroupPrepend"
                              name="endTraining"
                              disabled
                              value={endTraining}
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
                        </div>
                      </div>
                      <div className="label-info">
                        <label>Food Information</label>
                      </div>
                      <div className="Food-Information">
                        <div className="mb-3" style={{ paddingRight: "25px" }}>
                          <label className="form-label">Food For Animal</label>
                          <Table striped bordered hover>
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Food Name</th>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              {listFoodsFilter &&
                                listFoodsFilter.length > 0 &&
                                listFoodsFilter.map((value) => {
                                  return (
                                    <tr>
                                      <td>{value.foodId}</td>
                                      <td>{value.fName}</td>
                                      <td>{value.category}</td>
                                      <td>{value.amount}</td>
                                      <td>{value.description}</td>
                                    </tr>
                                  );
                                })}
                            </tbody>
                          </Table>
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
