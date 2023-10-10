import React, { useState } from "react";
import Footer from "../../footer";
import Header from "../../header";
import Banner from "../loginPage/banner";
import axios from "axios";
function Forget() {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Mật khẩu và xác nhận mật khẩu không khớp.");
      return;
    }

    try {
      const response = await axios.post(`https://localhost:44352/api/Login/reset-password?Token=${token}&Password=${password}&PasswordConfirmation=${confirmPassword}`)
      console.log("Reset password success:", response.data);
    } catch (error) {
      console.error("Reset password failed:", error);
    }
  };

  return (
    <div>
      <Header />
      <Banner name="FORGET PASSWORD" />
      <div>
        <section className="gap">
          <div className="container">
            <div className="row">
              <div className="d-flex justify-content-center">
                <div className="box login">
                  <h3>RESET PASSWORD</h3>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="token"
                      placeholder="Your token"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="New Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div style={{ color: "red" }}>{errorMessage}</div>
                    <button type="submit" className="button">
                      Reset
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Forget;
