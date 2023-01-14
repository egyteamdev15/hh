import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    // aos for animation with scroll
    AOS.init({
        duration: 2000,
        once: false
    });

    return (
        <div className="contact py-5 mt-5">
            <div className="container">
                <div className="row w-100 align-items-center">
                    <div className="col-md-6">
                        <div className="items">
                            <h2 className='fw-bolder  pe-3 pe-lg-0'>طلب خدمه سريع</h2>
                            <form className='text-center mt-4 pe-lg-0  pe-3 ps-4'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="item mb-3 mb-lg-0">
                                            <input type='text' placeholder='الاسم' className='form-control' />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="item  mb-3 mb-lg-0">
                                            <input type='number' placeholder='الجوال ' className='form-control' />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <div className="item  mb-3 mb-lg-0">
                                            <input type='email' placeholder='البريد الالكتروني' className='form-control' />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="item  mb-3 mb-lg-0">
                                            <input type='number' placeholder='نشاط الشركه  ' className='form-control' />
                                        </div>
                                    </div>
                                </div>
                                <textarea placeholder='رساله' className='w-100 form-control mt-3'></textarea>
                                <div class="ceter-button mt-4">
                                    <button class="glow-on-hover w-100 fw-bolder fs-4" type="button"> ارسال</button>
                                </div>

                            </form>
                        </div>
                    </div>


                    <div className=" mt-lg-0 mt-md-0 mt-4 col-md-6 text-center">
                        <div className="items">
                            {/* <img data-aos="zoom-in" src='/images/contact-us-showcase.png' className="w-75" /> */}
                            <iframe data-aos="zoom-in" width="100%" height="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.81891989603!2d40.199215915112966!3d29.955886781914597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2cb24bf53e64ccfb!2zMjnCsDU3JzIxLjIiTiA0MMKwMTInMDUuMSJF!5e0!3m2!1sen!2seg!4v1673689864408!5m2!1sen!2seg" style={{ border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact