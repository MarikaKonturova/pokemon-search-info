import { useEffect, useState } from "react";

type TProgressBar = {
  className: string;
  completed: string;
};

const ProgressBar = (props: TProgressBar) => {
  const { className, completed } = props;
  const [styleCompleted, setStyleCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setStyleCompleted(+completed), 500);
  }, [completed]);
  const containerStyles = {
    height: 20,

    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    transition: "width 1s ease-in-out",
    width: `${styleCompleted}%`,
    maxWidth: `100%`,
    borderRadius: "inherit",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles} className={className}>
        <span>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
