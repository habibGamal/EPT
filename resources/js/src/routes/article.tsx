import { Interweave } from "interweave";
import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom"
import { api } from "../api/axios";
import { ContextApi } from "../Context";
import { Article as ArticleModel, ArticleType } from "../models/Article";

export default function Article() {
    const { articleId } = useParams();
    const [appState, setAppState] = useContext(ContextApi)!;
    const [article, setArticle] = useState<ArticleModel>()
    const [crfs, setCrfs] = useState('');
    useEffect(() => {
        setCrfs((document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement).content)
    }, [])
    useEffect(() => {
        const getMeeting = async () => {
            const promiseArticle = await api.get<ArticleType>(`article/${articleId}`)
            if (promiseArticle.status !== 200) {
                throw Error('error fetching article');
            }
            const article = promiseArticle.data;
            setArticle(new ArticleModel(article.id, article.title, article.thumb, article.content, article.description, article.created_at));
        }
        getMeeting();
    }, [])

    return (
        <div className="container my-16">
            <div className="p-4 rounded bg-gray-100">
                <img className="max-h-[50vh] w-full object-contain" src={`./storage/images/${article?.thumb}`} alt="" />
                <h2 className="text-center md:text-5xl text-3xl my-8">{article?.title}</h2>
                {/* {
                    article?.content
                } */}
                <div className="md:mx-16">
                    <Interweave content={article?.content} />
                </div>
                {
                    appState.auth &&
                    <div className="flex gap-4">
                        <Link to={`/dashboard_write_article_${article?.id}`}>
                            <button className="rounded my-4 block bg-second text-white shadow font-sans p-2">Edit</button>
                        </Link>
                        <form action={`/api/delete-article/${article?.id}`} method="post">
                            <input type="hidden" name="_token" value={crfs} />
                            <button className="rounded my-4 block bg-red-600 text-white shadow font-sans p-2">Delete</button>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}
