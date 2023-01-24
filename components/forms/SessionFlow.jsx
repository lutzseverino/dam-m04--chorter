import React, { useState } from "react";
import Input from "./Input";

import styled from "styled-components";
import Task from "./Task";
import Dialog from "../Dialog";

const StyledSessionFlow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SessionFlow = () => {
  const [tasks, setTasks] = useState([{ description: "" }]);

  React.useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const addTask = (index) => {
    setTasks([
      ...tasks.slice(0, index + 1),
      { description: "" },
      ...tasks.slice(index + 1),
    ]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  const handleChange = (e, index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, description: e.target.value } : task
      )
    );

    if (e.target.value === "") {
      deleteTask(index);
    }

    if (e.target.value !== "" && index === tasks.length - 1) {
      addTask(index);
    }

    // when value is "hi", turn it into "hello"

    if (e.target.value === "hi") {
      setTasks(
        tasks.map((task, i) =>
          i === index ? { ...task, description: "hello" } : task
        )
      );
    }
  };

  return (
    <Dialog title={"Start a quick session"}>
      <StyledSessionFlow>
        {tasks.map((task, index) => (
          <Task
            key={index}
            description={task.description}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </StyledSessionFlow>
    </Dialog>
  );
};

export default SessionFlow;
