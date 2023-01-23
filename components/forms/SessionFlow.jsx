import React, { useState } from "react";
import Input from "./Input";

import styled from "styled-components";

const StyledTask = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const StyledTimeInput = styled(Input)`
  width: 4.6rem;
  text-align: center;
`;

const SessionFlow = () => {
  const [description, setDescription] = useState([""]);
  const [time, setTime] = useState([""]);
  const [timeoutDescription, setBreakDescription] = useState([""]);
  const [timeoutTime, setBreakTime] = useState([""]);
  const [timeoutIndex, setBreakIndex] = useState(-1);
  const [timeoutHover, setBreakHover] = useState(false);
  const [timeouts, setTimeouts] = useState([{ description: "", time: "" }]);
  const [start, setStart] = useState(false);

  const handleDescriptionBlur = (e, index) => {
    if (e.target.value.trim() !== "") {
      setDescription([...description, ""]);
    }
  };

  const handleDescriptionChange = (e, index) => {
    const newDescription = [...description];
    newDescription[index] = e.target.value;
    setDescription(newDescription);
  };

  const handleTimeChange = (e, index) => {
    const newTime = [...time];
    newTime[index] = e.target.value;
    setTime(newTime);
  };

  const handleTimeoutDescriptionChange = (e, index) => {
    const newBreakDescription = [...breakDescription];
    newBreakDescription[index] = e.target.value;
    setBreakDescription(newBreakDescription);
  };

  const handleTimeoutTimeChange = (e, index) => {
    const newBreakTime = [...breakTime];
    newBreakTime[index] = e.target.value;
    setBreakTime(newBreakTime);
  };

  const addTimeout = (index) => {
    setBreakIndex(index);
  };

  const removeTimeout = (breakIndex) => {
    const newBreaks = [...breaks];
    newBreaks.splice(breakIndex, 1);
    setBreaks(newBreaks);
  };

  const handleAutoGenerate = () => {
    // logic to automatically generate tasks
  };

  const handleStart = () => {
    setStart(true);
  };

  return (
    <div>
      {description.map((task, index) => (
        <div key={index}>
          <StyledTask>
            <Input
              type="text"
              value={description[index]}
              onChange={(e) => handleDescriptionChange(e, index)}
              onBlur={(e) => handleDescriptionBlur(e, index)}
              placeholder="Description"
            />
            <StyledTimeInput
              type="text"
              value={time[index]}
              onChange={(e) => handleTimeChange(e, index)}
              placeholder="HH:MM"
            />
          </StyledTask>
          {timeouts.map((timeout, timeoutIndex) => (
            <StyledTask key={timeoutIndex}>
              <Input
                type="text"
                value={timeout.description}
                onChange={(e) => handleTimeoutDescriptionChange(e, breakIndex)}
                placeholder="Break"
                disabled
              />
              <StyledTimeInput
                type="text"
                value={timeout.time}
                onChange={(e) => handleTimeoutTimeChange(e, breakIndex)}
                placeholder="HH:MM"
              />
            </StyledTask>
          ))}
          <button
            onClick={() =>
              setTimeouts([...timeouts, { description: "", time: "" }])
            }
          >
            Add Break
          </button>
        </div>
      ))}
      <button onClick={handleAutoGenerate}>Auto Generate</button>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default SessionFlow;
