import { type ReactNode,type PropsWithChildren,type FC} from "react";

interface CourseGoals{
    title:string;
    children:ReactNode;//ReactNode is a special type that comes from react to be used for jsx code
}
    type OnDelete= (id:number)=>void
type GoalsWithChildren = PropsWithChildren<{title:string, onDelete:OnDelete, id:number}> //this is another way to name props that utilize children

//this is another method of writing and it looks cleaner
const CourseGoals:FC<GoalsWithChildren> = ({title,children, onDelete,id})=>{
    return(
                <article>
                    <div>
                        <h2>{title}</h2>
                        {children}
        
                    </div>
                    <button onClick={()=>onDelete(id)}>Delete</button>
                </article>
            )
}
export default CourseGoals

//this is a one way to write it
// export default function CourseGoals({title,children}:GoalsWithChildren){
//     return(
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{children}</p>

//             </div>
//             <button>Delete</button>
//         </article>
//     )
// }