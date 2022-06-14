import type { NextPage } from 'next'
import Left1 from '../components/Left1'
import Right1 from '../components/Right1'

const Home: NextPage = () => {
  return (
    <div id="container">
      &nbsp; Root !!
      <div className="grid">
        <Left1 />
        <Right1 />
      </div>
    </div>
  )
}

export default Home
