import { useNavigate } from "react-router-dom"
import { createFruit } from "../services/fruits-api"


export default function CreateFruit() {
  const nav = useNavigate()
  const createTheFruit = (e) =>{
    e.preventDefault()
    const fruit = {
      name: e.target.name.value, 
      color: e.target.color.value,
      readyToEat: e.target.readyToEat.checked }
      createFruit(fruit).then(()=>{
        nav('/')
      })
    }
 
  return (
    <>
    <div>Create a Fruit</div>
    <form onSubmit={createTheFruit}>
      Name: <input type='text' name='name'></input><br/>
      Color: <input type='text' name='color'></input><br/>
      Ready to Eat: <input type='checkbox' name='readyToEat'></input><br/>
      <input type='submit'></input>
    </form>
    </>
  )
}

