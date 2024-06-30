const ProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 14,
    width: "100%",
    backgroundColor: "#d0b7a9",
    borderRadius: 50,
    margin: "50px 0px 0px 0px",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#7b6153",
    borderRadius: "inherit",
    textAlign: "right",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default ProgressBar;
