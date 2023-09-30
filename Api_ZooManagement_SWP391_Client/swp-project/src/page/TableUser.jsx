import { React, useState } from "react";
import Table from "react-bootstrap/Table";
import Avatar from "@mui/material/Avatar";
import "../assets/css/dashboard.css";
import { Pagination } from "antd";
import { DashOutlined, PlusOutlined } from "@ant-design/icons";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReactPaginate from "react-paginate";
import ModalAdd from "./User/ModalAdd";
import { useNavigate } from "react-router-dom";
import { colors } from "@mui/material";

function TableUser() {
  const [optSmModal, setOptSmModal] = useState(false);
  const [showSearchAlert, setShowSearchAlert] = useState(false);
  const toggleShow = () => setOptSmModal(!optSmModal);
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
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
              <Button variant="contained" onClick={handleClick}>
                <SearchIcon />
              </Button>
            </div>
            <div>
              <Button variant="contained" onClick={handleClick}>
                <PlusOutlined />
              </Button>
            </div>
          </div>

          <>
            <ModalAdd
              optSmModal={optSmModal}
              toggleShow={toggleShow}
              setOptSmModal={setOptSmModal}
            />
          </>
          {/* <button
          className="btn btn-success"
          onClick={() => {
            setShowmodalAddnew(true);
          }}
        >
          Add new user
        </button> */}
        </div>
        <div className="table-content">
          <Table size="100px" hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Avatar</th>
                <th>First name</th>
                <th>Last name</th>
                <th style={{"textAlign": "center"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Haha</td>
                <td>Haha</td>
                <td>hhuhuhh</td>
                <td>Hihi</td>
                <td>Leuleu</td>
                <td style={{"width": "13rem"}}>
                <Button variant="text" style={{padding: 0}}>
                  <VisibilityIcon />
                  </Button>
                  <Button variant="text" style={{padding: 0}}>
                  <EditIcon />
                  </Button>
                  <Button variant="text" style={{padding: 0}}>
                  <DeleteIcon />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Leuleu</td>
                <td>Haha</td>
                <td>Huhu</td>
                <td>Hihi</td>
                <td>Leuleu</td>
                <td style={{"width": "13rem"}}>
                <Button variant="text" style={{padding: 0}}>
                  <VisibilityIcon />
                  </Button>
                  <Button variant="text" style={{padding: 0}}>
                  <EditIcon />
                  </Button>
                  <Button variant="text" style={{padding: 0}}>
                  <DeleteIcon />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Leuleu</td>
                <td>Haha</td>
                <td>Huhu</td>
                <td>Hihi</td>
                <td>Leuleu</td>
                <td style={{"width": "13rem"}}>
                <Button variant="text" style={{padding: 0}}>
                  <VisibilityIcon />
                  </Button>
                  <Button variant="text" style={{padding: 0}}>
                  <EditIcon />
                  </Button>
                  <Button variant="text" style={{padding: 0}}>
                  <DeleteIcon />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Leuleu</td>
                <td>Haha</td>
                <td>Huhu</td>
                <td>Hihi</td>
                <td>Leuleu</td>
                <td style={{"width": "13rem"}}>
                <Button variant="text" style={{padding: 0}}>
                  <VisibilityIcon />
                  </Button>
                  <Button variant="text" style={{padding: 0}}>
                  <EditIcon />
                  </Button>
                  <Button variant="text" style={{padding: 0}}>
                  <DeleteIcon />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="pagination-container">
            <Pagination
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              onChange={onShowSizeChange}
              defaultCurrent={1}
              total={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TableUser;
