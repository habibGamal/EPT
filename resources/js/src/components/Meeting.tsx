import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Book as BookModel } from '../models/Book';
import { Meeting as MeetingModel } from '../models/Meeting';
import BookVideo from './BookVideo';

export default function Meeting({ meeting = null }: { meeting?: MeetingModel | null }) {
    const [crfs, setCrfs] = useState('');
    useEffect(() => {
        setCrfs((document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement).content)
    }, [])
    return (
        <div className="rounded bg-stone-100 shadow-sm p-4">
            <FontAwesomeIcon icon={faCaretRight} /> {meeting ? meeting.name : 'Add New Meeting'}
            <form action={meeting ? `/api/update-meeting/${meeting.id}` : "/api/save-meeting"} method='post' encType="multipart/form-data">
                <input type="hidden" name="_token" value={crfs} />
                <table className="table-inputs mx-auto">
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="name">Meeting Name</label>
                            </td>
                            <td>
                                <input required className="input" defaultValue={meeting ? meeting.name : ''} type="text" name="name" id="name" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="link">Meeting Link</label>
                            </td>
                            <td>
                                <input required className="input" defaultValue={meeting ? meeting.link : ''} type="text" name="link" id="link" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="date">Meeting Date</label>
                            </td>
                            <td>
                                <input required className="input" defaultValue={meeting ? meeting.date : ''} type="date" name="date" id="date" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="state">Meeting State</label>
                            </td>
                            <td>
                                <select required name="state" defaultValue={meeting ? meeting.state : 'not_started'} className="input font-sans" id="state">
                                    <option className="font-sans" id='not_started' value="not_started">Not started</option>
                                    <option className="font-sans" id='in_meeting' value="in_meeting">In meeting</option>
                                    <option className="font-sans" id='ended' value="ended">Ended</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="assets">Meeting Assets</label>
                            </td>
                            <td>
                                <input className="mx-4" type="file" multiple name="assets[]" id="assets" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="rounded bg-second text-white shadow font-sans p-2">Save</button>
                {
                    meeting ?
                        <form className='inline-block mx-5' action={`/api/delete-meeting/${meeting.id}`} method='post'><button className="rounded bg-red-600 text-white shadow font-sans p-2">delete</button></form> : ''
                }
            </form>
        </div>
    )
}
