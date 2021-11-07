import React from "react";

export default function WaterFountainRow(props) {
  const building = props.building;
  const data = {
    urgency: building.urgency,
    location: building.name,
    greens: 0,
    yellows: 0,
    reds: 0
  };

  building.waterFountains.forEach(wf => {
    if(wf.status === "GREEN") data.greens++;
    if(wf.status === "YELLOW") data.yellows++;
    if(wf.status === "RED") data.reds++;
  });
  
  return <tr>
    <td>{props.index + 1}</td> 
    <td>{data.location}</td>
    <td>{data.greens}</td>
    <td>{data.yellows}</td>
    <td>{data.reds}</td>
  </tr>
}