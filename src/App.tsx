
import imgGoals from './assets/goals.jpg'
import Header from "./components/Header.tsx";
import CourseGoalList from "./components/CourseGoalList.tsx";
import { type FormEvent, useState } from "react";


export type TypeCourseGoal = {
  tittle:string;
  description:string;
  id:number;
  
}

export default function App() {

  const [goals,setGoal] = useState<TypeCourseGoal[]>([])
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [alert, setAlert] = useState<string>('')
  const [error, setError] = useState<string>('')


  const handleAddGoal =(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(title && description){
      setGoal((prevGoals=>{
        const newGoal:TypeCourseGoal = {
          id: Math.random(),
          tittle:title,
          description:description
        }
        setTitle('')
        setDescription('')
        setAlert('New goal has been created!')
        setTimeout(()=>{
          setAlert('')
        },3000)
        return [...prevGoals, newGoal]
      }))
    } else {
      setError('Title or Description is/are missing')
      setTimeout(()=>{
        setError('')
      },2000)
    }

  }
  const handleTitle= (e:FormEvent<HTMLInputElement >)=>{
    e.preventDefault()
    setTitle(e.currentTarget.value)
  }
  const handleDescription = (e:FormEvent<HTMLInputElement>)=>{
    e.preventDefault()
    setDescription(e.currentTarget.value)
  }

  function handleDelete(id:number){
    setGoal(prevGoal=>prevGoal.filter(goal=>goal.id !==id))
  }
  return (
    <main>
      <Header image={{src:imgGoals, alt:'a list of goals'}}>
        <h1>Your course goals</h1>
      </Header>
      <form onSubmit={handleAddGoal}>
        <label htmlFor="title"  >Title</label>
        <input type="text" id='title' value={title}
        onChange={handleTitle}/>
        <label htmlFor="description" >Description</label>
        <input type="text" id='description'  value={description}
        onChange={handleDescription} />
      <button >Add Goal</button>
      <div>
        {alert && <div className='alert'>{alert}</div>}
        {error && <div className='error'>{error}</div>}
      </div>
      </form>
      <ul>
       <CourseGoalList goals={goals} onDelete={handleDelete}/>
      </ul>

   
    </main>
  )
}
