export const ColoredMessage = (props) => {
  //propsを分割代入
  const { color, children } = props;

  const contentStyle = {
    color, // props.が不要。また、Jsの省略記法の使用
    fontSize: "20px"
  };

  //↓ props.が不要
  return <p style={contentStyle}>{children}</p>;
};
