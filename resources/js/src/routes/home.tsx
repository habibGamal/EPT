import axios from "axios";
import { motion } from "framer-motion"
import { useEffect, useState, useContext } from "react";
import { api, web } from "../api/axios";
import { ContextApi } from "../Context";
const NUMBER_OF_SLIDES = 3
export default function Home() {
    const [activeSlide, setSlide] = useState(1);
    const [appState, setAppState] = useContext(ContextApi)!;
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
        const auth = async () => {
            await web.get('/sanctum/csrf-cookie')
            const login = await api.post('/login', {
                'email': 'maha@admin.com',
                'password': '1235645'
            });
            const user = await api.get('/user');
            if (login.status === 200) {
                setAppState(state => ({ ...state, auth: true }));
            }

        }
        // auth()
    }, [])

    return (
        <>
            <header className="bg-transparent py-16 slider">
                <div className="slides">
                    <img className={`${isSlideActive(1) ? 'active' : ''}`} src="imgs/slider/1.jpg" alt="" />
                    <img className={`${isSlideActive(2) ? 'active' : ''} fix-position`} src="imgs/slider/2.jpg" alt="" />
                    <img className={`${isSlideActive(3) ? 'active' : ''}`} src="imgs/slider/3.jpg" alt="" />
                </div>
                <div className="container relative z-40">
                    <div className="flex items-center justify-center lg:justify-between">
                        <div className="flex flex-col text-center justify-center items-center mx-auto min-h-[550px] ">
                            <motion.p initial={{ y: 350, opacity: 0 }} transition={{ duration: 1.5, delay: 0, type: 'spring' }} animate={{ y: 0, opacity: 1 }} className="uppercase text-5xl text-white font-bold mb-12 leading-tight lg:text-6xl ">
                                learning <br /> <span className="text-main">piano online</span> <br /> education system
                            </motion.p>
                            <motion.button initial={{ x: -350, opacity: 0 }} transition={{ duration: 1.5, delay: .4, type: 'spring' }} animate={{ x: 0, opacity: 1 }} className="btn">Go</motion.button>
                        </div>
                    </div>
                </div>
            </header>
            {/** zoom */}
            <section className="container py-16 grid grid-rows-auto gap-4 text-center lg:text-left lg:grid-cols-2 items-center">
                <div>
                    <motion.h3 initial={{ opacity: 0 }} transition={{ duration: 3, type: 'spring' }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl mb-8 font-bold uppercase">zoom video <br /> conferencing</motion.h3>
                    <motion.p initial={{ opacity: 0 }} transition={{ duration: 2, delay: .5, type: 'spring' }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xl font-[500]">
                        Enjoy the flexibility of the powerful features of Zoom Web Conferencing and get access directly through MasterStudy LMS thanks to Zoom integration. Schools and Universities can enhance their virtual programs by allowing their learners to access high-quality video sessions through desktop and mobile. Create and manage Zoom Meetings directly from your LMS!
                    </motion.p>
                </div>
                <motion.img initial={{ scale: 0 }} transition={{ duration: 1, type: 'spring' }} whileHover={{ scale: 1.1 }} whileInView={{ scale: 1 }} viewport={{ once: true }} src="./imgs/zoom_home.png" alt="" />
            </section>
            {/** quiz samples */}
            <section className="bg-x-blue py-16 text-white text-center">
                <div className="container max-w-[780px]">
                    <motion.h2 initial={{ y: -300, opacity: 0 }} transition={{ duration: 1, type: 'spring' }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4">Quiz Samples</motion.h2>
                    <motion.p initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="mb-8 text-xl">The rich number of options to create interesting quizzes. Set time limits and passing grade, select from a number of predefined question types.</motion.p>
                    <motion.img initial={{ y: 300, opacity: 0, scale: 1 }} transition={{ duration: 1, type: 'spring' }} whileHover={{ scale: 1.1 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} src="./imgs/quiz.png" alt="" />
                </div>
            </section>
            {/** assignments */}
            <section className="container py-16 grid grid-rows-auto text-center lg:text-left lg:grid-cols-2 items-center gap-8">
                <motion.video initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="shadow-xl w-full" loop muted playsInline preload="none" autoPlay>
                    <source src="./videos/assignments.mp4" type="video/mp4" />
                </motion.video>
                <div>
                    <motion.h3 initial={{ y: -300, opacity: 0 }} transition={{ duration: 3, type: 'spring' }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl  mb-8 font-bold uppercase">Assignments</motion.h3>
                    <motion.p initial={{ x: 300, opacity: 0 }} transition={{ duration: 3, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-xl font-[500] mb-8">Add two types of assignments to lessons: uploads and essays. Check student’s work, grade their performance and leave notes. Give them more freedom to boast of their knowledge.</motion.p>
                    <motion.button initial={{ y: 100, opacity: 0 }} transition={{ duration: 3, type: 'spring' }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="btn">Show</motion.button>
                </div>
            </section>
        </>
    )
}
