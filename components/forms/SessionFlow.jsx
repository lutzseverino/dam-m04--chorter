import React, { useState } from "react";
import styled from "styled-components";

import Task from "./Task";
import Dialog from "../actions/Dialog";
import Button from "../actions/Buttons";

import { H3 } from "../typography/Headings";

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

const StyledSessionFlowButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SessionFlow = () => {
  const [tasks, setTasks] = useState([
    {
      description: "",
      time: "",
      break: {
        description: "",
        time: "",
      },
    },
  ]);

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
    console.log(e.target.name);

    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, [e.target.name]: e.target.value } : task
      )
    );

    if (e.target.name === "description") {
      if (e.target.value === "") {
        deleteTask(index);
      }

      if (e.target.value !== "" && index === tasks.length - 1) {
        addTask(index);
      }
    }
  };

  return (
    <Dialog>
      <H3>Start a quick session</H3>
      <StyledSessionFlow>
        <StyledTasks>
          {tasks.map((task, index) => (
            <Task
              key={index}
              description={task.description}
              onChange={(e) => handleChange(e, index)}
              isBreakPossible={index !== tasks.length - 1}
            />
          ))}
        </StyledTasks>
        <StyledSessionFlowButtons>
          <Button variant="secondary">Auto detect</Button>
          <Button>Start</Button>
        </StyledSessionFlowButtons>
      </StyledSessionFlow>
    </Dialog>
  );
};

export default SessionFlow;
