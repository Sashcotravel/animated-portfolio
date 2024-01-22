import './contact.scss';
import { motion } from "framer-motion";
import {useRef, useState} from "react";
import emailjs from '@emailjs/browser';


const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    }
}

const Contact = () => {

    const ref = useRef()
    const formRef = useRef()
    const [error, setError] = useState(null)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zdhdrx8', 'template_cdgp64h', formRef.current, '3Mc-73LbFRIjdNMkx')
            .then((result) => {
                console.log(result.text);
                useState(false)
            }, (error) => {
                useState(true)
                console.log(error.text);
            });
    };

    return (
        <motion.div rel={ref} className='contact' variants={variants} initial='initial' whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div variants={variants} className="item">
                    <h2>Mail</h2>
                    <span>vasinoleksandr1@gmail.com</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Address</h2>
                    <span>Ukraine</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                    <h2>Phone</h2>
                    <span>+380 95 123 45 67</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.div className="phoneSvg"
                            initial={{opacity: 1}}
                            whileInView={{opacity: 0}}
                            transition={{delay: 3, duration: 1}}>
                    <svg  viewBox="0 0 24 24">
                        <motion.path
                            strokeWidth={0.9}
                            fill='transparent'
                            initial={{pathLength: 0}}
                            animate={{pathLength: 1}}
                            transition={{duration: 3}}
                            d="M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656
                        18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446
                        18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799
                        16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973
                        4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4
                        19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984
                        21 6.0799 21 7.2V20Z"/>
                    </svg>
                </motion.div>
                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{delay: 4, duration: 1}}>
                    <input type="text" placeholder='Name' name='name' />
                    <input type="email" placeholder='Email' name='email' />
                    <textarea rows={8} placeholder='Message' name='message' />
                    {error && "Something wrong"}
                    <button>Submit</button>
                </motion.form>
            </div>
        </motion.div>
    );
};

export default Contact;