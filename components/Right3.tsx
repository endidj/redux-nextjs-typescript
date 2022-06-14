import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { countDown, countUp, setTarget } from '../redux/module/counter'

function Right3(props: any) {
  // useDispatch : Redux State를 '변경' 시키는 방법
  const dispatch = useDispatch()

  // dispatch(Action함수)
  const upEvent = useCallback(() => {
    dispatch(countUp())
  }, [dispatch])

  const downEvent = useCallback(() => {
    dispatch(countDown())
  }, [dispatch])

  const targetEvent = useCallback(
    (num: number) => {
      dispatch(setTarget(num))
    },
    [dispatch],
  )

  return (
    <div>
      Right3
      <br />
      <button onClick={upEvent}>+</button>
      <button onClick={downEvent}>-</button>
      <button
        onClick={() => {
          targetEvent(5)
        }}
      >
        To 5
      </button>
    </div>
  )
}

export default Right3
