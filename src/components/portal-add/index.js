import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl, InputLabel } from "@mui/material";
import ButtonComponent from "../../common/buttonComponent";

const PortalAdd = ({ rows, handlePortalSubmit, handlePortalClose }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleNameChange = (e) => {
    setName((prev) => e.target.value);
  };
  const handleSelectChange = (e) => {
    setStatus((prev) => e.target.value);
  };
  const handleFormSubmitClick = (props) => {
    if (props.type === "submit") {
      if (name && status && status !== "Please Select an Option") {
        let temp = {};
        temp.name = name;
        temp.status = status;
        temp.id = rows.length + 1;
        let finalTemp = [...rows, temp];
        handlePortalSubmit(finalTemp);
      } else return;
    }
    handlePortalClose();
  };
  return (
    <Container>
      <DataInputContainer>
        <Header>Add</Header>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={handleNameChange}
          fullWidth
        />
        <div className="status-container">
          <label>Status</label>
          <select onChange={handleSelectChange}>
            <option>Please Select an Option</option>
            <option>active</option>
            <option>inactive</option>
          </select>
        </div>
        {/* Mui Select not working properly */}

        {/* <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="Status"
            onChange={handleSelectChange}
          >
            <MenuItem value={"active"}>Active</MenuItem>
            <MenuItem value={"inactive"}>InActive</MenuItem>
          </Select>
        </FormControl> */}
      </DataInputContainer>
      <ButtonHolder>
        <ButtonComponent
          type={"submit"}
          handleOnClick={handleFormSubmitClick}
          label="Add"
        />
        <ButtonComponent
          type={"cancel"}
          handleOnClick={handleFormSubmitClick}
          label="Cancel"
        />
      </ButtonHolder>
    </Container>
  );
};

export default PortalAdd;

const Container = styled.div`
  position: absolute;
  width: 30rem;
  height: 30rem;
  z-index: 1000;
  background-color: #fff;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const DataInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  label {
    display: block;
    margin-bottom: 1rem;
  }
  .status-container {
    width: 100%;
  }

  select {
    height: 3rem;
    width: 100%;
    border: solid 1px black;
  }
`;
const ButtonHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Header = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
