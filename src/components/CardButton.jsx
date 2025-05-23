import React from "react";

function CardButton({ text }) {
  return (
    <span className="rounded-2xl w-fit py-1 px-2 mb-2 ml-2 border-1 border-primary hover:border-secondary bg-primary/70 ">
      {text}
    </span>
  );
}

export default CardButton;
