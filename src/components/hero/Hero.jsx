import './hero.scss'
import { motion } from "framer-motion";


const Hero = () => {

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }

    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: '-220%',
            opacity: 1,
            transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: 'mirror'
            }
        },
    }

    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial='initial' animate='animate'>
                    <motion.h2 variants={textVariants}>Sashko Travel</motion.h2>
                    <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See the Latest Works</motion.button>
                        <motion.a href={`#Contact`} variants={textVariants}>Contact Me</motion.a>
                    </motion.div>
                    <motion.img variants={textVariants} animate='scrollButton' src="/scroll.png" alt="scroll" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial='initial' animate='animate'>
                Writer Content Creator Influencer
            </motion.div>
            <div className="imageContainer">
                <img src='/hero.png' alt='hero' />
            </div>
        </div>
    );
};

export default Hero;