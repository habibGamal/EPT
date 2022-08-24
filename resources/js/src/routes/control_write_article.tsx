import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from "jodit-react";
import { useParams } from 'react-router-dom';
import { Article as ArticleModel, ArticleType } from '../models/Article';
import { api } from '../api/axios';
export default function ControlWriteArticle() {
    const [crfs, setCrfs] = useState('');
    useEffect(() => {
        setCrfs((document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement).content)
    }, [])

    const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = useMemo(() => ({
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        placeholder: 'Start typings...',
        uploader: {
            insertImageAsBase64URI: true
        },
    }), [])

    // edit existing article
    const { articleId } = useParams();
    const [article, setArticle] = useState<ArticleModel>()
    useEffect(() => {
        if (articleId) {
            const getMeeting = async () => {
                const promiseArticle = await api.get<ArticleType>(`article/${articleId}`)
                if (promiseArticle.status !== 200) {
                    throw Error('error fetching article');
                }
                const article = promiseArticle.data;
                setArticle(new ArticleModel(article.id, article.title, article.thumb, article.content, article.description, article.created_at));
                setContent(article.content);
            }
            getMeeting();
        }
    }, [])

    return (
        <form action={article ? `/api/update-article/${article.id}` : '/api/save-article'} className="container rounded bg-stone-100 shadow-sm p-4 my-16" method='post' encType="multipart/form-data">
            <input type="hidden" name="_token" value={crfs} />
            <table className="table-inputs">
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="title">Enter title</label>
                        </td>
                        <td>
                            <input type="text" className="input" id="title" name="title" defaultValue={article ? article.title : ''} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="description">Enter description</label>
                        </td>
                        <td>
                            <textarea className="input" name="description" id="description" defaultValue={article ? article.description : ''} ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="thumb">Enter thumbnail</label>
                        </td>
                        <td>
                            <input type="file" className="input" id="thumb" name="thumb" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="bg-white">
                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                // onChange={newContent => { }}
                />
            </div>
            <input type="hidden" name="content" value={content} />
            <button className="rounded mx-auto my-4 block bg-second text-white shadow font-sans p-2">{article ? 'Update' : 'Publish'}</button>
        </form>
    );
}
