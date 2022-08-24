import About from './routes/about';
import Home from './routes/home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Images from './routes/images';
import Meetings from './routes/meetings';
import Quiz from './routes/quiz';
import QuizSample from './routes/quiz_sample';
import Material from './routes/material';
import Contact from './routes/contact';
import AboutProgram from './routes/about_program';
import Dashboard from './routes/dashboard';
import ControlMaterial from './routes/control_material';
import ControlMeetings from './routes/control_meetings';
import Meeting from './routes/meeting';
import ControlWriteArticle from './routes/control_write_article';
import Articles from './routes/articles';
import Article from './routes/article';
import Context from './Context';
import Login from './routes/login';
import ToggleAuthLink from './components/ToggleAuthLink';
function App() {
    return (
        <Context>
            <div className="App">
                <BrowserRouter>
                    <nav className="bg-ov-white ">
                        <div className="container flex items-center justify-between py-4">
                            <h1 className="text-5xl font-extrabold">LPO</h1>
                            <ul className=" hidden lg:flex gap-6 font-bold">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/images_show">Images</Link></li>
                                <li><Link to="/material">Material</Link></li>
                                <li><Link to="/articles">Articles</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/quiz">Quiz</Link></li>
                                <li className="text-center"><Link to="/meetings">Zoom Meetings</Link></li>
                                <li><Link to="/about-program">About Program</Link></li>
                                <ToggleAuthLink />
                            </ul>
                        </div>
                    </nav>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/images_show' element={<Images />}></Route>
                        <Route path='/meetings' element={<Meetings />}></Route>
                        <Route path='/meeting_:meetingId' element={<Meeting />}></Route>
                        <Route path='/material' element={<Material />}></Route>
                        <Route path='/articles' element={<Articles />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>
                        <Route path='/quiz' element={<Quiz />}></Route>
                        <Route path='/quiz-sample' element={<QuizSample />}></Route>
                        <Route path='/about-program' element={<AboutProgram />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        {/** aritcles */}
                        <Route path='/dashboard' element={<Dashboard />}></Route>
                        <Route path='/dashboard_material' element={<ControlMaterial />}></Route>
                        <Route path='/dashboard_meetings' element={<ControlMeetings />}></Route>
                        <Route path='/article_:articleId' element={<Article />}></Route>
                        <Route path='/dashboard_write_article_:articleId' element={<ControlWriteArticle />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </Context>
    );
}

export default App;
