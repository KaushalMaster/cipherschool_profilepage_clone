import React from "react";
import Modal from "./Popup";

function Contributions() {
  const contributions = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1],
  ];

  const colors = ["#EEEEEE", "#D6E685", "#8CC665", "#44A340", "#1E6823"];
  return (
    <div>
      {contributions.map((week, i) => (
        <div key={i} style={{ display: "flex" }}>
          {week.map((count, j) => (
            <div
              key={j}
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: colors[count],
                marginRight: "1px",
              }}
            />
          ))}
        </div>
      ))}

      <Modal />
    </div>
  );
}

export default Contributions;
