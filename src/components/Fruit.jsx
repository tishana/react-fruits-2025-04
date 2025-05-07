import {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom' 
import { getFruit, deleteFruit } from '../services/fruits-api'

export default function Fruit() {
  const nav = useNavigate()
  const [fruit, setFruit] = useState({})
  const {id} = useParams()

  useEffect(() => {
    getFruit(id)
    .then(res => setFruit(res.data) )
  }, [])

  const deleteTheFruit = () => {
    deleteFruit(id).then(() => {nav('/')})
  }
  
  return (
    <div>
      <h2>Fruit:</h2>
      <h3>Name: {fruit.name}</h3>
      <h3>Color: {fruit.color}</h3>
      <h3>Ready to eat: {fruit.readyToEat? <span>true</span>: <span>false</span>}</h3>
      <br />
      <button onClick= {() => {nav('/')}}>Go Back to Fruits</button>
      <button onClick={()=>{nav(`/edit/${id}`)}}>Edit this Fruit</button>
      <button onClick={deleteTheFruit}>Delete this Fruit</button>
    </div>
  )
}
