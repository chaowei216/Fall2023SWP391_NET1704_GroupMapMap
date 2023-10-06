import React,{useState} from 'react'
import Footer from '../footer'
import Header from '../header'

function Checkout() {
const cartDataJSON = localStorage.getItem('shoppingCart');
const shoppingCart = JSON.parse(cartDataJSON);
const totalPrice = shoppingCart.reduce((total, product) => {
    
    const productTotal = product.price * product.quantity;
  
    
    return total + productTotal;
  }, 0);
  // tách object
//   const newObject = {
//     shoppingCart: shoppingCart.map((product) => {
//       return {
//         id: product.id,
//         name: product.name
//       };
//     })
//   };
  
//   setFormData({
//     ...formData,
//     tickets: newObject
//   });
  
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        totalPrice:totalPrice,
        tickets:{shoppingCart},
        payment_method: '', // To store the selected payment method
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      console.log(formData.totalPrice);
      console.log(formData.tickets);

    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted');
        // Here, you can make an HTTP request to send the formData to your API
        try {
          const response = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            const responseData = await response.json();
            console.log('API Response Data:', responseData);
          } else {
            // Handle errors, e.g., display an error message
          }
        } catch (error) {
          // Handle network errors
        }
      };
    return (
        <div>
            <Header />
            <section className="banner" style={{ backgroundImage: 'url(https://via.placeholder.com/1920x470)' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="title-area-data">
                                <h2>Cart Checkout</h2>
                                <p>A magical combination that sent aromas to the taste buds</p>
                            </div>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="index.html"><i className="fa-solid fa-house"></i> Home</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Shop Cart</li>
                                <li className="breadcrumb-item active" aria-current="page">Cart Checkout</li>
                            </ol>
                        </div>
                        <div className="col-lg-5">
                            <div className="row">
                                <div className="col-6">
                                    <div className="title-area-img">
                                        <img alt="title-area-img" src="https://via.placeholder.com/230x376" />
                                        <img alt="pata" className="pata" src="../../src/assets/img/pata.png" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="title-area-img two">
                                        <img alt="title-area-img" src="https://via.placeholder.com/230x376" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gap">
                <div className="container">
                    <form className="checkout-meta donate-page" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="pb-3">Billing details</h3>
                                <div className="col-lg-12">
                                    <input type="text" className="input-text " name="fullName" placeholder="Complete Name"  onChange={handleChange} />
                                    <input type="email" className="input-text " name="email" placeholder="Email address" />
                                    
                                    <div className="row">
                                        
                                        
                                        <div className="col-lg-6">
                                            <input type="tel" className="input-text " name="phoneNumber" placeholder="Phone"  onChange={handleChange} />
                                        </div>
                                    </div>
                                    <input type="text" name="Address" placeholder="Address" />
                                    {/* <div className="ship-address">
                                        <div className="d-flex">
                                            <input type="radio" id="Create" name="Create" value="Create" />
                                            <label htmlFor="Create">
                                                Create an account for later use
                                            </label>
                                        </div>
                                        <div className="d-flex">
                                            <input type="radio" id="ShipAddress" name="Create" value="ShipAddress" />
                                            <label htmlFor="ShipAddress">
                                                Ship to same Address
                                            </label>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="woocommerce-additional-fields">
                                    <textarea name="order_comments" className="input-text " placeholder="Order Note"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="cart_totals-checkout" style={{ backgroundImage: 'url(../../src/assets/img/patron.jpg)' }}>
                                    <div className="cart_totals cart-Total">
                                        <h4>Cart Total</h4>
                                        <table className="shop_table_responsive">
                                            <tbody>
                                                <tr className="cart-subtotal">
                                                    <th>Subtotal:</th>
                                                    <td>
                                                        <span className="woocommerce-Price-amount">
                                                            <bdi>
                                                                <span className="woocommerce-Price-currencySymbol">$</span>358.00
                                                            </bdi>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr className="Shipping">
                                                    <th>Shipping:</th>
                                                    <td>
                                                        <span className="woocommerce-Price-amount amount">
                                                            free
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr className="Total">
                                                    <th>Total:</th>
                                                    <td>
                                                        <span className="woocommerce-Price-amount">
                                                            <bdi>
                                                                <span>$</span>358.00
                                                            </bdi>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="checkout-side">
                                        <h3>Payment Method</h3>
                                        <ul>
                                            <li>
                                                <input type="radio" id="Bank_Payment" name="Bank_Payment" value="Bank_Payment" />
                                                <label htmlFor="Bank_Payment">
                                                    Bank Payment
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="Check_Payment" name="Bank_Payment" value="Check_Payment" />
                                                <label htmlFor="Check_Payment">
                                                    Check Payment
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="PayPal" name="Bank_Payment" value="Check_Payment" />
                                                <label htmlFor="PayPal">
                                                    PayPal
                                                </label>
                                            </li>
                                            <li>
                                                <input type="radio" id="Cash on Delivery" name="Bank_Payment" value="Check_Payment" />
                                                <label htmlFor="Cash on Delivery">
                                                    Cash on Delivery
                                                </label>
                                            </li>
                                        </ul>
                                        <button type="submit" className="button"><span>Place Order</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Checkout