import "./App.css";
import { Input } from "@mantine/core";
import { Button } from "@mantine/core";
import { useState } from "react";

class Task {
  static s_id: number = 0;
  id: number;
  name: string;

  static Create(): Task {
    return new Task(Task.s_id++, "");
  }

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  tag_id(): string {
    return `task_${this.id}`;
  }
}

function Tasks() {
  const [tasks, setTask] = useState<Task[]>([]);

  const addTask = () => {
    setTask([...tasks, Task.Create()]);
  };

  const delTask = () => {
    tasks.pop();
    setTask([...tasks]);
  };

  const taskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changed = tasks.map((task) => {
      if (task.tag_id() === e.target.id) {
        return new Task(task.id, e.target.value);
      } else {
        return task;
      }
    });
    setTask([...changed]);
  };

  return (
    <>
      <div className="flex flex-row">
        <Button size="xs" onClick={addTask}>
          +
        </Button>
        <Button size="xs" onClick={delTask}>
          -
        </Button>
      </div>
      <div className="flex flex-col">
        {tasks.map((task) => {
          return (
            <Input
              id={task.tag_id()}
              size="xs"
              radius="sm"
              value={task.name}
              onChange={taskNameChange}
            />
          );
        })}
      </div>
    </>
  );
}

export default Tasks;
