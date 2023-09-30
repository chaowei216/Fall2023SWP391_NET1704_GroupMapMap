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
    
     console.log(shoppingCart);
  }

  useEffect(() => {
    // Gọi API và lấy dữ liệu
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/unknown'); // Thay 'URL_CUA_API' bằng URL thực tế của API
        const data = response.data.data; // Lấy danh sách dữ liệu từ phản hồi API
        setDataList(data); // Lưu danh sách dữ liệu vào state
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
   <div>
      
      <section className="gap">
   <div className="container">
      <div className="row">
      {dataList.map((item, index) => (
  <div key={index} className="col-sm-4 mb-4">
    <div className="bbq" style={{ backgroundImage: `url(https://via.placeholder.com/630x366)` }}>
      <h2>{item.name}</h2>
      <p>canonical classNameics to obscure<br/> tiki drinks</p>
      <div className="bbr-price">
        <div>
         
          
        </div>  <Button onClick={()=>onSubmit(item)}  style ={{marginRight:'25px',color:"blue"}}size="large">Buy</Button>
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
