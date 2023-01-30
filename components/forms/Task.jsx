import React, { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";

import Input from "../actions/Input";
import Button from "../actions/Button";
import ListButton from "../actions/ListButton";

const StyledTask = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledChore = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
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
`;

const StyledBreakTimeInput = styled(Input)`
  ${timeInput}
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
                  size="small"
                  type="text"
                  name="break.description"
                  value={chore.break.description}
                  onChange={() => {}}
                  disabled
                />
                <StyledBreakTimeInput
                  size="small"
                  type="text"
                  name="break.time"
                  placeholder="HH:MM"
                  value={chore.break.time}
                  onChange={handleChange}
                />
                <Button size="small" variant="secondary" onClick={toggleBreak}>
                  X
                </Button>
              </StyledChore>
            </div>
          )}
        </>
      )}
    </StyledTask>
  );
};

export default Task;
