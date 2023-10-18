import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { DashOutlined, PlusOutlined } from "@ant-design/icons";
import "../../assets/css/dashboard.css";
import Table from "react-bootstrap/Table";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import AddFood from "./AddFood";
import EditFood from "./EditFood";
import ViewFood from "./ViewFood";
function TableFood() {
  const role = localStorage.getItem("role");
  const [showModalAdd, setShowmodalAdd] = useState(false);
  const [showModalEdit, setShowmodalEdit] = useState(false);
  const [showModalView, setShowmodalView] = useState(false);
  const [showModalFodd, setShowmodalFood] = useState(false);
  const [showModalFoodAnimal, setShowmodalFoodAnimal] = useState(false);
  const [listFood, setListFood] = useState([]);
  const [dataAnimalEdit, setDataAnimalEdit] = useState({});
  const [dataAnimalView, setDataAnimalView] = useState({});
  const [dataFoodEdit, setDataFoodEdit] = useState({});
  const [dataFoodView, setDataFoodView] = useState({});

  const getList = () => {
    return fetch("https://localhost:44352/api/Food").then((data) =>
      data.json()
    );
  };
  useEffect(() => {
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setListFood(items);
      }
    });
    return () => (mounted = false);
  }, []);
  const handleClick = () => {
    setShowmodalAdd(true);
  };
  //   const handleClick = () => {
  //     setShowmodalAdd(true);
  //     setAnchorEl(null);
  //   };
  //   const handleClick2 = () => {
  //     setShowmodalFoodAnimal(true);
  //     setAnchorEl(null);
  //   };
  //   const handleClickPop = (event) => {
  //     setAnchorEl(event.currentTarget);
  //   };
  const handleClose = () => {
    setShowmodalFoodAnimal(false);
    setShowmodalEdit(false);
    setShowmodalAdd(false);
    setShowmodalView(false);
    setShowmodalFood(false);
    setAnchorEl(null);
  };

  const handleEditFood = (item) => {
    // setDataUserEdit(item);
    const food = item;
    setDataFoodEdit(food);
    setShowmodalEdit(true);
  };
  const handleViewFood = (item) => {
    const food = item;
    setDataFoodView(food);
    setShowmodalView(true);
  };
  //   const handleViewUser = (item) => {
  //     // setDataUserEdit(item);
  //     const animal = item;
  //     setDataAnimalView(animal);
  //     setShowmodalView(true);
  //   };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="table-container">
      <div className="table-component">
        <div className="my-3 add-new">
          <span>
            <b>View Food</b>
          </span>
          <div className="search-container">
            {/* toggleShow */}
            <div className="search-content">
              <input type="email" className="form-control" />
              <Button variant="contained">
                <SearchIcon />
              </Button>
            </div>
            {role && role === 3 &&
            <div>
              <Button variant="contained" onClick={handleClick}>
                <PlusOutlined />
              </Button>
            </div>
            }
          </div>
        </div>
        <div className="table-content">
          <Table size="100px" hover>
            <thead>
              <tr>
                <th>Food ID</th>
                <th>Food Name</th>
                <th>Food Quantity</th>
                <th>Category</th>
                <th>Animal Food</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {listFood &&
                listFood.length > 0 &&
                listFood.map((items, index) => {
                  return (
                    <tr key={`food-${index}`}>
                      <td>{items.foodId}</td>
                      <td>{items.fName}</td>
                      <td>{items.quantity}</td>
                      <td>{items.category}</td>
                      <td>
                        {items.animalFoods === null
                          ? "None"
                          : `${items.animalFoods}`}
                      </td>
                      <td style={{ width: "208px" }}>
                        <Button
                          variant="text"
                          style={{ padding: 0 }}
                          onClick={() => {
                            handleViewFood(items);
                          }}
                        >
                          <VisibilityIcon />
                        </Button>
                        {role && role === 3 &&
                        <Button
                          onClick={() => {
                            handleEditFood(items);
                          }}
                          variant="text"
                          style={{ padding: 0 }}
                        >
                          <EditIcon />
                        </Button>
                        }
                        {role && role ===3 && 
                        <Button variant="text" style={{ padding: 0 }}>
                          <DeleteIcon />
                        </Button>
                        }
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
      <AddFood show={showModalAdd} handleClose={handleClose} />
      <EditFood
        show={showModalEdit}
        handleClose={handleClose}
        dataFoodEdit={dataFoodEdit}
      />
      <ViewFood
        show={showModalView}
        handleClose={handleClose}
        dataFoodView={dataFoodView}
      />
      {/* <AddAnimal show={showModalAdd} handleClose={handleClose} />
      <EditAnimal
        show={showModalEdit}
        handleClose={handleClose}
        dataAnimalEdit={dataAnimalEdit}
      />
      <ViewAnimal
        show={showModalView}
        handleClose={handleClose}
        dataAnimalView={dataAnimalView}
      />
      <AddAnimalFood show={showModalFoodAnimal} handleClose={handleClose} /> */}
    </div>
  );
}
export default TableFood;
