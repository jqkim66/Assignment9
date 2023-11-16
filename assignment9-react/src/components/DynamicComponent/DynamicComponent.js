import React from "react";

function DynamicComponent({ items }) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default DynamicComponent;
