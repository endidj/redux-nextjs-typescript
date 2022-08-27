import { useSelector } from "react-redux";
import { CounterState } from "../store/reducers/counter";
import { ReducerType } from "../store/reducers/rootReducer";
const Right1 = () => {
  console.log("Rendering : Right1");

  return (
    <div>
      Right1
      <Right2 />
    </div>
  );
};

const Right2 = () => {
  console.log("Rendering : Right2");

  return (
    <div>
      Right2
      <Right3 />
    </div>
  );
};

/*
    useSelector : store의 전역상태 가져오는방법 (구독하는 방법)
    CounterState : counter리듀서의 타입
    ReducerType : 리듀서의 타입
*/
const Right3 = () => {
  console.log("Rendering : Right3");

  const counter: CounterState = useSelector(
    (state: ReducerType) => state.counter
  );

  return (
    <div>
      Right3 : {counter.value}
      <br />
    </div>
  );
};

export default Right1;
