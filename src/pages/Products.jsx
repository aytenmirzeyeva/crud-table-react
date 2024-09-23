import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import Swal from "sweetalert2";
import Table from "../components/Table";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
const Products = () => {
  const [loader, setLoader] = useState(true);
  const [open, setOpen] = useState(false);

  const thead = [
    {
      col1: "ID",
      col2: "Title",
      col3: "Description",
      col4: "Image",
      col5: "Price",
    },
  ];
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios(`${BASE_URL}`).then((res) => {
      setProducts(res.data);
      setLoader(false);
    });
  }, []);
  const deleteItem = (id) => {
    Swal.fire({
      title: "Are you sure to delete this item?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${BASE_URL}/${id}`).then((res) => console.log(res.data));
        Swal.fire({
          title: "Deleted!",
          text: `Item with ID ${id} has been deleted.`,
          icon: "success",
        });
      }
    });
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="container">
      <Button btnText="Add new item" onClick={handleOpen} />
      <Modal open={open} handleClose={handleClose} />
      {loader ? (
        <Loader />
      ) : (
        <Table thead={thead} products={products} deleteItem={deleteItem} />
      )}
    </div>
  );
};

export default Products;
