import React, { useState } from "react";
import Input from "./Input";

import styled from "styled-components";

const StyledTask = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  width: 32ch;
`;

const StyledChore = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const StyledDescriptionInput = styled(Input)`
  width: 75%;
`;

const StyledTimeInput = styled(Input)`
  width: 25%;
  text-align: center;
`;

const Task = ({ description, onChange }) => {
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
        <StyledDescriptionInput
          type="text"
          name="description"
          placeholder="Describe your chore"
          value={chore.description}
          onChange={handleChange}
        />
        <StyledTimeInput
          type="text"
          name="time"
          placeholder="HH:MM"
          value={chore.time}
          onChange={handleChange}
        />
      </StyledChore>
      {!chore.break.description && (
        <button onClick={toggleBreak}>Add break</button>
      )}
      {chore.break.description && (
        <div>
          <StyledChore>
            <StyledDescriptionInput
              type="text"
              name="break.description"
              value={chore.break.description}
              onChange={handleChange}
              disabled
            />
            <StyledTimeInput
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
    </StyledTask>
  );
};

export default Task;
