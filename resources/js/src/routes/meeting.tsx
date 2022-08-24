import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../api/axios';
import { Meeting as MeetingModel } from '../models/Meeting';

export default function Meeting() {
    const { meetingId } = useParams();
    const [meeting, setMeeting] = useState<MeetingModel>();
    useEffect(() => {
        const getMeeting = async () => {
            const promiseMeeting = await api.get<{ id: number, name: string, link: string, state: string, date: string, assets: string }>(`meeting/${meetingId}`)
            if (promiseMeeting.status !== 200) {
                throw Error('error fetching meetings');
            }
            const meeting = promiseMeeting.data;
            setMeeting(new MeetingModel(meeting.id, meeting.name, meeting.link, meeting.state, meeting.date, meeting.assets));
        }
        getMeeting();
    }, [])
    const displayAsset = (asset: string,i:number) => {
        const [name, extention] = asset.split('.');
        return extention === 'mp4' ?
            <video key={i} controls>
                <source src={`/storage/images/${asset}`} type="video/mp4"/>
            </video>:
            <img key={i} src={`/storage/images/${asset}`} />
    }
    return (
        <div className='container flex flex-col justify-center gap-4'>
            {
                meeting?.assets.map((asset,i)=>displayAsset(asset,i))
            }
        </div>
    )
}
