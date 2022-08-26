import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../api/axios";
import { Article as ArticleModel, ArticleType } from "../models/Article";
import { motion } from "framer-motion"

export default function Articles() {
    const [articles, setArticles] = useState<ArticleModel[]>([])
    useEffect(() => {
        const getMeetings = async () => {
            const promiseArticles = await api.get<ArticleType[]>('article/index')
            if (promiseArticles.status !== 200) {
                throw Error('error fetching articles');
            }
            console.log(promiseArticles);

            const articleModels = promiseArticles.data.map(article => new ArticleModel(article.id, article.title, article.thumb, article.content, article.description, article.created_at));
            setArticles(articleModels);
        }
        getMeetings();
    }, [])
    return (
        <>
            <section className="bg-ov-white">
                <div className="container lg:py-16 py-4 grid grid-rows-auto gap-4 text-center lg:text-left lg:grid-cols-2 items-center justify-between">
                    <div>
                        <motion.h3 initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-8  font-bold uppercase">
                            Read our <br /> <span className="highlight-header"> articles</span>
                        </motion.h3>
                        <motion.p initial={{ x: -300, opacity: 0 }} transition={{ duration: 1, delay: .5, type: 'spring' }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="text-xl font-[500]">
                            Enjoy the flexibility of the powerful features of Zoom Web Conferencing and get access directly through MasterStudy LMS thanks to Zoom integration. Schools and Universities can enhance their virtual programs by allowing their learners to access high-quality video sessions through desktop and mobile. Create and manage Zoom Meetings directly from your LMS!
                        </motion.p>
                    </div>
                    <div className="h-[400px]">
                        <motion.img src="./imgs/articles.png" initial={{ x: 300, opacity: 0, scale: 1 }} transition={{ duration: 1, type: 'spring' }} whileHover={{ scale: 1.05 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="h-full w-full object-contain mx-auto" alt="" />
                    </div>
                </div>
            </section>
            <div className="container flex gap-8 justify-evenly my-8">
                {
                    articles.map(article => <Article key={article.id} article={article} />)
                }
            </div>
        </>
    );
}

const Article = ({ article }: { article: ArticleModel }) => {
    return (
        <Link to={`/article_${article.id}`}>
            <div className="rounded bg-gray-50 shadow hover:scale-110 transition-transform p-4 max-w-[400px] ">
                <img className="max-h-[300px] w-full object-cover" src={`./storage/images/${article.thumb}`} />
                <h4 className="text-4xl my-4">{article.title}</h4>
                <p className="mb-2">{article.description}</p>
                <span className="rounded bg-second text-white font-bold px-1">{article.date}</span>
            </div>
        </Link>
    )
}
