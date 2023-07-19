import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const host = "https://jsonplaceholder.typicode.com/";

  const fetchTasks = async () => {
    const url = host + "todos";
    const request = {
      method: "GET",
    };

    const response = await fetch(url, request);

    if (response.ok) {
      const data = await response.json();
      setTasks(data);
    } else {
      console.log("Error", response.status, response.statusText);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="body text-center">
      <div>
        {!tasks.length ? (
          "Cargando"
        ) : (
          <div>
            <ul>
              {tasks.map((task) => (
                <li key={task.id} className="task">
                  {task.title}
                  {task.completed ? ( 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="green bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                    ) : ( 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="red bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
