import React from "react";
import { useState } from "react";

function Todo(props) {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);

  const handleAdd = () => {
    const newTask = { id: Date.now(), text: todo };
    setTodoList([...todolist, newTask]);
    setTodo("");
  };
  const handleEdit = () => {};

  const handleDelete = (id) => {
    const updatedTodos = todolist.filter(todo => todo.id !== id);
    setTodoList(updatedTodos);
  };

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <div className="bg-white  w-[500px]  h-[500px] p-5 rounded-xl">
        <div className="flex justify-center mt-2 ">
          <h1 className="text-2xl font-semibold">To-Do List</h1>
        </div>

        <div className="flex items-center bg-gray-200 rounded-full my-7 h-14">
          <input
            className="bg-transparent flex pl-6 pr-2 border-0 outline-none placeholder:italic placeholder:text-slate-400 w-full"
            type="text"
            placeholder="Add Your Task...."
            onChange={handleOnChange}
            value={todo}
          />
          <button
            className="border-none rounded-full bg-orange-600 h-14 w-32 font-semibold text-white cursor-pointer"
            onClick={handleAdd}
          >
            Add+
          </button>
        </div>

        <div className="font-semibold text-2xl bg-violet-300 rounded-full py-3 text-center  text-white  ">
          Your To-Do's
        </div>

        <div className=" flex flex-col gap-4 mt-5">
          {todolist.map((todo, index) => {
            return (
              
              <div className="flex justify-between w-full  ">
                <div className="flex justify-between gap-2 w-1/2 ">
                  <input type="checkbox" />
                  <div className="italic font-semibold text-orange-500 flex-1 ">
                    {todo}
                  </div>
                </div>
                <div className="flex gap-2 text-red-700 font-bold">
                  <button className="hover:underline" onClick={handleEdit}>
                    Edit
                  </button>
                  <button className="hover:underline" onClick={handleDelete(todo.id)}>
                    Delete
                  </button>
                </div>
              </div>
              
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;
