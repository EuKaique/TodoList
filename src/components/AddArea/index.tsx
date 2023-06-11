import { KeyboardEvent, useState } from "react"
import { Container } from "./style"

type Props = {
    actionText: (taskName: string) => void
}

const AddArea = ({ actionText }: Props) => {
    const [inputText, setInputText] = useState('')

    function handleKeyUp(e: KeyboardEvent){
        if(e.code === 'Enter' || e.code === 'NumpadEnter' && inputText !== ''){
            actionText(inputText)
            setInputText('')
        }
    }

    function handleClick(){
        if(inputText !== ''){
            actionText(inputText)
            setInputText('')
        }
    }

    return(
        <Container>
            <input 
                type="text" 
                placeholder="Digite a tarefa"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
            <div className="image" onClick={handleClick}>&#10009;</div>
        </Container>
    )
}

export default AddArea