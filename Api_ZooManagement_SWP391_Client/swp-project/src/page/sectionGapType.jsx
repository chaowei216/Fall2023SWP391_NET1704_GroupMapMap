import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import useShopping from '../hooks/useShopping';
import shoppingCart from '../redux/slices/shoppingCart';

function SectionGapType() {
  const [dataList, setDataList] = useState([]);
  const {handleAddItem}=useShopping();
  const {shoppingCart} =useShopping();
  const onSubmit =(item)=>{
      handleAddItem(item);
    
     
  }
  const itemExistsInCart = (item) => {
    return shoppingCart.some((cartItem) => cartItem.id === item.ticketId);
  };

  useEffect(() => {
    // Gọi API và lấy dữ liệu
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:44352/api/Ticket'); // Thay 'URL_CUA_API' bằng URL thực tế của API
        const data = response.data; // Lấy danh sách dữ liệu từ phản hồi API
        setDataList(data); // Lưu danh sách dữ liệu vào state
        console.log("api: " + response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
   
   <div>
      {console.log("shoping cart",shoppingCart)}
      <section className="gap">
   <div className="container">
      <div className="row">
      {dataList.map((item, index) => (
  <div key={index} className="col-sm-4 mb-4">
    <div className="bbq" style={{ backgroundImage: `url(https://via.placeholder.com/630x366)` }}>
      <h2>{item.type}</h2>
      <p>{item.price}</p>
      <div className="bbr-price">
        <div>
         
          
        </div>
        {itemExistsInCart(item) ? (
                        <span  style={{ marginRight: '25px', color: 'red' }} size="large">Exists in cart</span>
                      ) : (
                        <Button onClick={() => onSubmit(item)} style={{ marginRight: '25px', color: 'blue' }} size="large">Buy</Button>
                      )}
      </div>
    
    </div>
    
  </div>
))}

        
       
      </div>
   </div>
</section>
      </div>
  );
}

export default SectionGapType;
