import CourseGoals from "./CourseGoals.tsx"
import { TypeCourseGoal } from "../App.tsx"
type GoalListProps = {
    goals:TypeCourseGoal[];
    onDelete:(id:number)=>void
}
export default function CourseGoalList ({goals,onDelete}:GoalListProps){
    
    return (
        <div>
            {goals.map(goal=>(
        <li key={goal.id}>
          <CourseGoals title={goal.tittle} onDelete={onDelete} id={goal.id}>
          <p>{goal.description}</p>
          </CourseGoals>
        </li>
            ))}
        </div>
    
    )
}