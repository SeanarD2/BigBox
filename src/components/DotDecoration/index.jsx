import React, { useEffect, useState } from "react";

function DotDecoration(props) {
  console.log(props);

  const [totalKolom, setTotalKolom] = useState([]);

  useEffect(() => {
    setTotalKolom([]);

    for (let i = 0; i < props.kolom; i++) {
      totalKolom.push(i);
    }
  }, []);

  return totalKolom.length > 1 ? (
    <div className="dekorasi">
      {totalKolom.map((ele, index) => (
        <div className="dotDecoration" key={index}>
          {" "}
        </div>
      ))}
    </div>
  ) : null;
}

export default DotDecoration;
