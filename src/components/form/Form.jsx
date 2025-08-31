import './form.css';


const Form = () => {
  return (
    <div>
        <form className="form">
            <div className="form-input">
                <input type="text" name="name" placeholder="Your Name" />
            </div>
            <div className="form-input">
                <input type="text" name="email" placeholder="Your Email" />
            </div>
            <div className="form-input">
                <input type="text" name="subject" placeholder="Your subject" />
            </div>
            <div className="form-input">
                <textarea placeholder="Your message..." name="message"></textarea>
            </div>
            <button className="submit-btn">Send</button>
            {/* {done && <div className='success'>Message sent successfully!</div>} */}
            {/* {error && <div className='error'>Message failed to send!</div>} */}
        </form>
    </div>
  )
}
export default Form