import MouseEventDiv from "./MouseEventDiv";
import "./MouseEvent.scss";

const MouseEvent = () => {
  return (
    <div className="mouseMove__container">
      <MouseEventDiv shape="circle" background="red" />
      <MouseEventDiv shape="square" background="yellow" />
      <MouseEventDiv shape="rectangle" background="green" />
      <MouseEventDiv shape="triangle" background="blue" />
    </div>
  );
};

export default MouseEvent;
