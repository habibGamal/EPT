import { Meeting as MeetingModel } from "../models/Meeting"
import { useState, useEffect } from 'react';
import { api } from "../api/axios";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion"
export default function Meetings() {
    const [meetings, setMeetings] = useState<MeetingModel[]>([]);
    useEffect(() => {
        const getMeetings = async () => {
            const promiseMeetings = await api.get<{ id: number, name: string, link: string, state: string, date: string, assets: string }[]>('meeting/index')
            if (promiseMeetings.status !== 200) {
                throw Error('error fetching meetings');
            }
            const meetingModels = promiseMeetings.data.map(meeting => new MeetingModel(meeting.id, meeting.name, meeting.link, meeting.state, meeting.date, meeting.assets));
            setMeetings(meetingModels);
        }
        getMeetings();
    }, [])
    return (
        <>
            <section className="bg-ov-white">
                <div className="container lg:py-16 py-4 grid grid-rows-auto gap-4 text-center lg:text-left lg:grid-cols-2 items-center justify-between">
                    <div>
                        <motion.h3 initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-8  font-bold uppercase">
                            zoom video <br /> <span className="highlight-header"> conferencing</span>
                        </motion.h3>
                        <motion.p initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, delay: .5, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-xl font-[500]">
                            Enjoy the flexibility of the powerful features of Zoom Web Conferencing and get access directly through MasterStudy LMS thanks to Zoom integration. Schools and Universities can enhance their virtual programs by allowing their learners to access high-quality video sessions through desktop and mobile. Create and manage Zoom Meetings directly from your LMS!
                        </motion.p>
                    </div>
                    <div className="h-[400px]">
                        <motion.img src="./imgs/zoom_home.png" initial={{ x: 300, opacity: 0, scale: 1 }} transition={{ duration: 1, type: 'spring' }} whileHover={{ scale: 1.05 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="h-full w-full object-contain mx-auto" alt="" />
                    </div>
                </div>
            </section>
            <section className="container my-8 grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    meetings.map(meeting => <Meeting key={meeting.id} meeting={meeting} />)
                }
            </section>
        </>
    )
}

const Meeting = ({ meeting }: { meeting: MeetingModel }) => (
    <div className="meeting relative cursor-pointer border-4 border-second rounded-lg shadow-xl p-4">
        <span className="block absolute top-0 left-12 bg-main p-2 text-white text-xl rounded-b">{meeting.year}</span>
        <h4 className=" text-4xl sm:text-5xl lg:text-6xl  font-normal text-center py-16 border-b-2 border-main">@ {meeting.month} / {meeting.day}</h4>
        <div className="flex flex-wrap gap-4 justify-between m-4 items-center mb-0">
            <span className="text-xl font-bold block">{meeting.name}</span>
            {
                meeting.state !== 'ended' &&
                <a target="_blank" href={meeting.link} className="rounded bg-second hover:bg-main text-white shadow font-sans p-2">Join Meeting</a>
            }
            {
                meeting.state === 'ended' &&
                <Link to={`/meeting_${meeting.id}`} className="rounded bg-second hover:bg-main text-white shadow font-sans p-2">
                    Show Meeting
                </Link>
            }
        </div>
    </div>
)
