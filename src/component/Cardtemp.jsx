import React from "react";
function Cardtemp({ title, img }) {
  return (
    <div className="block text-left">
      <img className="h-auto max-w-full rounded-lg" src={img} alt="" />
      <p>{title}</p>
    </div>
  );
}
export default Cardtemp;
