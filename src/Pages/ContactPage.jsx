import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { FaEnvelope, FaInstagram, FaWhatsapp, FaSnapchat, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import Footer from "../Components/Footer";

function ContactPage() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate your email service (like EmailJS)
    setFormSubmitted(true);  // Mark form as submitted
    setFormData({ user_name: '', user_email: '', message: '' }); // Reset form fields
  };

  return (
    <div className="w-full">
      <Navbar />
      <h1 className='text-gray-800 text-4xl md:text-6xl mx-auto text-center mt-[50px] md:mt-20'>CONTACT US</h1>
      <div className="relative p-6">
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-0.5 bg-gray-800 w-12 mx-auto mb-1"></div> {/* Short line on top */}
          <div className="h-0.5 bg-gray-800 w-[200px] md:w-[400px] mx-auto mb-2"></div> {/* Long line in the middle */}
          <div className="h-0.5 bg-gray-800 w-12 mx-auto"></div> {/* Short line on bottom */}
        </div>
      </div>

      <div className='antialiased'>
        <div className='flex w-full min-h-screen justify-center items-center pb-[4rem] mt-[70px] sm:mt-[100px] md:mt-[100px]'>
          <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-gray-900 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden'>

            <div className='flex flex-col space-y-8 justify-between'>
              <div>
                <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
                <p className='pt-2 text-white text-sm'>Our support team is quick to respond and eager to assist you with any questions or enquiries.</p>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <FaPhoneAlt className='text-cream text-xl'/>
                <span>+(234)123-456-7890</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <FaLocationArrow className='text-cream text-xl'/>
                <span>Jos, Plateau State, Nigeria</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <FaEnvelope className='text-cream text-xl'/>
                <span>contact@afrothreads@gmail.com</span>
              </div>

              <div className='flex space-x-4 text-lg'>
                <a href='/'> <FaSnapchat className='cursor-pointer hover:text-cream' size={30}/></a>                                             
                <FaWhatsapp className='cursor-pointer hover:text-cream' size={30}/>
                <a href='/'><FaInstagram className='cursor-pointer hover:text-cream' size={30}/></a>
              </div>
            </div>

            <div className='relative'>
              <div className='absolute z-0 w-40 h-40 bg-cream rounded-full -right-28 -top-28'></div>
              <div className='absolute z-0 w-40 h-40 bg-cream rounded-full -left-28 -bottom-16'></div>
              <div className= 'relative z-0 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>

                {formSubmitted ? (
                  <div className="text-center">
                    <h2 className="font-bold text-2xl text-[#6f4e37]">Thank you for reaching out to us!</h2>
                    <p className="text-sm text-[#8b5e3c]">We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                    <div>
                      <label className='text-sm '>Your Name</label>
                    </div>

                    <div>
                      <input
                        type='text'
                        placeholder='Your Name'
                        name='user_name'
                        value={formData.user_name}
                        onChange={handleChange}
                        required
                        className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'
                      />
                    </div>

                    <div>
                      <label className='text-sm '>Email Address</label>
                    </div>

                    <div>
                      <input
                        type='email'
                        placeholder='Email Address'
                        name='user_email'
                        value={formData.user_email}
                        onChange={handleChange}
                        required
                        className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'
                      />
                    </div>

                    <div>
                      <label className='text-sm '>Message</label>
                      <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Message'
                        rows='4'
                        className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'
                      ></textarea>
                    </div>

                    <button
                      type='submit'
                      className='inline-block self-end bg-cream text-white hover:bg-gray-500 bg-gray-800 font-bold rounded-lg px-6 py-2 uppercase text-sm'
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
