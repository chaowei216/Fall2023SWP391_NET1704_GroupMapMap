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

export default function ViewNews(pros) {
  const [staticModal, setStaticModal] = useState(false);
  const { show, handleClose, dataNewsView } = pros;

  const [newsID, setNewsID] = useState("");
  const [newsTitle, setNewsTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [releaseDay, setReleaseDay] = useState("");
  const [newsImage, setNewsImage] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (show) {
      setNewsID(dataNewsView.newsId);
      setNewsTitle(dataNewsView.newsTitle);
      setContent(dataNewsView.newsContent);
      setAuthorName(dataNewsView.authorName);
      setNewsImage(dataNewsView.newsImage);
      setReleaseDay(dataNewsView.releaseDate.slice(0, 10));
      setStatus(dataNewsView.status);
    }
  }, [dataNewsView]);
  const handleSave = () => {
    console.log("haha");
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
                  <p className="fw-bold fs-2">View News</p>
                </div>
                <Form noValidate>
                  <div className="form-content">
                    <div className="form">
                      <div className="mb-3">
                        <label className="form-label">ID</label>
                        <Form.Control
                          type="text"
                          style={{ height: "56px", backgroundColor: "none" }}
                          id="fName"
                          placeholder="fName"
                          aria-describedby="inputGroupPrepend"
                          name="fName"
                          value={newsID}
                          disabled
                        //   isInvalid={
                        //     formik.errors.fName && formik.touched.fName
                        //   }
                        />
                        {/* <Form.Control.Feedback type="invalid">
                          {formik.errors.fName}
                        </Form.Control.Feedback> */}
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Title</label>
                        <Form.Control
                          type="text"
                          style={{ height: "56px" }}
                          id="category"
                          placeholder="category"
                          aria-describedby="inputGroupPrepend"
                          name="category"
                          disabled
                          value={newsTitle}
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
                        <label className="form-label">Content</label>
                        <Form.Control
                          type="text"
                          id="content"
                          placeholder="content"
                          aria-describedby="inputGroupPrepend"
                          name="content"
                          disabled
                          style={{ height: "56px" }}
                          value={content}
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
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <Form.Control
                          type="text"
                          id="content"
                          placeholder="content"
                          aria-describedby="inputGroupPrepend"
                          name="content"
                          disabled
                          style={{ height: "56px" }}
                          value={status}
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
                          <div>
                            <label className="form-label">Release Date</label>
                            <br />
                            <Space
                              direction="vertical"
                              size={20}
                              style={{ width: "40%" }}
                            >
                              <Form.Control
                                type="date"
                                id="importDate"
                                name="importDate"
                                disabled
                                value={releaseDay}
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
