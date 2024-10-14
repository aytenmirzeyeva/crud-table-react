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
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
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
    axios.post(`${BASE_URL}`, inputValues).then((res) => {
      console.log(res.data);
      setInputValues({
        category: "",
        title: "",
        price: "",
      });
    });
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
            value={inputValues.category}
          />
          <Input
            onChange={handleChange}
            placeholder="Enter title..."
            name="title"
            value={inputValues.title}
          />
          <Input
            onChange={handleChange}
            placeholder="Enter price..."
            name="price"
            value={inputValues.price}
          />
          <Button
            className="modal-btn"
            btnText="Send"
            onClick={sendData}
            disabled={
              inputValues.category == "" ||
              inputValues.title == "" ||
              inputValues.price == ""
                ? true
                : false
            }
          />
        </Box>
      </Modal>
    </div>
  );
}
