import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
const Table = ({ thead, products, deleteItem }) => {
  const navigate = useNavigate();

  return (
    <>
      <table>
        <thead>
          {thead.map((item, index) => {
            return (
              <tr key={index}>
                <th>{item.col1}</th>
                <th>{item.col2}</th>
                <th>{item.col3}</th>
                <th>{item.col4}</th>
                <th>{item.col5}</th>
                <th></th>
                <th></th>
              </tr>
            );
          })}
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title.slice(0, 25)}</td>
                <td>{item.description.slice(0, 25)}</td>
                <td>
                  <img src={item.image} alt={item.title} />
                </td>
                <td>{item.price} $</td>
                <td>
                  <IoTrash
                    className="delete-btn"
                    onClick={() => deleteItem(item.id)}
                  />
                </td>
                <td>
                  <FaEye
                    className="view-btn"
                    onClick={() => navigate(`/products/${item.id}`)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
