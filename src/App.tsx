import { useState } from "react"
import { Area, Container, Header } from "./App.styles"
import AddArea from "./components/AddArea"
import ListItem from "./components/ListItem"
import { Item } from "./types/Item"

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar o pão', done: false},
    {id: 2, name: 'Limpar a casa', done: true}
  ])

  function handleAddTask(taskName: string){
    let newList = [...list]

    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }

  function handleTaskChange(id: number, done: boolean){
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <Container>
      <Area>
        <Header>Lista de tarefas</Header>
        <AddArea actionText={handleAddTask} />
        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTaskChange}/>
        ))}
      </Area>
    </Container>
  )
}

export default App