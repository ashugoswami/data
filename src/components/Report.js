import React, { useState } from "react";
import "../style/report.css";

const Report = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <div className="container report">
        <p>Reports</p>
        <p className="fw-bold mb-0 mx-2">Reports</p>
        <div className="mb-3 mt-2">
          <select
            className="form-select mb-3"
            aria-label="Default select example"
          >
            <option selected>Select report type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="col-12 d-flex gap-4">
            <input
              type="date"
              className="report-date mb-3"
              value={date.toISOString().split("T")[0]}
              onChange={(e) => setDate(new Date(e.target.value))}
            />
            <input
              type="date"
              className="report-date mb-3"
              value={date.toISOString().split("T")[0]}
              onChange={(e) => setDate(new Date(e.target.value))}
            />
          </div>
          <div className="col-12 d-flex gap-4">
            <select className="form-select" aria-label="Default select example">
              <option selected>Agency</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select className="form-select" aria-label="Default select example">
              <option selected>Format</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <p>Use Date</p>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Collected
          </label>
        </div>
        <div className="btn-box mt-3">
          <button className="sumbit-btn">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Report;
