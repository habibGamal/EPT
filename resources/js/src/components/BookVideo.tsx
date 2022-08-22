import React from 'react'

export default function BookVideo({ id, count, removeVideo, video = null }: { id: number, count: number, removeVideo: Function, video?: { name: string, link: string } | null }) {
    console.log(id);

    return (
        <>
            <tr>
                <td colSpan={2}><hr /></td>
            </tr>
            <tr>
                <td colSpan={2}>Video no {count + 1} :</td>
            </tr>
            <tr>
                <td>
                    <label htmlFor={`video_name_${id}`}>Video Name</label>
                </td>
                <td>
                    <input className="input" type="text" defaultValue={video ? video.name : ''} name={`video_name[${id}]`} id={`video_name_${id}`} />
                </td>
            </tr><tr>
                <td>
                    <label htmlFor={`video_link_${id}`}>Video Link</label>
                </td>
                <td>
                    <input className="input" type="text" defaultValue={video ? video.link : ''} name={`video_link[${id}]`} id={`video_link_${id}`} />
                </td>
            </tr>
            <tr>
                <td colSpan={2}>
                    <button onClick={(e) => removeVideo(e, id)} className="rounded bg-red-600 text-white shadow font-sans p-2">Remove this video</button>
                </td>
            </tr>
        </>
    )
}
