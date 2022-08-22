import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
export default function MultibleChoiceInput({ id, choices }: { id: string, choices: Array<string> }) {
    const [value, setValue] = useState<string>('');
    return (
        <div className="flex flex-col gap-4 ml-4">
            {
                choices.map(
                    (choice, i) =>
                        <Choice
                            key={i}
                            id={`${id}-a-${i}`}
                            currentValue={value}
                            setValue={setValue}
                            value={choice}
                        />
                )
            }
        </div>
    )
}

const Choice = ({ id, setValue, value, currentValue }: { id: string, setValue: Function, value: string, currentValue: string }) => {
    const check = currentValue === value ? 'text-second' : 'text-transparent'
    return (
        <>
            <label htmlFor={id} className="flex cursor-pointer items-center gap-2 text-xl"><span className="flex justify-center items-center w-5 aspect-square border border-main"><FontAwesomeIcon icon={faCheck} className={check} size='sm' /></span> {value}</label>
            <input hidden onChange={(e) => setValue(e.target.value)} id={id} type="radio" name="answer-1" value={value} />
        </>
    )
}