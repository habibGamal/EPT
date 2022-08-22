import { FormEvent, useEffect, useState } from "react";
import MultibleChoiceInput from "../components/MultibleChoiceInput";
import TrueFalseInput from "../components/TrueFalseInput";
export default function QuizSample() {
    const [confettiState,setConfetti] = useState(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setConfetti(true);
    }
    useEffect(()=>{
        const confettiSettings = { target: 'my-canvas',max:200 };
        const ConfettiGenerator = require('confetti-js').default
        const confetti = ConfettiGenerator(confettiSettings);
        confettiState && confetti.render();
    },[confettiState])
    return (
        <form className="container relative" onSubmit={onSubmit} >
            <canvas id="my-canvas" className="fixed top-0 left-0 z-[-1] w-full h-full"></canvas>
            <h2 className="page-title">Quiz 1</h2>
            <input type="text" name="name" id="name" required placeholder="Enter Your Name" className="rounded bg-gray-50 border  focus-within:outline-second mb-8 text-xl p-4" />
            <div className="content grid grid-cols-auto lg:grid-cols-2 items-start gap-8">
                <div>
                    <p className="question"> The standard piano has 120 keys.</p>
                    <TrueFalseInput id="q-1" />
                </div>
                <div>
                    <p className="question">The black keys are used to play:</p>
                    <MultibleChoiceInput
                        id="q-2"
                        choices={[
                            'vibrato',
                            'sharps and flats',
                            'sustained notes',
                            'baseball',
                        ]}
                    />
                </div>
                <div>
                    <p className="question"> On an organ, some notes are played with the feet. Similarly, on the piano, the pedals are used to play very low notes.</p>
                    <TrueFalseInput id="q-3" />
                </div>
                <div>
                    <p className="question">This famous Hungarian composer was a very showy piano player, and is known for being the first to play a concert by memory. Roger Daltry played him in a movie loosely based on his life.</p>
                    <MultibleChoiceInput
                        id="q-4"
                        choices={[
                            'Liszt',
                            'Beethoven',
                            'Chopin',
                            'Bach',
                        ]}
                    />
                </div><div>
                    <p className="question"> The standard piano has 120 keys.</p>
                    <TrueFalseInput id="q-5" />
                </div>
                <div>
                    <p className="question">The black keys are used to play:</p>
                    <MultibleChoiceInput
                        id="q-6"
                        choices={[
                            'vibrato',
                            'sharps and flats',
                            'sustained notes',
                            'baseball',
                        ]}
                    />
                </div>
                <div>
                    <p className="question"> On an organ, some notes are played with the feet. Similarly, on the piano, the pedals are used to play very low notes.</p>
                    <TrueFalseInput id="q-7" />
                </div>
                <div>
                    <p className="question">This famous Hungarian composer was a very showy piano player, and is known for being the first to play a concert by memory. Roger Daltry played him in a movie loosely based on his life.</p>
                    <MultibleChoiceInput
                        id="q-8"
                        choices={[
                            'Liszt',
                            'Beethoven',
                            'Chopin',
                            'Bach',
                        ]}
                    />
                </div><div>
                    <p className="question"> The standard piano has 120 keys.</p>
                    <TrueFalseInput id="q-9" />
                </div>
                <div>
                    <p className="question">The black keys are used to play:</p>
                    <MultibleChoiceInput
                        id="q-10"
                        choices={[
                            'vibrato',
                            'sharps and flats',
                            'sustained notes',
                            'baseball',
                        ]}
                    />
                </div>
                <div>
                    <p className="question"> On an organ, some notes are played with the feet. Similarly, on the piano, the pedals are used to play very low notes.</p>
                    <TrueFalseInput id="q-11" />
                </div>
                <div>
                    <p className="question">This famous Hungarian composer was a very showy piano player, and is known for being the first to play a concert by memory. Roger Daltry played him in a movie loosely based on his life.</p>
                    <MultibleChoiceInput
                        id="q-12"
                        choices={[
                            'Liszt',
                            'Beethoven',
                            'Chopin',
                            'Bach',
                        ]}
                    />
                </div><div>
                    <p className="question"> The standard piano has 120 keys.</p>
                    <TrueFalseInput id="q-13" />
                </div>
                <div>
                    <p className="question">The black keys are used to play:</p>
                    <MultibleChoiceInput
                        id="q-14"
                        choices={[
                            'vibrato',
                            'sharps and flats',
                            'sustained notes',
                            'baseball',
                        ]}
                    />
                </div>
                <div>
                    <p className="question"> On an organ, some notes are played with the feet. Similarly, on the piano, the pedals are used to play very low notes.</p>
                    <TrueFalseInput id="q-15" />
                </div>
                <div>
                    <p className="question">This famous Hungarian composer was a very showy piano player, and is known for being the first to play a concert by memory. Roger Daltry played him in a movie loosely based on his life.</p>
                    <MultibleChoiceInput
                        id="q-16"
                        choices={[
                            'Liszt',
                            'Beethoven',
                            'Chopin',
                            'Bach',
                        ]}
                    />
                </div>
            </div>
            <button className="block mx-auto my-8 btn">Submit</button>
        </form>
    )
}