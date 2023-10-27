import * as React from "react";
import { useState, useEffect } from "react";
import AddAnimal from "../Animal/AddAnimalPage";
import Button from "@mui/material/Button";
import { DashOutlined, PlusOutlined } from "@ant-design/icons";
import "../../assets/css/dashboard.css";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Image } from "antd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import EditAnimal from "../Animal/EditAnimalPage";
import ViewAnimal from "../Animal/ViewAnimalPage";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import YourComponent from "../Animal/AnimalFoodTest";
import EditAnimalByZooTrainer from "../Animal/EditAnimalByZooTrainer";
import { MDBTypography } from "mdb-react-ui-kit";
import PetsIcon from "@mui/icons-material/Pets";
function TableScheduleFeed() {
  const emailInfo = localStorage.getItem("email");
  const [showModalAdd, setShowmodalAdd] = useState(false);
  const [showModalEdit, setShowmodalEdit] = useState(false);
  const [showModalView, setShowmodalView] = useState(false);
  const [showModalFodd, setShowmodalFood] = useState(false);
  const [showModalFoodAnimal, setShowmodalFoodAnimal] = useState(false);
  const [listAnimal, setListAnimal] = useState([]);
  const [listFood, setListFood] = useState([]);
  const [dataAnimalEdit, setDataAnimalEdit] = useState({});
  const [dataAnimalView, setDataAnimalView] = useState({});
  const [profileZooTrainer, setProfileZooTrainer] = useState({});
  const [animalFilter, setAnimalFilter] = useState([]);
  const [aID, setAID] = useState("");
  useEffect(() => {
    const getTrainerList = () => {
      return fetch("https://localhost:44352/api/User/users").then((data) =>
        data.json()
      );
    };
    let mounted = true;
    getTrainerList().then((items) => {
      if (mounted) {
        setProfileZooTrainer(items.filter((user) => user.email === emailInfo));
      }
    });
    return () => (mounted = false);
  }, []);
  useEffect(() => {
    const getList = () => {
      return fetch("https://localhost:44352/api/Animal").then((data) =>
        data.json()
      );
    };
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setListAnimal(items);
      }
    });
    return () => (mounted = false);
  }, []);

  const ZooProfileTest = profileZooTrainer;
  useEffect(() => {
    if (ZooProfileTest.length > 0) {
      setAID(ZooProfileTest[0].userId);
    }
  }, [ZooProfileTest]);
  const list = listAnimal.filter((animal) => animal.userId === aID);
  console.log(list);
  const handleClick = () => {
    setShowmodalAdd(true);
    setAnchorEl(null);
  };
  const handleClick2 = () => {
    setShowmodalFoodAnimal(true);
    setAnchorEl(null);
    // window.location.href = setAnchorEl(null);
  };
  const handleClickPop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setShowmodalFoodAnimal(false);
    setShowmodalEdit(false);
    setShowmodalAdd(false);
    setShowmodalView(false);
    setShowmodalFood(false);
    setAnchorEl(null);
  };

  const handleEditUser = (item) => {
    // setDataUserEdit(item);
    console.log(item);
    const animal = item;
    setDataAnimalEdit(animal);
    setShowmodalEdit(true);
  };
  const handleViewUser = (item) => {
    // setDataUserEdit(item);
    const animal = item;
    setDataAnimalView(animal);
    setShowmodalView(true);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let count = 0;
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="table-container">
      <div className="table-component">
        <div
          className="my-3 add-new"
          style={{ display: "flex", justifyContent: "center" }}
        >
        {/* <Image
            width={90}
            src="https://img.freepik.com/premium-vector/zoo-logo-design-vector-illustration_742779-149.jpg?w=2000"
          ></Image> */}
          <MDBTypography tag="h2" color="secondary" noteColor="secondary">
            <i> Animal Feeding Chart</i>
          </MDBTypography>
        </div>
        <div className="table-content">
          {/* <Table size="100px" hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Gender</th>
                <th>Region</th>
                <th>Rarity</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {list &&
                list.length > 0 &&
                list.map((items, index) => {
                  return (
                    <tr key={`animal-${index}`}>
                      <td>{items.name}</td>
                      <td>{items.description}</td>
                      <td>{items.sex === true ? "Male" : "Female"}</td>
                      <td>{items.region}</td>
                      <td>{items.rarity === true ? "Rarity" : "None"}</td>
                      <td style={{ width: "208px" }}>
                        <Button
                          variant="text"
                          style={{ padding: 0 }}
                          onClick={() => {
                            handleViewUser(items);
                          }}
                        >
                          <VisibilityIcon />
                        </Button>
                        <Button
                          onClick={() => {
                            handleEditUser(items);
                          }}
                          variant="text"
                          style={{
                            padding: 0,
                            backgroundColor: "green",
                            color: "white",
                            width: "84px",
                            marginRight: "15px",
                          }}
                        >
                          Fed
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table> */}
          <MDBTable bordered borderColor="primary">
            <MDBTableHead
              style={{
                borderTop: "white",
                borderRight: "black",
                borderLeft: "black",
                borderBottom: "black",
              }}
            >
              <tr>
                <th
                  scope="col"
                  style={{ textAlign: "center", color: "#4A8689" }}
                >
                  #
                </th>
                <th
                  scope="col"
                  style={{ textAlign: "center", color: "#4A8689" }}
                >
                  ANIMAL
                </th>
                <th
                  scope="col"
                  style={{ textAlign: "center", color: "#4A8689" }}
                >
                  TYPE OF FEED
                </th>
                <th
                  scope="col"
                  style={{ textAlign: "center", color: "#4A8689" }}
                >
                  AMOUNT OF FEED
                </th>
                <th
                  scope="col"
                  style={{ textAlign: "center", color: "#4A8689" }}
                >
                  TIME OF DAY
                </th>
                <th
                  scope="col"
                  style={{ textAlign: "center", color: "#4A8689" }}
                >
                  Action
                </th>
              </tr>
            </MDBTableHead>
            <MDBTableBody style={{ height: "5rem", border: "2px solid brown" }}>
              {list &&
                list.length > 0 &&
                list.map((items, index) => {
                  return (
                    <tr
                      style={{
                        height: "70px",
                        verticalAlign: "middle",
                        textAlign: "center",
                        fontWeight: "500",
                      }}
                    >
                      <th scope="row">{(count += 1)}</th>
                      <td>{items.name}</td>
                      <td>
                        {items.foods &&
                          items.foods.map((value) => {
                            return (
                              <div key={value.foodId}>
                                <span>{value.foodId}</span>
                              </div>
                            );
                          })}
                      </td>
                      <td>
                        {items.foods &&
                          items.foods.map((value) => {
                            return (
                              <div key={value.amount}>
                                <span>{value.amount}</span>
                              </div>
                            );
                          })}
                      </td>
                      <td>
                        {items.foods &&
                          items.foods.map((value) => {
                            return (
                              <div>
                                <span>
                                  {value.startEat.slice(0, 10) +
                                    " - " +
                                    value.endEat.slice(0, 10)}
                                </span>
                              </div>
                            );
                          })}
                      </td>
                      <td style={{ width: "208px" }}>
                        <Button
                          variant="text"
                          style={{ padding: 0 }}
                          onClick={() => {
                            handleViewUser(items);
                          }}
                        >
                          <VisibilityIcon />
                        </Button>
                        <Button
                          onClick={() => {
                            handleEditUser(items);
                          }}
                          variant="text"
                          style={{
                            padding: 0,
                            backgroundColor: "green",
                            color: "white",
                            width: "84px",
                            marginRight: "15px",
                          }}
                        >
                          Fed
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
      <AddAnimal show={showModalAdd} handleClose={handleClose} />
      <EditAnimalByZooTrainer
        show={showModalEdit}
        handleClose={handleClose}
        dataAnimalEdit={dataAnimalEdit}
      />
      <ViewAnimal
        show={showModalView}
        handleClose={handleClose}
        dataAnimalView={dataAnimalView}
      />
      {/* <AddAnimalFood show={showModalFoodAnimal} handleClose={handleClose} /> */}
      <YourComponent
        show={showModalFoodAnimal}
        handleClose={handleClose}
      ></YourComponent>
    </div>
  );
}

export default TableScheduleFeed;
