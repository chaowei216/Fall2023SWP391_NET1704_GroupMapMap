import * as React from "react";
import { useState, useEffect } from "react";
import AddAnimal from "./AddAnimalPage";
import Button from "@mui/material/Button";
import { DashOutlined, PlusOutlined } from "@ant-design/icons";
import "../../assets/css/dashboard.css";
import Table from "react-bootstrap/Table";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import EditAnimal from "./EditAnimalPage";
import ViewAnimal from "./ViewAnimalPage";
import AddAnimalFood from "./AnimalFoodPage";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import YourComponent from "./AnimalFoodTest";
import { Pagination } from "antd";
import axios from "axios";
function TableAnimal() {
  const role = localStorage.getItem("role");
  const [showModalAdd, setShowmodalAdd] = useState(false);
  const [showModalEdit, setShowmodalEdit] = useState(false);
  const [showModalView, setShowmodalView] = useState(false);
  const [showModalFodd, setShowmodalFood] = useState(false);
  const [showModalFoodAnimal, setShowmodalFoodAnimal] = useState(false);
  const [listAnimal, setListAnimal] = useState([]);
  const [dataAnimalEdit, setDataAnimalEdit] = useState({});
  const [dataAnimalView, setDataAnimalView] = useState({});
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const getList = () => {
      return fetch(`https://localhost:44352/api/Animal/page/${currentPage}`).then(
        (data) => data.json()
      );
    };
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setListAnimal(items.animals);
        setTotalPages(items.pages);
      }
    });
    return () => (mounted = false);
  }, [currentPage]);
  const onShowSizeChange = (current) => {
    console.log(current);
    setCurrentPage(current);
  };
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

  const handleDeleteAnimal = async (item) => {
    try {
      console.log(item.animalId);
      await axios.delete(`https://localhost:44352/api/Animal/${item.animalId}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }

  }

  const handleViewUser = (item) => {
    // setDataUserEdit(item);
    const animal = item;
    setDataAnimalView(animal);
    setShowmodalView(true);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="table-container">
      <div className="table-component">
        <div className="my-3 add-new">
          <span>
            <b>View Animal</b>
          </span>
          <div className="search-container">
            {/* toggleShow */}
            <div className="search-content">
              <input type="email" className="form-control" />
              <Button variant="contained">
                <SearchIcon />
              </Button>
            </div>
            <div>
              <Button
                aria-describedby={id}
                variant="contained"
                onClick={handleClickPop}
              >
<<<<<<< HEAD
                <PlusOutlined /> {" "}
                Create Animal
=======
                <PlusOutlined></PlusOutlined> Create Animal
>>>>>>> 17bab2ccb61658bea34cf1358028b906b6f50a90
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  <div className="btn-header">
                    <div
                      className="mb-3 mt-1"
                      style={{ background: "aliceblue" }}
                    >
                      <Button variant="outlined" onClick={handleClick}>
                        Add New Animal
                      </Button>
                    </div>
                  </div>
                </Typography>
              </Popover>
            </div>
          </div>
        </div>
        <div className="table-content">
          <Table size="100px" hover>
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
              {listAnimal &&
                listAnimal.length > 0 &&
                listAnimal.map((items, index) => {
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
                          style={{ padding: 0 }}
                        >
                          <EditIcon />
                        </Button>
                        <Button variant="text" style={{ padding: 0 }}
                          onClick={() => {
                            handleDeleteAnimal(items);
                          }}>
                          <DeleteIcon />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          <div className="pagination-container">
            <Pagination
              onChange={onShowSizeChange}
              defaultCurrent={currentPage}
              defaultPageSize={7}
              total={totalPages * 7}
            />
          </div>
        </div>
      </div>
      <AddAnimal show={showModalAdd} handleClose={handleClose} />
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
      {/* <AddAnimalFood show={showModalFoodAnimal} handleClose={handleClose} /> */}
      <YourComponent
        show={showModalFoodAnimal}
        handleClose={handleClose}
      ></YourComponent>
    </div>
  );
}

export default TableAnimal;
