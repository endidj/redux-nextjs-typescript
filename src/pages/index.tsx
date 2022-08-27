import type { NextPage } from "next";
import Left from "../components/Left";
import Right from "../components/Right";

const Home: NextPage = () => {
  console.log("Rendering : Root");

  return (
    <div id="container">
      &nbsp; Root Component
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Home;
