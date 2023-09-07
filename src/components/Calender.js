import React, { useState } from "react";
import Calendar from "react-calendar";
import "../style/calender.css";

const Calender = () => {
  const [date, setDate] = useState(new Date());
  const [eventName, setEventName] = useState("");
  const [events, setEvents] = useState([]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleSubmit = () => {
    if (eventName && date) {
      const newEvent = { eventName, date };
      setEvents([...events, newEvent]);
      setEventName("");
    }
  };

  const tileContent = ({ date }) => {
    const eventList = events
      .filter((event) => event.date.toDateString() === date.toDateString())
      .map((event, index) => event.eventName);

    return eventList.length > 0 ? (
      <div style={{ position: "absolute" }}>
        <br />
        {eventList.map((eventName, index) => (
          <p className="event-para" key={index}>
            {eventName}
          </p>
        ))}
      </div>
    ) : null;
  };
  return (
    <>
      <div className="container">
        <p className="mb-0">Calendar Type</p>
        <div className="d-flex gap-4 mb-3">
          <input
            type="text"
            className="input-calender"
            placeholder="Enter eventname"
            value={eventName}
            onChange={handleEventNameChange}
          />
          <input
            type="date"
            className="input-calender"
            value={date.toISOString().split("T")[0]}
            onChange={(e) => setDate(new Date(e.target.value))}
          />
          <button onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
        <Calendar
          value={date}
          onChange={handleDateChange}
          tileContent={tileContent}
        />
      </div>
    </>
  );
};

export default Calender;
