import React from "react";

const IconBack: React.FC<{
  className?: string;
}> = (props) => (
  <svg
    className={props.className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5659 5.56564C11.8783 5.25322 11.8783 4.74669 11.5659 4.43427C11.2535 4.12185 10.7469 4.12185 10.4345 4.43427L3.43451 11.4343C3.12209 11.7467 3.12209 12.2532 3.43451 12.5656L10.4345 19.5656C10.7469 19.8781 11.2535 19.8781 11.5659 19.5656C11.8783 19.2532 11.8783 18.7467 11.5659 18.4343L5.93157 12.8H20.0002C20.442 12.8 20.8002 12.4418 20.8002 12C20.8002 11.5581 20.442 11.2 20.0002 11.2H5.93157L11.5659 5.56564Z"
      fill="currentColor"
    />
  </svg>
);

export default IconBack;