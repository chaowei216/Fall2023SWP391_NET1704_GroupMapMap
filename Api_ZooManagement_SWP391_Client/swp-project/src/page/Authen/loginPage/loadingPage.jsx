import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function LoadingPage() {
  const { success, PaymentMethod, OrderDescription, OrderId, PaymentId, TransactionId, Token, VnPayResponseCode } = useParams();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(100);
  const apiUrl1 = "https://api.example.com/endpoint1";
  const apiUrl2 = "https://api.example.com/endpoint2";
  let status = "thất bại"; 

  if (success === "true") {
    status = "thành công";

    const data = {
      Success: success,
      PaymentMethod: PaymentMethod,
      OrderDescription: OrderDescription,
      OrderId: OrderId,
      PaymentId: PaymentId,
      TransactionId: TransactionId,
      Token: Token,
      VnPayResponseCode: VnPayResponseCode
    };

    axios.post(apiUrl1, data)
      .then(response1 => {
        console.log("Response from API 1:", response1.data);
        return axios.post(apiUrl2, data);
      })
      .then(response2 => {
        console.log("Response from API 2:", response2.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    const countdownTimer = setTimeout(() => {
      navigate("/");
    }, countdown * 1000);

    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearTimeout(countdownTimer);
      clearInterval(countdownInterval);
    };
  }, [navigate, countdown]);
  return (
    <div>
      <div className="status-payment">
        <p style={{ textAlign: "center",color:"red" }}>thanh toán {status}</p>
      </div>
      <div className="title-icon-loading">
        <p style={{ textAlign: "center" }}>Chuyển trang sau {countdown} giây...</p>
      </div>
      <div className="spinner">
        <div className="blob blob-0"></div>
      </div>
    </div>
  )
}

export default LoadingPage;
