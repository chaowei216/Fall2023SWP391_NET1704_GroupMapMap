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
import { DatePicker, Radio, Select, Space } from "antd";
import { South } from "@mui/icons-material";
import { schema } from "./validationFood";
import { useNavigate } from "react-router-dom";

export default function AddNews(pros) {
  const [staticModal, setStaticModal] = useState(false);
  const { show, handleClose } = pros;
  const navigate = useNavigate();
  const handleSave = () => {
    console.log(formik.errors);
    console.log("haha");
  };
  const submitForm = async (values) => {
    console.log(values);
    console.log(formik.errors);
    const food = {
      fName: values.fName,
      quantity: values.quantity,
      importDate: values.importDate,
      expiredDate: values.expiredDate,
      category: values.category,
    };
    // const url = "https://localhost:44352/api/Food";
    // const request = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(food),
    // };
    // const response = await fetch(url, request);
    // if (response.ok) {
    //   console.log("Success");
    //   navigate("/staff/3");
    //   window.location.reload();
    // }
  };
  const formik = useFormik({
    initialValues: {
      category: "",
      newsTitle: "",
      content: "",
      authorName: "",
      releaseDay: "",
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
                  <p className="fw-bold fs-2">Add News</p>
                </div>
                <Form noValidate onSubmit={formik.handleSubmit}>
                  <div className="form-content">
                    <div className="form">
                      <div className="mb-3">
                        <label className="form-label">Enter authorName</label>
                        <Form.Control
                          type="text"
                          style={{ height: "56px" }}
                          id="authorName"
                          placeholder="fName"
                          aria-describedby="inputGroupPrepend"
                          name="authorName"
                          value={formik.values.authorName}
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
                      <div className="mb-3"></div>
                      <div className="mb-3">
                        <label className="form-label">Enter Title of New</label>
                        <Form.Control
                          type="text"
                          style={{ height: "56px" }}
                          id="newsTitle"
                          placeholder="fName"
                          aria-describedby="inputGroupPrepend"
                          name="newsTitle"
                          value={formik.values.newsTitle}
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
                        <label className="form-label">Enter Category</label>
                        <Form.Control
                          type="text"
                          style={{ height: "56px" }}
                          id="category"
                          placeholder="category"
                          aria-describedby="inputGroupPrepend"
                          name="category"
                          value={formik.values.category}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
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
                        <label className="form-label">Enter Content</label>
                        <Form.Control
                          type="text"
                          id="content"
                          placeholder="content"
                          aria-describedby="inputGroupPrepend"
                          name="content"
                          style={{ height: "56px" }}
                          value={formik.values.content}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
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
                        <div className="mb-3">
                          <label className="form-label">
                            Choose ReleaseDate
                          </label>
                          <br />
                          <Form.Control
                            type="date"
                            id="releaseDay"
                            name="releaseDay"
                            value={formik.values.releaseDay}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            // isInvalid={
                            //   formik.errors.expiredDate &&
                            //   formik.touched.expiredDate
                            // }
                          />
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
