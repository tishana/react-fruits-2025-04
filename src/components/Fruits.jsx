import { useState, useEffect } from "react"
import { getFruits } from '../services/fruits-api'
import { Link, useNavigate } from 'react-router-dom'
export default function Fruits() {
    const [fruits, setFruits] = useState([])
    
    const nav = useNavigate()

    useEffect(() => {
        getFruits()
        .then(res => setFruits(res.data))
    }, [])
    console.log(fruits)
  return (

    <div>
        <ul>
        {fruits.map((fruit) =>{
            return (
                <>
                <li><p>The <Link to={`/${fruit._id}`}>
                {fruit.name}</Link> is {fruit.color}.<br />{fruit.readyToEat? <span>It <b>IS</b> ready to eat.</span> : <span>It is <b>NOT</b> ready to eat</span>}</p></li>
                </>
            )

        })}
        <button onClick={()=> {nav('/new')}}>+</button>
        </ul>
    </div>
  )
}
