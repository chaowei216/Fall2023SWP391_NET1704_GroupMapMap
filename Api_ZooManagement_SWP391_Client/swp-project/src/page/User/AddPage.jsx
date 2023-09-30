import React, { useState, useEffect } from "react";
import "../../assets/css/dashboard.css";
import Password from "antd/es/input/Password";
import { Button, DatePicker, Radio, Select, Space } from "antd";
const { RangePicker } = DatePicker;
import { MDBCollapse, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useFormik } from "formik";
import FormList from "antd/es/form/FormList";
const onChange = (value, dateString) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
};
const onOk = (value) => {
  console.log("onOk: ", value);
};

function AddPage() {
  const [role, setRole] = useState("");
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "123456",
      startDate: "",
      endDate: "",
      phone: "",
      address: "",
      company: "",
      startDateEx: "",
      endDateEx: "",
      sex: [],
      role: "None",
    },
  });
  const [Password, setPassword] = useState("123456");
  const [Show, setShow] = useState(false);
  const toggleShow = () => setShow(!Show);
  const [Job, setJob] = useState("");

  console.log(formik.values.role);
  return (
    <div className="form-container">
      <form>
        <div className="form-header">
          <p className="fw-bold fs-2">Create New User</p>
        </div>
        <div className="form-content">
          <div className="form">
            <div className="row mb-3">
              <div className="mb-3 row-content">
                <label className="form-label">Enter FirstName</label>
                <input
                  type="text"
                  className="form-control"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  id="first_name"
                />
              </div>
              <div className="mb-3 row-content">
                <label className="form-label">Enter LastName</label>
                <input
                  type="text"
                  className="form-control"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  id="last_name"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="mb-3 row-content">
                <label className="form-label">Enter Email</label>
                <input
                  type="text"
                  className="form-control"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  id="email"
                />
              </div>
              <div className="mb-3 row-content">
                <label className="form-label">Enter Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  id="password"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="mb-3 row-content">
                <label className="form-label">Enter Phone</label>
                <input
                  type="text"
                  className="form-control"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  id="phone"
                />
              </div>
              <div className="mb-3 row-content">
                <label className="form-label">Choose Sex</label>
                <br />
                <Radio.Group
                  id="sex"
                  onChange={formik.handleChange}
                  defaultValue="a"
                  buttonStyle="solid"
                >
                  <Radio.Button value="male">Male</Radio.Button>
                  <Radio.Button value="female">Female</Radio.Button>
                  <Radio.Button value="other">Other</Radio.Button>
                </Radio.Group>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Enter PhoneNumber</label>
              <input
                type="number"
                className="form-control"
                value={Job}
                onChange={(event) => {
                  setJob(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Enter Address</label>
              <input
                type="password"
                className="form-control"
                value={Job}
                onChange={(event) => {
                  setJob(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Enter StartDate And EndDate</label>
              <br />
              <Space direction="vertical" size={20}>
                <DatePicker showTime onChange={onChange} onOk={onOk} />
                <RangePicker
                  format="YYYY-MM-DD"
                  onChange={onChange}
                  onOk={onOk}
                />
              </Space>
            </div>
            <div className="mb-3">
              {/* <Button
                style={{ background: "blue" }}
                variant="contained"
                tag="a"
                onClick={toggleShow}
              >
                <MDBIcon fas icon="plus" />
              </Button> */}
              <Space wrap>
                <Select
                  //   defaultValue="None"
                  style={{ width: 120 }}
                  id="role"
                  name="role"
                  onBlur={formik.handleBlur}
                  value={formik.values.role}
                  onChange={(e) => {
                    toggleShow();
                    setRole(e.target.value);
                  }}
                //   options={[
                //     { value: "None", label: "None" },
                //     { value: "Staff", label: "Staff" },
                //     { value: "ZooTrainer", label: "ZooTrainer" },
                //   ]}
                >
                  <option value="ZooTrainer">ZooTrainer</option>　
                </Select>
              </Space>
              <MDBCollapse show={Show}>
                <div className="row mb-3 mt-3">
                  <div className="mb-3 row-content">
                    <label className="form-label">Enter Company</label>
                    <input
                      type="text"
                      className="form-control"
                      value={formik.values.company}
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div className="mb-3 row-content">
                    <label className="form-label">
                      Enter StartDate And EndDate
                    </label>
                    <br />
                    <Space direction="vertical" size={20}>
                      <RangePicker
                        format="YYYY-MM-DD"
                        onChange={onChange}
                        onOk={onOk}
                      />
                    </Space>
                  </div>
                </div>
              </MDBCollapse>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPage;
