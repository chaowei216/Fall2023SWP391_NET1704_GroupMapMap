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
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";
import { ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import { DatePicker, Radio, Select, Space } from "antd";
import { South } from "@mui/icons-material";
import { schema } from "./validationFood";

export default function EditFood(pros) {
  const [staticModal, setStaticModal] = useState(false);
  const { show, handleClose, dataFoodEdit } = pros;

  const [foodId, setFoodId] = useState("");
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [importDate, setImportDate] = useState("");
  const [expiredDate, setExpiredDate] = useState("");
  const [category, setCategory] = useState("");
  const [animalFood, setAnimalFood] = useState("");

  useEffect(() => {
    if (show) {
      setFoodId(dataFoodEdit.foodId);
      setFoodName(dataFoodEdit.fName);
      setQuantity(dataFoodEdit.quantity);
      setImportDate(dataFoodEdit.importDate.slice(0, 10));
      setExpiredDate(dataFoodEdit.expiredDate.slice(0, 10));
      setCategory(dataFoodEdit.category);
      setAnimalFood(dataFoodEdit.animalFood);
    }
  }, [dataFoodEdit]);

  const handleSave = () => {
    console.log("haha");
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const food = {
        foodId: foodId,
        fName: foodName,
        quantity: quantity,
        importDate: importDate,
        expiredDate: expiredDate,
        category: category
    }
    console.log(food);
    const response = await fetch(`https://localhost:44352/api/Food/${foodId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    });
    if (response.ok) {
      console.log("Success");
      // localStorage.setItem("isAdded", true);
      // handleClose()
      window.location.href = '/staff/3'
      // navigate("/staff/1")
    }
  };
  return (
    <>
      <MDBModal staticBackdrop tabIndex="-1" show={show} onHide={handleClose}>
        <MDBModalDialog size="lg">
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
                  <p className="fw-bold fs-2">Edit food</p>
                </div>
                <Form noValidate onSubmit={handleFormSubmit}>
                  <div className="form-content">
                    <div className="form">
                      <div className="mb-3">
                        <label className="form-label">Enter Food Name</label>
                        <Form.Control
                          type="text"
                          style={{ height: "56px" }}
                          disabled
                          id="fName"
                          placeholder="fName"
                          aria-describedby="inputGroupPrepend"
                          name="fName"
                          value={foodName}
                          onChange={(e) => setFoodName(e.target.value)}
                          //   isInvalid={
                          //     formik.errors.fName && formik.touched.fName
                          //   }
                        />
                        {/* <Form.Control.Feedback type="invalid">
                          {formik.errors.fName}
                        </Form.Control.Feedback> */}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Enter Category</label>
                        <Form.Control
                          type="text"
                          style={{ height: "56px" }}
                          id="category"
                          disabled  
                          placeholder="category"
                          aria-describedby="inputGroupPrepend"
                          name="category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          // onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          //   isInvalid={
                          //     formik.errors.category && formik.touched.category
                          //   }
                        />
                        {/* <Form.Control.Feedback type="invalid">
                          {formik.errors.category}
                        </Form.Control.Feedback> */}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Enter The Quantity</label>
                        <Form.Control
                          type="Number"
                          id="quantity"
                          placeholder="quantity"
                          aria-describedby="inputGroupPrepend"
                          name="quantity"
                          style={{ height: "56px" }}
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          // onChange={formik.handleChange}
                          // onBlur={formik.handleBlur}
                          //   isInvalid={
                          //     formik.errors.quantity && formik.touched.quantity
                          //   }
                        />
                        {/* <Form.Control.Feedback type="invalid">
                          {formik.errors.quantity}
                        </Form.Control.Feedback> */}
                      </div>
                      <div className="row mb-5 mt-4">
                        <div className="mb-3" style={{ width: "50%" }}>
                          <div>
                            <label className="form-label">
                              Choose ImportDate
                            </label>
                            <br />
                            <Space
                              direction="vertical"
                              size={20}
                              style={{ width: "90%" }}
                            >
                              <Form.Control
                                type="date"
                                id="importDate"
                                name="importDate"
                                value={importDate}
                                onChange={(e) => setImportDate(e.target.value)}
                                // isInvalid={
                                //   formik.errors.importDate &&
                                //   formik.touched.importDate
                                // }
                              />
                            </Space>
                            {/* <Form.Control.Feedback type="invalid">
                              {formik.errors.quantity}
                            </Form.Control.Feedback> */}
                          </div>
                        </div>
                        <div className="mb-3" style={{ width: "50%" }}>
                          <label className="form-label">
                            Choose ExpiredDate
                          </label>
                          <br />
                          <Space
                            direction="vertical"
                            size={20}
                            style={{ width: "90%" }}
                          >
                            <Form.Control
                              type="date"
                              id="expiredDate"
                              name="expiredDate"
                              value={expiredDate}
                              onChange={(e) => setExpiredDate(e.target.value)}
                              //   isInvalid={
                              //     formik.errors.expiredDate &&
                              //     formik.touched.expiredDate
                              //   }
                            />
                          </Space>
                          {/* <Form.Control.Feedback type="invalid">
                            {formik.errors.expiredDate}
                          </Form.Control.Feedback> */}
                        </div>
                      </div>
                      <MDBModalFooter>
                        <Button
                          variant="secondary"
                          onClick={handleClose}
                          active
                          style={{
                            width: "80px",
                            marginRight: "20px",
                            background: "gainsboro",
                          }}
                        >
                          Close
                        </Button>
                        <Button
                          style={{ background: "blue", color: "white" }}
                          variant="primary"
                          type="submit"
                          onClick={() => {
                            handleSave();
                          }}
                          active
                        >
                          Edit Food
                        </Button>
                      </MDBModalFooter>
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
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
