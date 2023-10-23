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
import ViewNews from "./ViewNews";
import EditNews from "./EditNews";
import AddNews from "./AddNews";
function TableNews() {
  const [showModalAdd, setShowmodalAdd] = useState(false);
  const [showModalEdit, setShowmodalEdit] = useState(false);
  const [showModalView, setShowmodalView] = useState(false);
  const [showModalFodd, setShowmodalFood] = useState(false);
  const [showModalFoodAnimal, setShowmodalFoodAnimal] = useState(false);
  const [listNews, setListNews] = useState([]);
  const [dataAnimalEdit, setDataAnimalEdit] = useState({});
  const [dataAnimalView, setDataAnimalView] = useState({});
  const [dataNewsEdit, setDataNewsEdit] = useState({});
  const [dataNewsView, setDataNewsView] = useState({});

  const getList = () => {
    return fetch("https://localhost:44352/api/News").then((data) =>
      data.json()
    );
  };
  useEffect(() => {
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setListNews(items);
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

  const handleEditNews = (item) => {
    // setDataUserEdit(item);
    const food = item;
    setDataNewsEdit(food);
    setShowmodalEdit(true);
  };
  const handleViewNews = (item) => {
    const food = item;
    setDataNewsView(food);
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
            <b>View News</b>
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
              <Button variant="contained" onClick={handleClick}>
                <PlusOutlined />
              </Button>
            </div>
          </div>
        </div>
        <div className="table-content">
          <Table size="100px" hover>
            <thead>
              <tr>
                <th>News ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Image</th>
                <th>ReleaseDate</th>
                <th style={{ textAlign: "center" }}>Status</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {listNews &&
                listNews.length > 0 &&
                listNews.map((items, index) => {
                  return (
                    <tr key={`food-${index}`}>
                      <td>{items.newsId}</td>
                      <td>{items.newsTitle}</td>
                      <td>{items.authorName}</td>
                      <td>{items.newsImage}</td>
                      <td>{items.releaseDate.slice(0, 10)}</td>
                      <td>
                        {items.status === true ? (
                          <div
                            style={{
                              background: "#008800",
                              borderRadius: "50px",
                              textAlign: "center",
                              color: "white",
                              fontWeight: "bold",
                            }}
                          >
                            Approve
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFBC00",
                              borderRadius: "50px",
                              textAlign: "center",
                              color: "indigo",
                              fontWeight: "bold",
                            }}
                          >
                            Pending
                          </div>
                        )}
                      </td>
                      <td style={{ width: "208px" }}>
                        <Button
                          variant="text"
                          style={{ padding: 0 }}
                          onClick={() => {
                            handleViewNews(items);
                          }}
                        >
                          <VisibilityIcon />
                        </Button>
                        <Button
                          onClick={() => {
                            handleEditNews(items);
                          }}
                          variant="text"
                          style={{ padding: 0 }}
                        >
                          <EditIcon />
                        </Button>
                        <Button variant="text" style={{ padding: 0 }}>
                          <DeleteIcon />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
      <AddNews show={showModalAdd} handleClose={handleClose} />
      <EditNews
        show={showModalEdit}
        handleClose={handleClose}
        dataNewsEdit={dataNewsEdit}
      />
      <ViewNews
        show={showModalView}
        handleClose={handleClose}
        dataNewsView={dataNewsView}
      />
    </div>
  );
}
export default TableNews;
