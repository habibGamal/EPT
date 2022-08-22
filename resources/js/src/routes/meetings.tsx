import { Meeting as MeetingModel } from "../models/Meeting"
import { useState, useEffect } from 'react';
import { api } from "../api/axios";
import { Link, Outlet } from "react-router-dom";
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
                <div className="container py-16 grid grid-rows-auto gap-4 text-center lg:text-left lg:grid-cols-2 items-center">
                    <div>
                        <h3 className="text-5xl mb-8 font-bold uppercase">zoom video <br /> conferencing</h3>
                        <p className="text-xl font-[500]">Enjoy the flexibility of the powerful features of Zoom Web Conferencing and get access directly through MasterStudy LMS thanks to Zoom integration. Schools and Universities can enhance their virtual programs by allowing their learners to access high-quality video sessions through desktop and mobile. Create and manage Zoom Meetings directly from your LMS!</p>
                    </div>
                    <img src="./imgs/zoom_home.png" alt="" />
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
    <Link to={`/meeting_${meeting.id}`}>
        <div className="meeting relative cursor-pointer border-4 border-second rounded-lg shadow-xl p-4">
            <span className="block absolute top-0 left-12 bg-main p-2 text-white text-xl rounded-b">{meeting.year}</span>
            <h4 className="text-6xl font-normal text-center py-16 border-b-2 border-main">@ {meeting.month} / {meeting.day}</h4>
            <div className="flex justify-between m-4 items-center mb-0">
                <span className="text-xl font-bold block">{meeting.name}</span>
                {
                    meeting.state !== 'ended' &&
                    <a target="_blank" href={meeting.link} className="rounded bg-second hover:bg-main text-white shadow font-sans p-2">Join Meeting</a>
                }
                {
                    meeting.state === 'ended' &&
                    <button className="rounded bg-gray-300 text-gray-600 shadow font-sans p-2">Ended Meeting</button>
                }
            </div>
        </div>
    </Link>
)
