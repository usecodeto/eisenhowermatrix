import Image from "next/image";
import prisma from "@/db";
import { stringify } from "querystring";
import Todoitems from "./clientonly";
import AddTask from "./addtask";
export default async function Page() {
  const todos = await prisma.todo.findMany();
  // await prisma.todo.create({ data: { title: 'Complete urgent report', quadrant: 'deleteIt', complete: false } })

  // await prisma.todo.deleteMany();
  async function toggleTodo(id: string, complete: boolean) {
    "use server";

    await prisma.todo.update({ where: { id }, data: { complete } });
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Eisenhower Matrix</h2>
      <div className=" align-middle w-1/2 mx-auto my-3 p-3 bg-indigo-400 rounded-md  ">
        <AddTask />
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="flex items-center ">
          <h1 className="font-bold text-2xl text-center m-5 flex items-center transform rotate-90">
            Urgent
          </h1>
          <div className="flex flex-col items-center w-full">
            <h3 className="text-2xl font-bold m-5  text-center">
              Important
            </h3>
            <div className="bg-green-500 rounded-lg p-4 text-white w-4/5 mx-auto flex-4  ">
              <h3 className="text-xl font-bold mb-2">Do It</h3>
              <ul className="list-disc p-3 min-h-1/5 max-h-1/4 overflow-y-scroll">
                {todos
                  .filter(
                    (task) =>
                      task.quadrant === "doIt" && task.complete === false
                  )
                  .map((task) => (
                    <Todoitems
                      key={task.id}
                      task={task}
                      toggleTodo={toggleTodo}
                    />
                  ))}
                {todos
                  .filter(
                    (task) => task.quadrant === "doIt" && task.complete === true
                  )
                  .map((task) => (
                    <Todoitems
                      key={task.id}
                      task={task}
                      toggleTodo={toggleTodo}
                    />
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl text-center m-5 ">Not Important</h1>
          <div className="bg-yellow-400 rounded-lg p-4 w-4/5 mx-auto">
            <h3 className="text-xl font-bold mb-2">Schedule It</h3>
            <ul className="list-disc p-3 min-h-1/5 max-h-1/4 overflow-y-scroll">
              {todos
                .filter(
                  (task) =>
                    task.quadrant === "scheduleIt" && task.complete === false
                )
                .map((task) => (
                  <Todoitems
                    key={task.id}
                    task={task}
                    toggleTodo={toggleTodo}
                  />
                ))}
              {todos
                .filter(
                  (task) =>
                    task.quadrant === "scheduleIt" && task.complete === true
                )
                .map((task) => (
                  <Todoitems
                    key={task.id}
                    task={task}
                    toggleTodo={toggleTodo}
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl text-center m-5 flex items-center transform rotate-90">
            Not Urgent
          </h1>
          <div className="bg-blue-400 rounded-lg p-4 mx-auto w-70 ml-4  flex-4 ">
            <h3 className="text-xl font-bold mb-2">Delegate It</h3>
            <ul className="list-disc p-3 min-h-1/5 max-h-1/4 overflow-y-scroll">
              {todos
                .filter(
                  (task) =>
                    task.quadrant === "delegateIt" && task.complete === false
                )
                .map((task) => (
                  <Todoitems
                    key={task.id}
                    task={task}
                    toggleTodo={toggleTodo}
                  />
                ))}
              {todos
                .filter(
                  (task) =>
                    task.quadrant === "delegateIt" && task.complete === true
                )
                .map((task) => (
                  <Todoitems
                    key={task.id}
                    task={task}
                    toggleTodo={toggleTodo}
                  />
                ))}
            </ul>
          </div>
        </div>
        <div className="bg-red-400 rounded-lg p-4 mx-auto w-4/5 ">
          <h3 className="text-xl font-bold mb-2 ">Delete It</h3>
          <ul className="list-disc p-3 min-h-1/5 max-h-1/4 overflow-y-scroll">
            {todos
              .filter(
                (task) =>
                  task.quadrant === "deleteIt" && task.complete === false
              )
              .map((task) => (
                <Todoitems key={task.id} task={task} toggleTodo={toggleTodo} />
              ))}
            {todos
              .filter(
                (task) => task.quadrant === "deleteIt" && task.complete === true
              )
              .map((task) => (
                <Todoitems key={task.id} task={task} toggleTodo={toggleTodo} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
