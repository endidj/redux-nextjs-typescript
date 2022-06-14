import { useSelector } from 'react-redux'
import { CounterState } from '../redux/module/counter'
import { ReducerType } from '../redux/module/rootReducer'

const Left3 = () => {
  // useSelector :  store의 전역상태 가져오는방법 (구독하는 방법)
  const counter: CounterState = useSelector(
    (state: ReducerType) => state.counter,
  )

  console.log('Left3 컴포넌트 렌더링 완료')

  return (
    <div style={{ fontSize: '30px', color: 'green' }}>
      Left3 : {counter.value}
    </div>
  )
}

export default Left3
