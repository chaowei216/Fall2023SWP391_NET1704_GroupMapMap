import axios from 'axios';
import React,{useState} from 'react'

function Info() {
    const [formData, setFormData] = useState({
        complete_name: '',
        email_address: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit= async()=>{
        e.preventDefault();
        try{
        const res = await axios.post("",)
        console.log(res);
        }catch(error){
            console.log(error);

        }
    }
    console.log(formData);
    return (
        <div>
            <section className="gap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="get-in-touch">
                                <h2>Get in Touch</h2>
                                <ul className="booking">
                                    <li className="contact">
                                        <i>
                                            <svg height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_16-Smartphone" data-name="16-Smartphone"><path d="m23 2h-14a3 3 0 0 0 -3 3v22a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-22a3 3 0 0 0 -3-3zm-5.39 2-.33 1h-2.56l-.33-1zm6.39 23a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1-1v-22a1 1 0 0 1 1-1h3.28l.54 1.63a2 2 0 0 0 1.9 1.37h2.56a2 2 0 0 0 1.9-1.37l.54-1.63h3.28a1 1 0 0 1 1 1z" /><path d="m17 24h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z" /></g></svg>
                                        </i>
                                        <div>
                                            <span>for booking</span>
                                            <a href="callto:01123456786"><span>01 123 456 786 </span></a>
                                        </div>
                                    </li>
                                    <li className="contact">
                                        <i>
                                            <svg height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg"><g id="_01-Email" data-name="01-Email"><path d="m29.61 12.21-13-10a1 1 0 0 0 -1.22 0l-13 10a1 1 0 0 0 -.39.79v14a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-14a1 1 0 0 0 -.39-.79zm-13.61-7.95 11.36 8.74-11.36 8.74-11.36-8.74zm11 23.74h-22a1 1 0 0 1 -1-1v-12l11.39 8.76a1 1 0 0 0 1.22 0l11.39-8.76v12a1 1 0 0 1 -1 1z"></path></g></svg>
                                        </i>
                                        <div>
                                            <span>for private dining</span>
                                            <a href="mailto:info@domain.com"><span>info@domain.com</span></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="mapouter">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26358986.39359313!2d-113.7115859681645!3d36.24800244048599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1676996184286!5m2!1sen!2s"
                                    width="600"
                                    height="450"
                                    style={{ border: '0' }}
                                    allowFullScreen=""
                                    loading=""
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className="align-items-center d-flex mt-3">
                                <i className="fa-solid fa-location-dot me-3"></i>
                                <p>Harbour House, 60 Purewell,  Town 23 /x Christchurch, United State</p>
                            </div>
                            <div className="mt-2 d-flex align-items-center">
                                <i className="fa-solid fa-location-dot me-3"></i>
                                <p>Belfast BT4 3LP Sea Beach United State</p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="get-in-touch">
                                <h2>Send Feedback</h2>
                                <p>For all enquires, please contact us and one of our delightful team will be be happy to help.</p>
                            </div>

                            <form role="form" id="contact-form" onSubmit={handleSubmit} className="add-review leave-comment mt-4">
                                <input type="text" name="complete_name" id="Complete_Name" placeholder="Full Name" required onChange={handleChange} />
                                <input type="email" name="email_address" placeholder="Email Address" id="email_address" required onChange={handleChange} />
                                <input type="phone" name="phone" placeholder="Phone No" required onChange={handleChange} />
                                <textarea placeholder="Message" name="message" required onChange={handleChange}></textarea>
                                <button className="button" type="submit" value="submit">
                                    <span>send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Info