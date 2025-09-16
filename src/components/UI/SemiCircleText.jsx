import ReactCurvedText from "react-curved-text";

const SemiCircleText = () => {
  return (
    <ReactCurvedText
      width={370}
      height={300}
      cx={190}
      cy={120}
      rx={100}
      ry={100}
      startOffset={100}
      text="What I've been up to"
      reversed={true}
    />
  );
};

export default SemiCircleText;