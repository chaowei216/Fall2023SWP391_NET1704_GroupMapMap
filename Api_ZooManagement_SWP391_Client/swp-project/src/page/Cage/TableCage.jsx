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
import AddCage from "./AddCage";
function TableCage() {
    const role = localStorage.getItem("role");
    const [showModalAdd, setShowmodalAdd] = useState(false);
    const [showModalEdit, setShowmodalEdit] = useState(false);
    const [showModalView, setShowmodalView] = useState(false);
    const [showModalFodd, setShowmodalFood] = useState(false);
    const [showModalFoodAnimal, setShowmodalFoodAnimal] = useState(false);
    const [listCage, setListCage] = useState([]);
    const [dataAnimalEdit, setDataAnimalEdit] = useState({});
    const [dataAnimalView, setDataAnimalView] = useState({});
    const [dataCageEdit, setDataCageEdit] = useState({});
    const [dataCageView, setDataCageView] = useState({});

    const getList = () => {
        return fetch("https://localhost:44352/api/Cage").then((data) =>
            data.json()
        );
    };
    useEffect(() => {
        let mounted = true;
        getList().then((items) => {
            if (mounted) {
                setListCage(items);
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

    const handleEditCage = (item) => {
        // setDataUserEdit(item);
        const cage = item;
        setDataCageEdit(cage);
        setShowmodalEdit(true);
    };
    const handleViewCage = (item) => {
        const cage = item;
        setDataCageView(cage);
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
                        <b>View Cage</b>
                    </span>
                    <div className="search-container">
                        {/* toggleShow */}
                        <div className="search-content">
                            <input type="email" className="form-control" />
                            <Button variant="contained">
                                <SearchIcon />
                            </Button>
                        </div>
                        {role && role === 'STAFF' &&
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
                                <th>Cage ID</th>
                                <th>Name</th>
                                <th>Max Capacity</th>
                                <th>Animal Quantity</th>
                                <th style={{ textAlign: "center" }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listCage &&
                                listCage.length > 0 &&
                                listCage.map((items, index) => {
                                    return (
                                        <tr key={`food-${index}`}>
                                            <td>{items.cId}</td>
                                            <td>{items.name}</td>
                                            <td>{items.maxCapacity}</td>
                                            <td>{items.animalQuantity}</td>
                                            <td style={{ width: "208px" }}>
                                                <Button
                                                    variant="text"
                                                    style={{ padding: 0 }}
                                                    onClick={() => {
                                                        handleViewCage(items);
                                                    }}
                                                >
                                                    <VisibilityIcon />
                                                </Button>
                                                {role && role === 'STAFF' &&
                                                    <Button
                                                        onClick={() => {
                                                            handleEditCage(items);
                                                        }}
                                                        variant="text"
                                                        style={{ padding: 0 }}
                                                    >
                                                        <EditIcon />
                                                    </Button>
                                                }
                                                {role && role === 'STAFF' &&
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
            <AddCage show={showModalAdd} handleClose={handleClose} />
            {/* <EditFood
                show={showModalEdit}
                handleClose={handleClose}
                dataFoodEdit={dataCageEdit}
            />
            <ViewFood
                show={showModalView}
                handleClose={handleClose}
                dataFoodView={dataCageView}
            /> */}
        </div>
    );
}
export default TableCage;
