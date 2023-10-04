import React from 'react'
import Footer from '../footer'
import Header from '../header'

function Checkout() {
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
                    <form className="checkout-meta donate-page">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="pb-3">Billing details</h3>
                                <div className="col-lg-12">
                                    <input type="text" className="input-text " name="billing_name" placeholder="Complete Name" />
                                    <input type="email" className="input-text " name="billing_email" placeholder="Email address" />
                                    <select name="billing_country" className="nice-select Advice country_to_state">
                                        <option>Country</option>
                                        <option>Select Topic 1</option>
                                        <option>Select Topic 2</option>
                                        <option>Select Topic 3</option>
                                        <option>Select Topic 4</option>
                                    </select>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <select name="billing_country" className="nice-select Advice city">
                                                <option>City</option>
                                                <option>Select Topic 1</option>
                                                <option>Select Topic 2</option>
                                                <option>Select Topic 3</option>
                                                <option>Select Topic 4</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6">
                                            <select name="billing_country" className="nice-select Advice state province">
                                                <option>State / Province</option>
                                                <option>Select Topic 1</option>
                                                <option>Select Topic 2</option>
                                                <option>Select Topic 3</option>
                                                <option>Select Topic 4</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" name="Postal_Code" placeholder="Postal Code" />
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="tel" className="input-text " name="billing_phone" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <input type="text" name="Address" placeholder="Address" />
                                    <div className="ship-address">
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
                                    </div>
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