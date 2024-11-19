import { useState } from "react";

const ListGroup = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const items = ["Neymar Jr", "Coutinho", "Pogba", "Hazard", "Sterling", "Jesus"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? (
        <p>No items Found</p>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={`list-group-item ${selectedIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => setSelectedIndex(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListGroup;
