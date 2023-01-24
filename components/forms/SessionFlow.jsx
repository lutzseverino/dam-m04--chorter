import React, { useState } from "react";

import Input from "./Input";
import Task from "./Task";
import Dialog from "../Dialog";
import Button from "../Buttons";

import styled from "styled-components";

const StyledSessionFlow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledTasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const StyledFlowButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
        <StyledTasks>
          {tasks.map((task, index) => (
            <Task
              key={index}
              description={task.description}
              onChange={(e) => handleChange(e, index)}
            />
          ))}
        </StyledTasks>
        <StyledFlowButtons>
          <Button variant="secondary">Auto detect</Button>
          <Button>Start</Button>
        </StyledFlowButtons>
      </StyledSessionFlow>
    </Dialog>
  );
};

export default SessionFlow;
