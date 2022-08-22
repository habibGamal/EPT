import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

export default function TrueFalseInput({id}:{id:string}) {
    const [value, setValue] = useState<string>();
    enum Active {
        True = 'true',
        False = 'false',
    }
    const check = (cond: string) => value === cond ? 'text-second' : 'text-transparent'
    return (
        <div className="flex flex-col gap-4 ml-4">
            <label htmlFor={`${id}-a-1`} className="flex cursor-pointer items-center gap-2 text-xl"><span className="flex justify-center items-center w-5 aspect-square border border-main"><FontAwesomeIcon icon={faCheck} className={check(Active.True)} size='sm' /></span> True</label>
            <input hidden onChange={(e) => setValue(e.target.value)} id={`${id}-a-1`} type="radio" name="answer-1" value="true" />
            <label htmlFor={`${id}-a-2`} className="flex cursor-pointer items-center gap-2 text-xl"><span className="flex justify-center items-center w-5 aspect-square border border-main"><FontAwesomeIcon icon={faCheck} className={check(Active.False)} size='sm' /></span> False</label>
            <input hidden onChange={(e) => setValue(e.target.value)} id={`${id}-a-2`} type="radio" name="answer-1" value="false" />
        </div>
    )
}