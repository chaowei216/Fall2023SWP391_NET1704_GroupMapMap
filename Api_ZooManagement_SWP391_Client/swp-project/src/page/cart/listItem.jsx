import React, { useEffect, useState } from 'react';

function ListItem() {
  const [shoppingCart, setShoppingCart] = useState([]); // Sử dụng state để lưu trữ dữ liệu từ localStorage
  const handleDeleteCart = () => {
    // Xoá dữ liệu khỏi localStorage
    localStorage.removeItem('shoppingCart');

    // Cập nhật state giỏ hàng về mảng rỗng
    setShoppingCart([]);
  };
  useEffect(() => {
    // Lấy dữ liệu từ localStorage và cập nhật state khi thành phần được tạo
    const shoppingCartData = localStorage.getItem('shoppingCart');
    if (shoppingCartData) {
      const parsedCart = JSON.parse(shoppingCartData);
      setShoppingCart(parsedCart);
    }
  }, []); // Chạy chỉ một lần khi thành phần được tạo
  const handleQuantityChange = (productId, newQuantity) => {
    // Tìm sản phẩm cần cập nhật số lượng trong giỏ hàng
    const updatedCartCopy = [...updatedCart];
    const productToUpdate = updatedCartCopy.find((product) => product.id === productId);

    if (productToUpdate) {
      // Cập nhật số lượng sản phẩm trong bản sao của giỏ hàng
      productToUpdate.quantity = newQuantity;

      // Cập nhật state updatedCart
      setUpdatedCart(updatedCartCopy);

      // Cập nhật localStorage với updatedCart
      localStorage.setItem('shoppingCart', JSON.stringify(updatedCartCopy));
    }
  };
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
                    <th className="product-subtotal">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {shoppingCart.map((product) => (
                    <tr key={product.id}>
                      <td className="product-name">
                        <img alt="img" src={product.imageSrc} />
                        <div>
                          <a href="#">{product.name}</a>
                          <span>{product.description}</span>
                        </div>
                      </td>
                      <td className="product-quantity">
                        <input type="number" className="input-text" value="1" />
                      </td>
                      <td className="product-subtotal">
                        <span className="woocommerce-Price-amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">$</span>
                            {/* {product.price.toFixed(2)} */}
                          </bdi>
                        </span>
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
                          onClick={handleDeleteCart}
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
                                <span className="woocommerce-Price-currencySymbol">$</span>
                                {/* {shoppingCart.reduce((total, product) => total + product.price, 0).toFixed(2)} */}
                              </bdi>
                            </span>
                          </td>
                        </tr>
                        <tr className="Shipping">
                          <th>Shipping:</th>
                          <td>
                            <span className="woocommerce-Price-amount amount">free</span>
                          </td>
                        </tr>
                        <tr className="Total">
                          <th>Total:</th>
                          <td>
                            <span className="woocommerce-Price-amount">
                              <bdi>
                                <span>$</span>
                                {/* {shoppingCart.reduce((total, product) => total + product.price, 0).toFixed(2)} */}
                              </bdi>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="wc-proceed-to-checkout">
                    <a href="#" className="button">
                      <span>Proceed to checkout</span>
                    </a>
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
