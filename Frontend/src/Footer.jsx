import './App.css'
const Footer = (propTypes) => {
  
  return (
    <div ref={propTypes.ContactFormRef} style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center',margin:'1 rem', height: '100vh'}}>
      <h1>Contact</h1>
      <p>Get in touch or shoot me an email directly on sairajesh8262@gmail.com</p>
      <form 
      className='contact-form'
      // onSubmit={handleSubmit}
       >
        {/* Name Input */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
          {/* {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>} */}
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
          {/* {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>} */}
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            // value={formData.message}
            // onChange={handleChange}
            required
          />
          {/* {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>} */}
        </div>

        <button type="submit">Submit</button>
      </form>
      <h3>Thanks for scrolling</h3>
      <div><p>Copyright &copy; 2024 Rajesh Dev</p></div>
    </div>
  );
};


export default Footer;
