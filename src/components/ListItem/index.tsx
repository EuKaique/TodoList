import { Item } from "../../types/Item"
import { Container } from "./style"

type Props = {
    item: Item
    onChange: (id: number, done: boolean) => void
}

const ListItem = ({ item, onChange }: Props) => {

    return (
        <Container done={item.done}>
            <input 
                type="checkbox" 
                checked={item.done} 
                onChange={e => onChange(item.id, e.target.checked)} />
            <label htmlFor="">{item.name}</label>
        </Container>
    )
}

export default ListItem