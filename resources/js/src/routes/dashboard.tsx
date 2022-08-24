import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="container py-4">
            <h2 className="text-center font-sans my-4 text-3xl font-bold">HI <span className="highlight-header"> DR.Maha</span></h2>
            <p className="text-center font-sans text-2xl">This is a dashboard to manage your website</p>
            <div className="flex flex-wrap  gap-4 justify-evenly mt-16">
                <Link to="/dashboard_material">
                    <div className="rounded hover:scale-110 transition-transform cursor-pointer bg-ov-white p-4 shadow-sm max-w-[400px]">
                        <img className="w-full" src="./imgs/material.png" alt="" />
                    </div>
                </Link>
                <Link to="/dashboard_meetings">
                    <div className="rounded hover:scale-110 transition-transform cursor-pointer bg-ov-white p-4 shadow-sm max-w-[400px]">
                        <img className="w-full" src="./imgs/meeting.jpg" alt="" />
                    </div>
                </Link>
                <div className="rounded hover:scale-110 transition-transform cursor-pointer flex items-center bg-ov-white p-4 shadow-sm max-w-[400px]">
                    <img className="w-full" src="./imgs/quiz.png" alt="" />
                </div>
                <Link to="/dashboard_write_article_0">
                    <div className="rounded hover:scale-110 transition-transform cursor-pointer bg-ov-white p-4 shadow-sm max-w-[400px]">
                        <img className="w-full" src="./imgs/articles.png" alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
