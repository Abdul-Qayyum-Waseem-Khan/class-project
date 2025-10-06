import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import "./Todo.css";

const myTodo = "myTodoData";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [time, setTime] = useState("");
  const [task, setTask] = useState(() => {
    const tempData = localStorage.getItem(myTodo);
    if (!tempData) return [];
    return JSON.parse(tempData);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedDate = new Date().toLocaleDateString();
      const updatedTime = new Date().toLocaleTimeString();
      setTime(`${updatedDate} - ${updatedTime}`);
    }, 1000);
  }, []);
  //Input value handling
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  //Function for creating task in array
  const handleTaskInput = (e) => {
    e.preventDefault();

    //Empty String
    if (!inputValue) {
      alert("Empty Input Field");
      return;
    }

    // Duplicate entry
    if (task.some((t) => t.text === inputValue)) {
      setInputValue("");
      alert("Duplicate Entry");
      return;
    }
    // Task entry
    setTask((curTask) => [...curTask, { text: inputValue, completion: false }]);
    setInputValue("");
  };

  useEffect(() => {
    localStorage.setItem(myTodo, JSON.stringify(task));
  }, [task]);
  // Task deletion function
  const handleTaskDeletion = (value) => {
    const updatedTask = task.filter((curElem) => curElem.text !== value);
    setTask(updatedTask);
  };
  // Task Checked Entry Function
  const handleCheckedTask = (value) => {
    const updatedTask = task.map((curTask) =>
      curTask.text === value
        ? { ...curTask, completion: !curTask.completion }
        : curTask
    );
    setTask(updatedTask);
  };

  return (
    <div className="todo-app">
      <header>
        <h1>TODO APP</h1>
        <h2>{time}</h2>
      </header>
      <section className="todo-task">
        <form onSubmit={handleTaskInput}>
          <input type="text" value={inputValue} onChange={handleInputValue} />
          <button type="submit">Add Task</button>
        </form>
      </section>
      <ul>
        {task.map((curElem, index) => {
          return (
            <li
              className={`complete-list ${curElem.completion ? `checked` : ``}`}
              key={index}
            >
              <span className="list-entry">{curElem.text}</span>
              <button
                className="check-btn"
                onClick={() => handleCheckedTask(curElem.text)}
              >
                <FaCheck />
              </button>
              <button
                className="delete-btn"
                onClick={() => handleTaskDeletion(curElem.text)}
              >
                <MdDeleteForever />
              </button>
            </li>
          );
        })}
      </ul>
      <button onClick={() => setTask([])}>Clear All</button>
    </div>
  );
}
