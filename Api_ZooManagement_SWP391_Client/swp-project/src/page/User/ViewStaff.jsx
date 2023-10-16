import React, { useState, useEffect } from "react";
import "../../assets/css/dashboard.css";
import Password from "antd/es/input/Password";
import { DatePicker, Radio, Select, Space } from "antd";
const { RangePicker } = DatePicker;
import { Formik, useFormik, Field } from "formik";
import FormList from "antd/es/form/FormList";
import { basicSchema } from "./validateForm";
import Form from "react-bootstrap/Form";
import { EventNoteTwoTone, TouchAppRounded } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import axios from "axios";
import { creatNewUser } from "../../service/UserService";
import { Navigate, useNavigate } from "react-router-dom";
import { MDBCollapse } from "mdb-react-ui-kit";
import { boolean } from "yup";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const onOk = (value) => {
    console.log("onOk: ", value);
};
const onSubmit = () => {
    console.log("submit");
};

function ViewStaff() {
    // const [Password, setPassword] = useState("123456");
    // const location = useLocation();
    // const {setListUsers} =  location.state;
    const emailInfo = localStorage.getItem("email");
    const [staffProfile, setStaffProfile] = useState([]);
    const [userId, setUserId] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [sex, setSex] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("");
    const [Role, setRole] = useState("");
    const [Profile, setProfile] = useState([]);
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Submit");
        // console.log(formik.errors);
    };
    const [test, setTest] = useState("");
    console.log(emailInfo);

    // dùng API real
    useEffect(() => {
        const getList = () => {
            return fetch("https://localhost:44352/api/User/users").then((data) =>
                data.json()
            );
        };
        let mounted = true;
        getList().then((items) => {
            if (mounted) {
                setStaffProfile(items.filter(user => user.email === emailInfo));
            }
        });
        return () => (mounted = false);
    }, []);
    console.log(staffProfile)
    useEffect(() => {
        setProfile(staffProfile.filter(user => user.email === emailInfo))
    }, [])

    console.log(Profile);
    // useEffect(() => {
    //     setUserId(Profile[0].userId);
    //     setEmail(Profile[0].email);
    //     setFirstName(Profile[0].firstname);
    //     setLastName(Profile[0].lastname);
    //     setAddress(Profile[0].address);
    //     setPhone(Profile[0].phone);
    //     setSex(Profile[0].sex);
    //     setRole(Profile[0].role === 2 ? "Staff" : "ZooTrainer");
    //     setStartDate(Profile[0].startDate);
    //     setEndDate(Profile[0].endDate);
    //     setStatus(Profile[0].status);
    // }, [Profile]);
    const [Show, setShow] = useState(true);
    const toggleShow = () => setShow(!Show);

    return (
        <div className="form-container">
            <div className="form-header">
                <p className="fw-bold fs-2">Profile Information</p>
            </div>
            {staffProfile && staffProfile.length > 0 &&
                <Form noValidate>
                    <div className="form-content">
                        <div className="form-view">
                            <div className="row mb-3">
                                <div className="mb-3" style={{ width: "40%" }}>
                                    <label className="form-label">UserId</label>
                                    <Form.Control
                                        id="userId"
                                        type="text"
                                        placeholder="name of the animal"
                                        disabled
                                        aria-describedby="inputGroupPrepend"
                                        name="userId"
                                        value={staffProfile[0].userId}
                                    />
                                </div>
                                <div className="mb-3" style={{ width: "40%" }}>
                                    <label className="form-label">Email</label>
                                    <Form.Control
                                        type="text"
                                        id="email"
                                        placeholder="region"
                                        aria-describedby="inputGroupPrepend"
                                        disabled
                                        name="email"
                                        value={staffProfile[0].email}
                                        onChange={(event) => setRegion(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="mb-3" style={{ width: "33%" }}>
                                    <label className="form-label">First Name</label>
                                    <Form.Control
                                        type="string"
                                        id="species"
                                        disabled
                                        placeholder="Species Animal"
                                        aria-describedby="inputGroupPrepend"
                                        name="species"
                                        value={staffProfile[0].firstname}
                                    />
                                </div>
                                <div className="mb-3" style={{ width: "33%" }}>
                                    <label className="form-label">Last Name</label>
                                    <Form.Control
                                        type="text"
                                        id="lastName"
                                        aria-describedby="inputGroupPrepend"
                                        name="lastName"
                                        disabled
                                        value={staffProfile[0].lastname}
                                    />
                                </div>
                                <div className="mb-3" style={{ width: "33%" }}>
                                    <label className="form-label">Address</label>
                                    <Form.Control
                                        type="text"
                                        id="address"
                                        aria-describedby="inputGroupPrepend"
                                        name="address"
                                        disabled
                                        value={staffProfile[0].address}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="mb-3 row-content">
                                    <label className="form-label">Address</label>
                                    <Form.Control
                                        placeholder="email"
                                        aria-describedby="inputGroupPrepend"
                                        disabled
                                        value={staffProfile[0].address}
                                    />
                                </div>

                            </div>
                            <div className="row mb-3">
                                <div className="mb-3" style={{ width: "33%" }}>
                                    <label className="form-label">Role</label>
                                    <Radio.Group
                                        id="status"
                                        name="status"
                                        style={{ height: "33%", width: "100%" }}
                                        // onChange={(e) => {
                                        //   handleRoleChange(e);
                                        // }}
                                        // value={staffProfile[0].role}
                                        buttonStyle="solid"
                                        disabled
                                    >
                                        {staffProfile[0].role === 2 &&
                                            < Radio.Button
                                                style={{
                                                    width: "44%",
                                                    textAlign: "center",
                                                    color: "blue",
                                                    background: "#FFAAA5"
                                                }}
                                                value={2}
                                            >
                                                Staff
                                            </Radio.Button>
                                        }
                                        {staffProfile[0].role === 3 &&
                                            <Radio.Button
                                                style={{
                                                    width: "44%",
                                                    textAlign: "center",
                                                    color: "red"
                                                }}
                                                value={3}
                                            >
                                                ZooTrainer
                                            </Radio.Button>
                                        }
                                    </Radio.Group>
                                </div>
                                <div className="mb-3" style={{ width: "33%" }}>
                                    <label className="form-label">Status</label>
                                    <Radio.Group
                                        id="status"
                                        name="status"
                                        style={{ height: "33%", width: "100%" }}
                                        // onChange={(e) => {
                                        //   handleRoleChange(e);
                                        // }}
                                        value={staffProfile[0].status}
                                        buttonStyle="solid"
                                        disabled
                                    >
                                        {staffProfile[0].status === true &&
                                            <Radio
                                                style={{
                                                    width: "52%",
                                                    color: "green",
                                                }}
                                                value={true}
                                            >
                                                OnWorking
                                            </Radio>
                                        }
                                        {staffProfile[0].status === false &&
                                            <Radio
                                                style={{
                                                    width: "40%",
                                                    color: "red"
                                                }}
                                                value={false}
                                            >
                                                Out Job
                                            </Radio>
                                        }
                                    </Radio.Group>
                                </div>
                                <div className="mb-3" style={{ width: "33%" }}>
                                    <div>
                                        <label className="form-label">Gender</label>
                                        <br />
                                        <Radio.Group
                                            id="sex"
                                            name="sex"
                                            style={{ height: "33%", width: "100%" }}
                                            value={staffProfile[0].sex}
                                            buttonStyle="solid"
                                            disabled
                                        >
                                            {staffProfile[0].sex === true &&
                                                <Radio
                                                    style={{
                                                        width: "40%",
                                                        color: "#2196F3",
                                                    }}
                                                    value={true}
                                                >
                                                    Male
                                                </Radio>
                                            }
                                            {staffProfile[0].sex === false &&
                                                <Radio
                                                    style={{
                                                        width: "40%",
                                                        color: "#FF1744",
                                                    }}
                                                    value={false}
                                                >
                                                    Female
                                                </Radio>
                                            }
                                        </Radio.Group>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="mb-3" style={{ width: "33%" }}>
                                    <label className="form-label">Start Date</label>
                                    <br />
                                    <Form.Control
                                        type="date"
                                        id="startTrainDate"
                                        placeholder="address"
                                        aria-describedby="inputGroupPrepend"
                                        disabled
                                        name="startTrainDate"
                                        value={staffProfile[0].startDate.slice(0, 10)}
                                    // onBlur={formik.handleBlur}
                                    />
                                </div>
                                <div className="mb-3" style={{ width: "33%" }}>
                                    <div>
                                        <label className="form-label">End Date</label>
                                        <br />
                                        <Form.Control
                                            type="date"
                                            name="entryCageDate"
                                            value={endDate}
                                            disabled
                                        />
                                    </div>
                                </div>


                                <div className="mb-3" style={{ width: "33%" }}>
                                    <label className="form-label">Phone</label>
                                    <Form.Control
                                        type="string"
                                        id="cageId"
                                        disabled
                                        placeholder="phone"
                                        aria-describedby="inputGroupPrepend"
                                        name="cageId"
                                        value={staffProfile[0].phone}
                                        onChange={(event) => setCageID(event.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="btn-footer">

                            </div>
                        </div>
                        <div>
                            <Space wrap size={100}>
                                <Avatar shape="square" size={200} icon={<svg width="200px" height="200px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 789.333333l-106.666667-128v-128h213.333334v128z" fill="#FF9800" /><path d="M704 405.333333m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z" fill="#FFA726" /><path d="M320 405.333333m-42.666667 0a42.666667 42.666667 0 1 0 85.333334 0 42.666667 42.666667 0 1 0-85.333334 0Z" fill="#FFA726" /><path d="M704 277.333333c0-162.133333-384-106.666667-384 0v149.333334c0 106.666667 85.333333 192 192 192s192-85.333333 192-192v-149.333334z" fill="#FFB74D" /><path d="M512 85.333333c-130.133333 0-213.333333 104.533333-213.333333 234.666667v49.066667l42.666666 36.266666v-106.666666l256-85.333334 85.333334 85.333334v106.666666l42.666666-36.266666V320c0-85.333333-21.333333-170.666667-128-192l-21.333333-42.666667h-64z" fill="#FF5722" /><path d="M597.333333 405.333333m-21.333333 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z" fill="#784719" /><path d="M426.666667 405.333333m-21.333334 0a21.333333 21.333333 0 1 0 42.666667 0 21.333333 21.333333 0 1 0-42.666667 0Z" fill="#784719" /><path d="M618.666667 661.333333l-106.666667 21.333334-106.666667-21.333334S170.666667 704 170.666667 938.666667h682.666666c0-234.666667-234.666667-277.333333-234.666666-277.333334z" fill="#CFD8DC" /><path d="M490.666667 746.666667l-21.333334 192h85.333334l-21.333334-192 21.333334-21.333334-42.666667-42.666666-42.666667 42.666666z" fill="#3F51B5" /></svg>} />
                            </Space>
                        </div>
                    </div>
                </Form>
            }
        </div >
    );
}

export default ViewStaff;
