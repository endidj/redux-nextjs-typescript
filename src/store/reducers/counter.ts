/*
  Ducks 패턴 : 이전엔 타입별로 디렉토리를 나누어 Action, ActionType, Reducer 디렉토리를 
  따로 만들고 관리해서 불편했다. duck패턴은 기능 중심으로 디렉토리를 나누기 때문에, 
  이젠 저 세가지를 한 파일에 만들고 이를 module이라 부른다.
  법칙 1) reducer함수를 reducer()라는 이름으로 export default 해주어야한다.
  법칙 2) 액션 생성 함수를 export 해주어야한다.
  법칙 3) 액션 타입은 리듀서이름/액션타입 으로 해야한다. (타 리듀서와 중복방지) ex: counter/INCREASE
  법칙 4) 액션 타입을 UPPER_SNAKE_CASE(대문자 스네이크 케이스)로 정의하라. ex: SET_TARGET_NUMBER
/*

/*
  액션 타입 선언
  - as const를 붙임으로써, action.type의 값을 추론할 때 
    string이 아닌 count/INCREASE와 같은 실제 문자열 값으로 추론되게 한다.
*/
const INCREASE = "counter/INCREASE" as const; // as const를 붙임으로써, 나중에
const DECREASE = "counter/DECREASE" as const;
const TARGET_NUMBER = "counter/TARGET_NUMBER" as const;

/*
  액션 생성 함수 선언 
  - dispatch함수의 매개변수로 넣어줄 함수. 
  - EX :  dispatch(countUp())
*/
export const countUp = () => {
  return {
    type: INCREASE,
  };
};

export const countDown = () => {
  return {
    type: DECREASE,
  };
};

export const setTarget = (target: number) => {
  return {
    type: TARGET_NUMBER,
    payload: target, // payload : 액션에 부가적으로 필요한 데이터가 있다면 추가
  };
};

export type CounterAction =
  | ReturnType<typeof countUp>
  | ReturnType<typeof countDown>
  | ReturnType<typeof setTarget>;

export interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const reducer = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREASE:
      return { ...state, value: (state.value += 1) };
    case DECREASE:
      return { ...state, value: (state.value -= 1) };
    case TARGET_NUMBER:
      return { ...state, value: action.payload }; // action.payload 로 추가적인 데이터를 받는다.
    default:
      return state;
  }
};

export default reducer;
