import * as React from "react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Input from "../components/Input";
import Button from "../components/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, handleClose }) {
  const [inputValues, setInputValues] = useState({
    category: "",
    title: "",
    price: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setInputValues((values) => {
      return { ...values, [name]: value };
    });
  }
  const sendData = () => {
    axios.post(`${BASE_URL}`, inputValues).then((res) => console.log(res.data));
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Input
            onChange={handleChange}
            placeholder="Enter category..."
            name="category"
          />
          <Input
            onChange={handleChange}
            placeholder="Enter title..."
            name="title"
          />
          <Input
            onChange={handleChange}
            placeholder="Enter price..."
            name="price"
          />
          <Button btnText="Send" onClick={sendData} />
        </Box>
      </Modal>
    </div>
  );
}
