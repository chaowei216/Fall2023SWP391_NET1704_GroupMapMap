import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useShopping from '../../hooks/useShopping';
import {GrFormAdd, GrFormSubtract} from 'react-icons/gr'

function ListItem() {

   const { shoppingCart, handleUpdateItemQuantity } = useShopping();

    
  const calculateProductTotal = (product) => {
    return product.price * product.quantity;
  };
  console.log(shoppingCart);
  // Hàm tính tổng giá tiền của giỏ hàng
  const calculateCartTotal = () => {
    return shoppingCart.reduce((total, product) => {
      return total + calculateProductTotal(product);
    }, 0);
  };

  
  const Store = (cartData) => {
    // Chuyển dữ liệu giỏ hàng thành chuỗi JSON
    const cartDataJSON = JSON.stringify(cartData);
    // if(localStorage.getItem("shoppingCart")
    // Lưu vào localStorage
    localStorage.setItem('shoppingCart', cartDataJSON);
  };
  // useEffect(() => {
  //   // Lấy dữ liệu từ localStorage và cập nhật state khi thành phần được tạo
  //   const shoppingCartData = localStorage.getItem('shoppingCart');
  //   if (shoppingCartData) {
  //     const parsedCart = JSON.parse(shoppingCartData);
  //     setShoppingCart(parsedCart);
  //   }
  // }, []); // Chạy chỉ một lần khi thành phần được tạo  
  // Hàm để tăng số lượng sản phẩm
  const handleIncrease = (productId) => {
   
    // Tìm sản phẩm có productId trong giỏ hàng
    const productToUpdate = shoppingCart.find((product) => product.id === productId);

    if (productToUpdate) {
      // Tăng số lượng sản phẩm lên 1
      const newQuantity = productToUpdate.quantity + 1;
      // Gọi hàm handleUpdateItemQuantity để cập nhật số lượng
      handleUpdateItemQuantity(productId, newQuantity);
    }
  };

  // Hàm để giảm số lượng sản phẩm
  const handleDecrease = (productId) => {
  
    // Tìm sản phẩm có productId trong giỏ hàng
    const productToUpdate = shoppingCart.find((product) => product.id === productId);

    if (productToUpdate && productToUpdate.quantity > 1) {
      // Giảm số lượng sản phẩm đi 1 (nếu số lượng lớn hơn 1)
      const newQuantity = productToUpdate.quantity - 1;
      // Gọi hàm handleUpdateItemQuantity để cập nhật số lượng
      handleUpdateItemQuantity(productId, newQuantity);
    }
  };
  const updateDay=(day)=>{
    handleUpdateDay(day);



  }

  return (
    

    <div>

     
      <section className="gap">
        <div className="container">
          <form className="woocommerce-cart-form">
            <div style={{ overflowX: 'auto', overflowY: 'hidden' }}>
              <table className="shop_table table-responsive">
                <thead>
                  <tr>
                    <th className="product-name">Product</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-subtotal">Price</th>
                    <th className="product-day">Day</th>
                  </tr>
                </thead>
                <tbody>
                  {shoppingCart.map((product) => (
                    <tr key={product.id}>
                      <td className="product-name">
                        <div>
                          <a style={{textDecoration:"none",color:"red"}} href="#">{product.name}</a>
                          <span>{product.description}</span>
                        </div>
                      </td>
                      <td className="product-quantity">
                        <GrFormSubtract style={{cursor: "pointer", fontSize: "22px", marginBottom: "7px"}} onClick={(e) => {  handleDecrease(product.id) }}></GrFormSubtract>
                        <span style={{fontSize: "22px"}}>{product.quantity}</span>
                        <GrFormAdd style={{cursor: "pointer", fontSize: "22px", marginBottom: "7px"}} onClick={(e) => {  handleIncrease(product.id) }}></GrFormAdd>
                      </td>
                     
                      <td className="product-subtotal">
                        <span className="woocommerce-Price-amount">
                          <bdi>
                            {product.price.toFixed(2)}
                          </bdi>
                        </span>
                      </td>
                      <td className="product-day">
                        <input type="date"  onChange={(e)=>{handleUpdateDay(e.target.value)}}/>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="coupon">
                    <td colSpan="3">
                      <div className="d-flex align-items-center justify-content-between">
                        <button
                          type="submit"
                          name="apply_coupon"
                          className="apply-coupon"
                          value="Apply coupon"
                        >
                          Apply coupon
                        </button>
                        <button
                          type="submit"
                          name="update_cart"
                          className="update-cart"
                          value="Delete Cart"
                          // onClick={handleDeleteCart}
                          disabled=""
                          aria-disabled="true"
                        >
                          Delete Cart
                        </button>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="coupon-area">
                  <h3>Apply Coupon</h3>
                  <div className="coupon">
                    <input
                      type="text"
                      name="coupon_code"
                      className="input-text"
                      placeholder="Coupon Code"
                    />
                    <button type="submit" name="apply_coupon">
                      <span>Apply coupon</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="cart_totals">
                  <h4>Cart Totals</h4>
                  <div className="shop_table-boder">
                    <table className="shop_table_responsive">
                      <tbody>
                        <tr className="cart-subtotal">
                          <th>Sub total:</th>
                          <td>
                            <span className="woocommerce-Price-amount">
                              <bdi>
                                {shoppingCart.reduce((total, product) => total + calculateProductTotal(product), 0).toFixed(2)}
                              </bdi>
                            </span>
                          </td>
                        </tr>
                        <tr className="Total">
                          <th>Total:</th>
                          <td>
                            <span className="woocommerce-Price-amount">
                              <bdi>
                                {calculateCartTotal().toFixed(2)}
                              </bdi>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="wc-proceed-to-checkout">
                    <Link to="/checkout" className="button" onClick={Store(shoppingCart)}>
                    <span>Proceed to checkout</span>
                    </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ListItem;
