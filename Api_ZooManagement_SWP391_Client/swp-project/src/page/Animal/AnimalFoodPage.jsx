import React, { useState } from "react";
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
import { Formik, Field, ErrorMessage } from "formik";
import { DatePicker, Radio, Select, Space } from "antd";
import { South } from "@mui/icons-material";
// import { schema } from "./validationFood";

export default function AddAnimalFood(pros) {
  const [staticModal, setStaticModal] = useState(false);

  const { show, handleClose } = pros;

  const handleSave = () => {
    // console.log(formik.errors);
    console.log("haha");
  };
  const submitForm = (values) => {
    console.log(values);
    //   const url1 =
    //   "https://localhost:44352/api/Animal?userId=Z0003&StartDate=2023-09-01&EndDate=2023-09-10&cageId=C0001&EntryDate=2023-09-19&OutDate=2023-09-28&foodId=F0001&Amount=4&speciesId=SA001";
    //   const request = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(animal),
    // };
    // // request.body = JSON.stringify(animal)
    // const response = await fetch(url1, request);
    // if (response.ok) {
    //   console.log("Success");
    // }
  };
  // Khai báo state để quản lý mảng foods
  const [foods, setFoods] = useState([
    {
      foodID: "",
      quantity: "",
    },
  ]);

  // Hàm xử lý khi click nút +
  const handleAdd = () => {
    // Tạo mảng mới bằng cách spread ra mảng cũ
    // Sau đó thêm phần tử mới vào cuối
    const newFoods = [...foods];

    newFoods.push(
        {
            foodID:"",
            quantity: ""
        });
    // Cập nhật lại state với mảng mới
    setFoods(newFoods);
    console.log(foods)
    formik.values.foods = foods;
  };
  const handleFoodIDChange = (e, index) => {
    const newFoods = [...foods];
    newFoods[index].foodID = e.target.value;
    setFoods(newFoods);
    console.log(foods);
  };

  // Hàm xử lý thay đổi quantity
  const handleQuantityChange = (e, index) => {
    const newFoods = [...foods];
    newFoods[index].quantity = e.target.value;
    setFoods(newFoods);
  };

  const formik = useFormik({
    initialValues: {
      animalId: "",
      foodId: "",
      quantity: "",
      foods: [],
    },
    // validationSchema: schema,
    onSubmit: (values) => {
      submitForm(values);
    },
  });
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
                  <p className="fw-bold fs-2">Add Animal Food</p>
                </div>
                <Form noValidate onSubmit={formik.handleSubmit}>
                  <div className="form-content">
                    <div className="form">
                      <div className="mb-3">
                        <label className="form-label">Enter Animal ID</label>
                        <Form.Control
                          type="text"
                          style={{ height: "56px" }}
                          id="animalId"
                          placeholder="animalId"
                          aria-describedby="inputGroupPrepend"
                          name="animalId"
                          value={formik.values.animalId}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          //   isInvalid={
                          //     formik.errors.fName && formik.touched.fName
                          //   }
                        />
                        {/* <Form.Control.Feedback type="invalid">
                          {formik.errors.fName}
                        </Form.Control.Feedback> */}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Enter Food ID</label>
                        <Form.Control
                          type="text"
                          style={{ height: "56px" }}
                          id="foodId"
                          placeholder="foodId"
                          aria-describedby="inputGroupPrepend"
                          name="foodId"
                          value={formik.values.foodId}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
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
                          value={formik.values.quantity}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          //   isInvalid={
                          //     formik.errors.quantity && formik.touched.quantity
                          //   }
                        />
                        {/* <Form.Control.Feedback type="invalid">
                          {formik.errors.quantity}
                        </Form.Control.Feedback> */}
                      </div>
                      <div className="mb-3">
                        {/* Lặp qua mảng foods và render từng phần tử */}
                        {foods.map((food, index) => (
                          <div key={index}>
                            <input
                              type="text"
                              value={food.foodID}
                              onChange={(e) => handleFoodIDChange(e, index)}
                            />
                            <input
                              type="number"
                              value={food.quantity}
                              onChange={(e) => handleQuantityChange(e, index)}
                            />
                          </div>
                        ))}

                        <button onClick={handleAdd}>+</button>
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
                          Create Food
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
