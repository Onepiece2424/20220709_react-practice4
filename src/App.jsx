import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert("今日も良い天気ですね〜〜");
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColoredMessage color="blue" message="お元気ですか？" />
      <ColoredMessage color="pink" message="元気です！" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};
