import { useDispatch } from "react-redux";
import { countDown, countUp, setTarget } from "../store/reducers/counter";

const Left1 = () => {
  console.log("Rendering : Left1");

  return (
    <div>
      Left1
      <Left2 />
    </div>
  );
};

const Left2 = () => {
  console.log("Rendering : Left2");

  return (
    <div>
      Left2
      <Left3 />
    </div>
  );
};

/* 
  useDispatch : Redux State를 변경할 수 있는, dispatch 함수 리턴
  countDown, countUp, setTarget : dispact에 넣을 Action들. (변경 방법)
*/

function Left3(props: any) {
  console.log("Rendering : Left3");

  const dispatch = useDispatch();

  const upEvent = () => {
    dispatch(countUp());
    console.log("Event : Left3에서 +버튼 클릭");
  };

  const downEvent = () => {
    dispatch(countDown());
    console.log("Event : Left2에서 -버튼 클릭");
  };

  const setEvent = (num: number) => {
    dispatch(setTarget(num));
    console.log(`Event : Left3에서 Set ${num}버튼 클릭`);
  };

  return (
    <div>
      Left3 : &nbsp;
      <button onClick={upEvent}>+</button>
      <button onClick={downEvent}>-</button>
      <button onClick={() => setEvent(5)}>Set 5</button>
    </div>
  );
}

export default Left1;
