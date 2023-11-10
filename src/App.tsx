import CourseGoals from "./components/CourseGoals.tsx";
import imgGoals from './assets/goals.jpg'
import Header from "./components/Header.tsx";
import { useState } from "react";


type CourseGoal = {
  tittle:string;
  description:string;
  id:number;
}
export default function App() {

  const [goals,setGoal] = useState<CourseGoal[]>([])
  const handleAddGoal =()=>{
setGoal((prevGoals=>{
  const newGoal:CourseGoal = {
    id: Math.random(),
    tittle:'Hard coded title',
    description:'Learn React'
  }
  return [...prevGoals, newGoal]
}))
  }
  return (
    <main>
      <Header image={{src:imgGoals, alt:'a list of goals'}}>
        <h1>Your course goals</h1>
      </Header>
      <ul>
        {goals.map(goal=>(
          <li key={goal.id}>
            <CourseGoals title={goal.tittle}>
            <p>{goal.description}</p>
            </CourseGoals>
          </li>
        ))}
      </ul>

      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoals title="Learning TypeScript" >
        <p>Learning React from the ground up</p>
      </CourseGoals>
    </main>
  )
}
