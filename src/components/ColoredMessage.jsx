//引数の()の段階で分割代入

export const ColoredMessage = ({ color, children }) => {
  const contentStyle = {
    color, // props.が不要。また、Jsの省略記法の使用
    fontSize: "20px"
  };

  //↓ props.が不要
  return <p style={contentStyle}>{children}</p>;
};
