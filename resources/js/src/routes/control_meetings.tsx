import { useEffect, useState } from "react";
import { api } from "../api/axios";
import Meeting from "../components/Meeting";
import { Meeting as MeetingModel } from "../models/Meeting";

export default function ControlMeetings() {
    const [meetings, setMeetings] = useState<MeetingModel[]>([])
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
        <div className="container my-16 flex flex-col gap-4">
            {
                meetings.map(meeting => <Meeting key={meeting.id} meeting={meeting} />)
            }
            <Meeting />
        </div>
    )
}
