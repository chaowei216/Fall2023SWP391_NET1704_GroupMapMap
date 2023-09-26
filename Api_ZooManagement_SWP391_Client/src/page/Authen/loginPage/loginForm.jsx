import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [loadingApi, setLoadingApi] = useState(false);
  const [error,setError]=useState("");
    
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoadingApi(true);
      const res = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });

      if (res && res.status === 200) {
        // Xử lý dữ liệu phản hồi ở đây nếu cần
        const { token } = res.data;
        setToken(token);
        localStorage.setItem("token", token);

        // Đoạn mã xử lý sau khi đăng nhập thành công
        // Ví dụ: chuyển hướng đến trang chính của ứng dụng
        // window.location.href = '/dashboard';
      } else {
        if (res && res.status === 400) {
          // Hiển thị thông báo toast với thông báo lỗi từ dữ liệu phản hồi
          setError(res.data.error);
          
        } 
      }
    } catch (error) {
      // Xử lý lỗi nếu có
     
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
