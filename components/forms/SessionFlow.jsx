import React, { useState } from "react";

import Task from "./Task";
import Dialog from "../Dialog";
import Button from "../Buttons";

import styled from "styled-components";

import { ReactSortable } from "react-sortablejs";

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
    <Dialog title={"Start a quick session"}>
      <StyledSessionFlow>
        <StyledTasks>
          <ReactSortable handle=".handle" animation={150} list={tasks} setList={setTasks}>
            {tasks.map((task, index) => (
                <Task
                  key={index}
                  description={task.description}
                  onChange={(e) => handleChange(e, index)}
                  isBreakPossible={index !== tasks.length - 1}
                />
            ))}
          </ReactSortable>
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
