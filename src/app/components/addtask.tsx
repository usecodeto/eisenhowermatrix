import Link from "next/link";
import prisma from "@/db";
import { redirect } from "next/navigation";

async function createTodo(data : FormData) {
    "use server";
    const title = data.get("title")?.valueOf()
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title")
  }
  const quadrant = data.get("quadrant")?.valueOf()
  if(typeof quadrant !== "string" || quadrant.length === 0) {
    throw new Error("Invalid Quadrant")
  } 
  console.log("task created with title", title, "and quadrant", quadrant);
  await prisma.todo.create({ data: { title, complete: false , quadrant } })
  // alert("Task Created Successfully!");
  // reload the page via next/router
   

  redirect("/new");
  // window.location.reload();
}
export default async function AddTask() {

    return (
        <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Add New</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
            <select
                name="quadrant"
                className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100" >
                <option value="doIt">Do It</option>
                <option value="scheduleIt">Schedule It</option>
                <option value="delegateIt">Delegate It</option>
                <option value="deleteIt">Delete It</option>
                </select>
                
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
    )
    
}