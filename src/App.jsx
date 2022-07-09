import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert("今日も良い天気ですね〜〜");
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？ </ColoredMessage>
      <ColoredMessage color="pink">元気です！ </ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
