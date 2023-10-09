import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate,useLocation, Navigate } from 'react-router-dom';
import useShopping from '../../../hooks/useShopping';



function LoginForm() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [loadingApi, setLoadingApi] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
// useEffect(()=>{
//   let token =localStorage.getItem("token");
//   if (token) {
  
//   }
// })
const {shoppingCart}=useShopping();
   {console.log("discover",shoppingCart)}
function setItemToLocalStorage(key, value) {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(key, value);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoadingApi(true);
      const res = await axios.post('https://localhost:44352/api/Login/login', {
        email,
        password,
      });

      if (res && res.status === 200) {
        const tokens = res.data;
        await setItemToLocalStorage('token', tokens.token)
        const userResponse = await axios.get('https://reqres.in/api/users/2', {
          headers: {
            Authorization: `Bearer ${tokens.token}`,
          },
        });

        // Xử lý dữ liệu người dùng ở đây (userResponse.data).
        console.log('Thông tin người dùng:', userResponse.data);
        await setItemToLocalStorage("dataUser", JSON.stringify(userResponse.data));
        setTimeout(() => {
          navigate('/staff');
        }, 2000);
      } else if (res && res.status === 400) {
        setError(res.data.error);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoadingApi(false);
    }
  };

  return (
    <div>
      <section className="gap">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-center">
              <div className="box login">
                <h3>Log In Your Account</h3>
                <form onSubmit={handleLogin}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Username or email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="remember">
                    <div className="first">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                      <label htmlFor="checkbox">Remember me</label>
                    </div>
                    <div className="second">
                      <a href="">Forget a Password?</a>
                    </div>
                  </div>
                  <button type="submit" className="button">
                    {loadingApi && <i className="fas fa-sync fa-spin"></i>}
                    &nbsp;
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default LoginForm;
