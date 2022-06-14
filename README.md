1. yarn create next-app . --typescript

2. yarn add redux react-redux next-redux-wrapper

3. yarn add -D redux-devtools-extension @types/react-redux @types/next-redux-wrapper

4) 보는 순서

1. pages/\_app.tsx 에 reduxWrapper 적용한 모습
2. pages/index.tsx와 component/ 디렉토리 안에있는 컴포넌트들 + useSelector(구독하기) + useDispatch(변경하기)
3. redux/ 디렉토리 안에서 작동하는 모습
