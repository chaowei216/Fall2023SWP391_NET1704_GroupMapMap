import { React, useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Avatar from "@mui/material/Avatar";
import "../../assets/css/dashboard.css";
import { Pagination } from "antd";
import { DashOutlined, PlusOutlined } from "@ant-design/icons";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { colors } from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import ViewUser from "./ViewUser";
import EditPage from "./EditPage";
function TableStaff() {
  useEffect(() => {
    if (localStorage.getItem("isAdded") === "true") {
      // show success msg
      toast.success("Added Successfully");
      localStorage.removeItem("isAdded");
    }
  }, []);
  const [dataUserEdit, setDataUserEdit] = useState({});
  const [dataUserView, setDataUserView] = useState({});
  const [showModalEdit, setShowmodalEdit] = useState(false);
  const [showModalView, setShowmodalView] = useState(false);
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const getUsers = () => {
      return fetch(`https://localhost:44352/api/User/page/${currentPage}`).then(
        (data) => data.json()
      );
    };
    let mounted = true;
    getUsers().then((items) => {
      if (mounted) {
        setUsers(items.users);
        setTotalPages(items.pages);
      }
    });
    return () => (mounted = false);
  }, [currentPage]);
  const handleEditUser = (item) => {
    console.log(item);
    const user = item;
    setDataUserEdit(user);
    setShowmodalEdit(true);
  };
  const handleViewUser = (item) => {
    const user = item;
    setDataUserView(user);
    setShowmodalView(true);
  };
  const handleClose = () => {
    setShowmodalEdit(false);
    setShowmodalView(false);
  };
  const email = localStorage.getItem("email");
  const zooTrainerList = users.filter((user) => user.role === 3);
  // const getList = () => {
  //   return fetch("https://localhost:44352/api/User/users").then((data) =>
  //     data.json()
  //   );
  // };
  // // dùng API real
  // useEffect(() => {
  //   let mounted = true;
  //   getList().then((items) => {
  //     if (mounted) {
  //       setListUsers(items);
  //     }
  //   });
  //   return () => (mounted = false);
  // }, []);
  const [optSmModal, setOptSmModal] = useState(false);
  const [showSearchAlert, setShowSearchAlert] = useState(false);
  const toggleShow = () => setOptSmModal(!optSmModal);
  const onShowSizeChange = (current) => {
    console.log(current);
    setCurrentPage(current);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/staff/add");
  };
  return (
    <div className="table-container">
      <div className="table-component">
        <div className="my-3 add-new">
          <span>
            <b>View Users</b>
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
                <th>ID</th>
                <th>Email</th>
                <th>Role</th>
                <th>First name</th>
                <th>Last name</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {zooTrainerList &&
                zooTrainerList.length > 0 &&
                zooTrainerList.map((item, index) => {
                  return (
                    <tr key={`user-${index}`}>
                      <td>{item.userId}</td>
                      <td>{item.email}</td>
                      <td>{item.role === 2 ? "Staff" : "ZooTrainer"}</td>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td style={{ width: "13rem" }}>
                        <Button
                          variant="text"
                          style={{ padding: 0 }}
                          onClick={() => {
                            handleViewUser(item);
                          }}
                        >
                          <VisibilityIcon />
                        </Button>
                        <Button
                          onClick={() => {
                            handleEditUser(item);
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
      <EditPage
        show={showModalEdit}
        handleClose={handleClose}
        dataUserEdit={dataUserEdit}
      />
      <ViewUser
        show={showModalView}
        handleClose={handleClose}
        dataUserView={dataUserView}
      />
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
  );
}
export default TableStaff;