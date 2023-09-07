import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Pagination = () => {
  const [newdoc, setNewdoc] = useState([]);
  const [paginationObj, setPaginationObj] = useState({
    totalRecords: 0,
    currentPage: 0,
    startRecordIndex: 0,
    endRecordIndex: 0,
    totalPages: 0,
    records: [],
  });

  const calculatePagination = (pageNumber) => {
    let records = newdoc || [];
    let tempPaginationObj = {
      totalRecords: records.length,
      currentPage: pageNumber,
      startRecordIndex: Math.max(10 * pageNumber - 9, 1),
      endRecordIndex: Math.min(10 * pageNumber, records.length),
      totalPages: Math.ceil(records.length / 10),
      records: records?.slice((pageNumber - 1) * 10, pageNumber * 10),
    };
    setPaginationObj({ ...tempPaginationObj });
  };
  return (
    <>
      {" "}
      <div className="d-flex gap-4 justify-content-end">
        <p
          className="mt-2 "
          style={{
            color: "#333333",
            display: "flex",
          }}
        >
          <p className="table-item mb-1">Rows per page</p>
          <select
            // value={pageSize}
            // onChange={(e) => {
            //   size(Number(e.target.value));
            // }}
            className="Items-per-page ms-1"
            style={{ border: "none", marginBottom: "5px" }}
          >
            {[10, 20, 30].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </p>

        <div className="custom-pagination">
          <div className="range-text">
            {`${paginationObj.startRecordIndex} - ${paginationObj.endRecordIndex} of ${paginationObj.totalRecords}`}
          </div>
          <div className="pagination-buttons">
            <div
              className={`pagination-button ${
                paginationObj.currentPage === 1 ? "disabled" : ""
              }`}
              onClick={() => calculatePagination(paginationObj.currentPage - 1)}
            >
              <i class="bi bi-chevron-bar-left"></i>
              <BsChevronLeft />
            </div>
            <div className="pagination-current-page">
              {paginationObj.currentPage}
            </div>
            <div
              className={`pagination-button ${
                paginationObj.totalPages === 0 ||
                paginationObj.totalPages === paginationObj.currentPage
                  ? "disabled"
                  : ""
              }`}
              onClick={() => calculatePagination(paginationObj.currentPage + 1)}
            >
              <BsChevronRight />
              <i class="bi bi-chevron-bar-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
