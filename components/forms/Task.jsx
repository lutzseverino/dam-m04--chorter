import React, { useState } from "react";
import Input from "./Input";
import ListButton from "../ListButton";

import styled from "styled-components";
import { css } from "styled-components";

const StyledTask = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const StyledChore = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const descInput = css`
  max-width: 256px;
`;

const timeInput = css`
  max-width: 96px;
  text-align: center;
`;

const StyledChoreDescInput = styled(Input)`
  ${descInput}
`;

const StyledChoreTimeInput = styled(Input)`
  ${timeInput}
`;

const StyledBreakDescInput = styled(Input)`
  ${descInput}
  font-size: 0.75rem;
`;

const StyledBreakTimeInput = styled(Input)`
  ${timeInput}
  font-size: 0.75rem;
`;

const Task = ({ description, onChange, isBreakPossible }) => {
  const [chore, setChore] = useState({
    description: description,
    time: "",
    break: {
      description: "",
      time: "",
    },
  });

  React.useEffect(() => {
    setChore({
      ...chore,
      description: description,
    });
  }, [description]);

  const handleChange = (e) => {
    setChore({
      ...chore,
      [e.target.name]: e.target.value,
    });

    onChange(e);
  };

  const toggleBreak = () => {
    setChore({
      ...chore,
      break: {
        description: chore.break.description === "Break" ? "" : "Break",
        time: "",
      },
    });
  };

  return (
    <StyledTask>
      <StyledChore>
        <svg xmlns="http://www.w3.org/2000/svg" className="handle" height="24" width="24"><path d="M5 11q-.425 0-.713-.288Q4 10.425 4 10t.287-.713Q4.575 9 5 9h14q.425 0 .712.287Q20 9.575 20 10t-.288.712Q19.425 11 19 11Zm0 4q-.425 0-.713-.288Q4 14.425 4 14t.287-.713Q4.575 13 5 13h14q.425 0 .712.287.288.288.288.713t-.288.712Q19.425 15 19 15Z"/></svg>
        <StyledChoreDescInput
          type="text"
          name="description"
          placeholder="Describe your chore"
          value={chore.description}
          onChange={handleChange}
        />
        <StyledChoreTimeInput
          type="text"
          name="time"
          placeholder="HH:MM"
          value={chore.time}
          onChange={handleChange}
        />
      </StyledChore>
      {isBreakPossible && (
        <>
          {!chore.break.description && (
            <ListButton onClick={toggleBreak}>Add break</ListButton>
          )}
          {chore.break.description && (
            <div>
              <StyledChore>
                <StyledBreakDescInput
                  type="text"
                  name="break.description"
                  value={chore.break.description}
                  onChange={() => {}}
                  disabled
                />
                <StyledBreakTimeInput
                  type="text"
                  name="break.time"
                  placeholder="HH:MM"
                  value={chore.break.time}
                  onChange={handleChange}
                />
                <button onClick={toggleBreak}>X</button>
              </StyledChore>
            </div>
          )}
        </>
      )}
    </StyledTask>
  );
};

export default Task;
