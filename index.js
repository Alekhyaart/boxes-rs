const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <div className={`main-container ${className}`}>{text}</div>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="yellow" text="small" />
      <Box className="blue" text="medium" />
      <Box className="pink" text="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
