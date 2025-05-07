import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getFruit, editFruit } from "../services/fruits-api"


export default function EditFruit() {
  const [fruit, setFruit] = useState(null)

  const {id} = useParams()

  const nav = useNavigate()

  useEffect(() => {
    getFruit(id).then(res => setFruit(res.data), [])
  })
  const editTheFruit= (e) => {
    e.preventDefault()
    const fruit = {
      name: e.target.name.value, 
      color: e.target.color.value,
      readyToEat: e.target.readyToEat.checked }
      editFruit(id,fruit).then(() =>{nav(`/${id}`)})

  }
  return (
    <>
    <div>Edit Fruit</div>
    { fruit && <form onSubmit={editTheFruit}>
      Name: <input type='text' name='name'defaultValue={fruit.name}></input><br/>
      Color: <input type='text' name='color' defaultValue={fruit.color}></input><br/>
      Ready to Eat: {fruit.readyToEat? <input type='checkbox' name='readyToEat' defaultChecked ></input> : <input type='checkbox' name='readyToEat'  ></input>}<br/>
      <input type='submit'></input>
    </form> }
    </>
  )
}
