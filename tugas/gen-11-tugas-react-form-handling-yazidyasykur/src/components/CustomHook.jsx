import { useState } from "react";

export default function useForm(data) {
    const [input, setInput] = useState(data)

    function handleFormInput(event, propertyName, inputType) {
        if(inputType != "checkbox") {
            setInput({ ...input, [propertyName]: event.target.value}) 
        } else {
            if(event.target.checked){
                let array = input.type
                array.push(event.target.value)
                setInput({ ...input, [propertyName]: array}) 
            } else {
                let array = input.type
                array.pop()
                setInput({ ...input, [propertyName]: array}) 
            }
        }
    }

    return {
        input,
        handleFormInput
    }
}