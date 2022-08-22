import axios from "axios";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import { api } from "../api/axios";
const NUMBER_OF_SLIDES = 3
export default function Home() {
    const [activeSlide, setSlide] = useState(1);
    const isSlideActive = (slideId: number) => activeSlide === slideId;
    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(state => state < NUMBER_OF_SLIDES ? state + 1 : 1);

        }, 5000);
        return () => {
            clearInterval(interval);
        }
    }, [setSlide])
    useEffect(() => {
        api.get('test').then(res => console.log(res))
    })
    return (
        <>
            <header className="bg-transparent py-16 slider">
                <div className="slides">
                    <img className={`${isSlideActive(1) ? 'active' : ''}`} src="imgs/slider/1.jpg" alt="" />
                    <img className={`${isSlideActive(2) ? 'active' : ''} fix-position`} src="imgs/slider/2.jpg" alt="" />
                    <img className={`${isSlideActive(3) ? 'active' : ''}`} src="imgs/slider/3.jpg" alt="" />
                </div>
                <div className="container relative z-50">
                    <div className="flex items-center justify-center lg:justify-between">
                        <div className="flex flex-col text-center justify-center items-center mx-auto min-h-[550px] ">
                            <motion.p initial={{ y: 350, opacity: 0 }} transition={{ duration: 1.5, delay: 0, type: 'spring' }} animate={{ y: 0, opacity: 1 }} className="uppercase text-5xl text-white font-bold mb-12 leading-tight lg:text-6xl ">
                                electronic <br /> <span className="text-main">piano techniques</span> <br /> education system
                            </motion.p>
                            <motion.button initial={{ x: -350, opacity: 0 }} transition={{ duration: 1.5, delay: .4, type: 'spring' }} animate={{ x: 0, opacity: 1 }} className="btn">Go</motion.button>
                        </div>
                        {/* <motion.div initial={{ x: 350, opacity: 0 }} transition={{ duration: 1.5, delay: .8, type: 'spring' }} animate={{ x: 0, opacity: 1 }} className="shrink-0 w-2/4 hidden lg:block overflow-hidden">
                            <img src="./svg/landing.svg" alt="" />
                        </motion.div> */}
                    </div>
                </div>
            </header>
            {/** zoom */}
            <section className="container py-16 grid grid-rows-auto gap-4 text-center lg:text-left lg:grid-cols-2 items-center">
                <div>
                    <motion.h3 initial={{ opacity: 0 }} transition={{ duration: 3, type: 'spring' }} whileInView={{ opacity: 1 }} className="text-5xl mb-8 font-bold uppercase">zoom video <br /> conferencing</motion.h3>
                    <motion.p initial={{ opacity: 0 }} transition={{ duration: 2, delay: .5, type: 'spring' }} whileInView={{ opacity: 1 }} className="text-xl font-[500]">
                        Enjoy the flexibility of the powerful features of Zoom Web Conferencing and get access directly through MasterStudy LMS thanks to Zoom integration. Schools and Universities can enhance their virtual programs by allowing their learners to access high-quality video sessions through desktop and mobile. Create and manage Zoom Meetings directly from your LMS!
                    </motion.p>
                </div>
                <motion.img initial={{ scale: 0 }} transition={{ duration: 1, type: 'spring' }} whileHover={{ scale: 1.1 }} whileInView={{ scale: 1 }} src="./imgs/zoom_home.png" alt="" />
            </section>
            {/** quiz samples */}
            <section className="bg-x-blue py-16 text-white text-center">
                <div className="container max-w-[780px]">
                    <h2 className="text-5xl md:text-6xl font-bold uppercase mb-4">Quiz Samples</h2>
                    <p className="mb-8 text-xl">The rich number of options to create interesting quizzes. Set time limits and passing grade, select from a number of predefined question types.</p>
                    <img src="./imgs/quiz.png" alt="" />
                </div>
            </section>
            {/** assignments */}
            <section className="container py-16 grid grid-rows-auto text-center lg:text-left lg:grid-cols-2 items-center">
                <video className="shadow-xl max-w-xl" loop muted playsInline preload="none" autoPlay>
                    <source src="./videos/assignments.mp4" type="video/mp4" />
                </video>
                <div>
                    <h3 className="text-5xl mb-8 font-bold uppercase">Assignments</h3>
                    <p className="text-xl font-[500] mb-8">Add two types of assignments to lessons: uploads and essays. Check student’s work, grade their performance and leave notes. Give them more freedom to boast of their knowledge.</p>
                    <button className="btn">Show</button>
                </div>
            </section>
        </>
    )
}
