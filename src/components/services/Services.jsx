import './services.scss';
import { motion , useInView } from "framer-motion";
import {useRef} from "react";

const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, {margin: '-100px'})

    const variants = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }

    return (
        <motion.div className='services' variants={variants} initial='initial' ref={ref} animate={isInView && 'animate'}>
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on helping your brand grow <br/>
                    and move forward
                </p>
                <hr/>
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className='title'>
                    <img src='/people.webp' alt='people' />
                    <h1>
                        <motion.b whileHover={{color: 'orange'}}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className='title'>
                    <h1>
                        <motion.b whileHover={{color: 'orange'}}>For Your</motion.b> Business.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div whileHover={{background: 'lightgray', color:'black'}} className='box'>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsum
                        modi natus. A aliquid autem blanditiis commodi consequuntur debitis
                        delectus deserunt dignissimos dolore eius enim error id incidunt
                        laudantium molestias, nisi nobis odio quam quas qui quos repudiandae
                        sed sit soluta sunt ut veniam voluptate? Cupiditate excepturi odit.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div whileHover={{background: 'lightgray', color:'black'}} className='box'>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsum
                        modi natus. A aliquid autem blanditiis commodi consequuntur debitis
                        delectus deserunt dignissimos dolore eius enim error id incidunt
                        laudantium molestias, nisi nobis odio quam quas qui quos repudiandae
                        sed sit soluta sunt ut veniam voluptate? Cupiditate excepturi odit.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div whileHover={{background: 'lightgray', color:'black'}} className='box'>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsum
                        modi natus. A aliquid autem blanditiis commodi consequuntur debitis
                        delectus deserunt dignissimos dolore eius enim error id incidunt
                        laudantium molestias, nisi nobis odio quam quas qui quos repudiandae
                        sed sit soluta sunt ut veniam voluptate? Cupiditate excepturi odit.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div whileHover={{background: 'lightgray', color:'black'}} className='box'>
                    <h2>Branding</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ipsum
                        modi natus. A aliquid autem blanditiis commodi consequuntur debitis
                        delectus deserunt dignissimos dolore eius enim error id incidunt
                        laudantium molestias, nisi nobis odio quam quas qui quos repudiandae
                        sed sit soluta sunt ut veniam voluptate? Cupiditate excepturi odit.
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Services;