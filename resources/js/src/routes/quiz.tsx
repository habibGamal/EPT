import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
export default function Quiz() {
    return (
        <section className="bg-x-blue lg:py-16 py-4 text-white text-center">
            <div className="container max-w-[780px]">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4">Quiz Samples</h2>
                <p className="mb-8 text-xl">The rich number of options to create interesting quizzes. Set time limits and passing grade, select from a number of predefined question types.</p>
                <img src="./imgs/quiz.png" alt="" />
                <div className="flex flex-col gap-4 text-left mt-8">
                    <QuizComponent name="Quiz 1" />
                    <QuizComponent name="Quiz 2" />
                </div>
            </div>
        </section>
    )
}

const QuizComponent = ({ name }: { name: string }) => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate('/quiz-sample')} className="quiz cursor-pointer bg-second p-4 rounded-xl  flex flex-nowrap justify-between items-center">
            <p className="text-xl">{name}</p>
            <FontAwesomeIcon size='2x' icon={faArrowCircleRight} />
        </div>
    )
}
