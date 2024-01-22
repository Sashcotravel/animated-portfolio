import './portfolio.scss';
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";

const items = [
    {
        id: 1,
        title: 'React Commerce',
        img: 'https://images.pexels.com/photos/5948913/pexels-photo-5948913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'Lorem ipsum dolor sit amet. Accusamus adipisci atque, error eum explicabo hic officiis quaerat qui rem rerum similique, soluta voluptas voluptatem, voluptates voluptatibus.'
    },
    {
        id: 2,
        title: 'Next.js Blog',
        img: 'https://images.pexels.com/photos/6531482/pexels-photo-6531482.jpeg',
        desc: 'Lorem ipsum dolor sit amet. Accusamus adipisci atque, error eum explicabo hic officiis quaerat qui rem rerum similique, soluta voluptas voluptatem, voluptates voluptatibus.'
    },
    {
        id: 3,
        title: 'TypeScript Commerce',
        img: 'https://images.pexels.com/photos/5088415/pexels-photo-5088415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'Lorem ipsum dolor sit amet. Accusamus adipisci atque, error eum explicabo hic officiis quaerat qui rem rerum similique, soluta voluptas voluptatem, voluptates voluptatibus.'
    },
    {
        id: 4,
        title: 'Angular Shop',
        img: 'https://images.pexels.com/photos/4389366/pexels-photo-4389366.jpeg?auto=compress&cs=tinysrgb&w=400',
        desc: 'Lorem ipsum dolor sit amet. Accusamus adipisci atque, error eum explicabo hic officiis quaerat qui rem rerum similique, soluta voluptas voluptatem, voluptates voluptatibus.'
    },
]


const Single = ({item}) => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({target: ref})

    const y = useTransform(scrollYProgress,
        [0, 1], [-100, 100])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <motion.div className="textContent" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {
                items.map(item => {
                    return (
                        <Single item={item} key={item.id} />
                    )
                })
            }
        </div>
    );
};

export default Portfolio;