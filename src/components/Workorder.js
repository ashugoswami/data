import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/workorder.css";
import Pagination from "./Pagination";

const Workorder = () => {
  const [workdata, setWorkdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make the API request when the component mounts
    axios
      .get("https://run.mocky.io/v3/4d4be53c-5d76-4dd7-9da0-e5a0bc2f8c3f")
      .then((response) => {
        // Handle successful response
        setWorkdata(response.data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        // Handle error
        setWorkdata([]);
        setLoading(false);
        setError(error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      {" "}
      <div>
        <div className="container">
          <p className="mb-0">Work order</p>
          <button className="sumbit-btn" style={{ width: "120px" }}>
            Create Order
          </button>
          <table class="table" style={{ width: "75vw" }}>
            <thead>
              <tr>
                <th scope="col" className="tables-headings">
                  DONOR
                </th>
                <th scope="col" className="tables-headings">
                  PANELS
                </th>
                <th scope="col" className="tables-headings">
                  BARCODES
                </th>
                <th scope="col" className="tables-headings">
                  SOURCES
                </th>
                <th scope="col" className="tables-headings">
                  STATUS
                </th>
                <th scope="col" className="tables-headings">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {workdata.map((item, index) => (
                <tr key={index}>
                  <td>{item.donor}</td>
                  <td>{item.panels}</td>
                  <td>{item.barcodes}</td>
                  <td>{item.sources}</td>
                  <td>{item.status}</td>
                  <td>
                    <i class="bi bi-pencil"></i> <i class="bi bi-trash"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default Workorder;
