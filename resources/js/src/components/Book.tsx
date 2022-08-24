import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Book as BookModel } from '../models/Book';
import BookVideo from './BookVideo';

export default function Book({ book = null }: { book?: BookModel | null }) {
    const [videos, setVideos] = useState<number[]>(book?.videos.map((_, i) => i) || []);
    const [lastVideoCount, setLastVideoCount] = useState<number>(book ? book.videos.length - 1 : -1);
    const [crfs, setCrfs] = useState('');
    const addVideo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setVideos(state => [...state, lastVideoCount + 1]);
        setLastVideoCount(count => count + 1);
    }
    const removeVideo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.preventDefault();
        setVideos(state => state.filter(videoId => videoId !== id));
    }
    useEffect(() => {
        setCrfs((document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement).content)
    }, [])
    return (
        <div className="rounded bg-stone-100 shadow-sm p-4">
            <FontAwesomeIcon icon={faCaretRight} /> {book ? book.name : 'Add New Book'}
            <form action={book ? `/api/book_update/${book.id}` : "/api/save-book"} method='post' encType="multipart/form-data">
                <input type="hidden" name="_token" value={crfs} />
                <table className="table-inputs mx-auto">
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="book_name">Book Name</label>
                            </td>
                            <td>
                                <input className="input" defaultValue={book ? book.name : ''} type="text" name="book_name" id="book_name" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="cover_photo">Cover Photo</label>
                            </td>
                            <td>
                                <input className="mx-4" type="file" name="cover_photo" id="cover_photo" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="pdf_link">PDF Link</label>
                            </td>
                            <td>
                                <input className="input" defaultValue={book ? book.pdf : ''} type="text" name="pdf_link" id="pdf_link" />
                            </td>
                        </tr>
                        {videos.map((id, count) => <BookVideo key={id} id={id} video={book ? book.videos[id] : null} count={count} removeVideo={removeVideo} />)}
                        <tr>
                            <td colSpan={2}>
                                <button onClick={e => addVideo(e)} className="rounded bg-second text-white shadow font-sans p-2">Add Video</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="rounded bg-second text-white shadow font-sans p-2">Save</button>
                {
                    book ?
                        <form className='inline-block mx-5' action={`/api/book_delete/${book.id}`} method='post'>
                            <input type="hidden" name="_token" value={crfs} />
                            <button className="rounded bg-red-600 text-white shadow font-sans p-2">delete</button>
                        </form> : ''
                }
            </form>
        </div>
    )
}
