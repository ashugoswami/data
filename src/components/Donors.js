import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";

const Donors = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Make the API request when the component mounts
    axios
      .get("https://run.mocky.io/v3/5ac8398b-75e4-4200-a98c-7b81e39357fb")
      .then((response) => {
        // Handle successful response
        setData(response.data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        // Handle error
        setData([]);
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
      <div className="container">
        <p className="mb-0">Donors</p>
        <p>Donors Data</p>
        <table class="table" style={{ height: "80vh", width: "75vw" }}>
          <thead>
            <tr>
              <th scope="col" className="tables-headings">
                User Id
              </th>
              <th scope="col" className="tables-headings">
                Title
              </th>
              <th scope="col" className="tables-headings">
                URL
              </th>
              <th scope="col" className="tables-headings">
                Images
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.user_id}>
                <td>{item.user_id}</td>
                <td>{item.title}</td>
                <td>{item.url}</td>
                <td>
                  <img alt="logo" src={item.image} height={20} width={20} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </>
  );
};

export default Donors;
