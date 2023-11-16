import CourseGoals from "./CourseGoals.tsx";
import { type TypeCourseGoal } from "../App.tsx";
import { type ReactNode } from "react";
import InfoBox from "./InfoBox.tsx";

type GoalListProps = {
  goals: TypeCourseGoal[];
  onDelete: (id: number) => void;
};
export default function CourseGoalList({ goals, onDelete }: GoalListProps) {
  let infoBoxDetails: ReactNode;
  if (goals.length === 0) {
    infoBoxDetails = (
      <InfoBox mode="hint">
        You do not have any goals yet, try adding some!
      </InfoBox>
    );
  } else if (goals.length >= 4) {
    let severity:'low'|'medium'|'high';
     severity = 'low'
    if (goals.length >=8){
        severity = 'high'
    } else if(goals.length>=6){
        severity= 'medium'
    }
    console.log(severity)
    infoBoxDetails = (
      <InfoBox mode="warning" severity={severity}>
        You have a lot of goals, please do not put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {infoBoxDetails}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoals title={goal.tittle} onDelete={onDelete} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoals>
          </li>
        ))}
      </ul>
    </>
  );
}
