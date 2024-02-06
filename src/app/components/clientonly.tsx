"use client";
import Image from 'next/image';
import prisma from '@/db';
import { Todo } from '@prisma/client';


type Todoitemprops = {
    task : Todo;
    toggleTodo : (id : string , complete : boolean) => void;
}

const deleteTask = async (id : string) => {
    try {
        const response = await fetch(`http://localhost:3000/apis/todos?id=${id}`, {
          method: 'DELETE',
        });
        console.log(response);
        const body = await response.json();
        console.log("body is : ", body);
        if (response.ok) {
          // Update local state after deletion
           console.log('deleted');
           alert(`Task ${body.task.title} Deleted Successfully!`)
              window.location.reload();
        } else {
          console.error('Error deleting todo:', response.statusText);
        }
      } catch (error) {
        console.error('Error deleting todo:', error);
      }

    }
export default function Todoitems({task , toggleTodo} : Todoitemprops) {
    return (
        <li className='backdrop-blur-sm hover:font-semibold  flex items-center gap-3' key={task.id}>
                <input type="checkbox" className='w-6 h-6 peer' defaultChecked={task.complete} onChange={e => toggleTodo(task.id , e.target.checked)} /> <span className='peer-checked:line-through peer-checked:text-slate-600 text-lg mx-3'>{task.title}</span>
                <span><button onClick={() => deleteTask(task.id)}><Image src={'/imgs/delete.png'} className='hover:animate-bounce' alt='delete icon' width={20} height={20}/>
                </button></span>
                {/* <span><button className='will add later '>move</button></span> */}
                </li>
        )
    }