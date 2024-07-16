import { NavBar, NoGrowLog } from '../components'
import { GrowLogElementView } from './components'

import './ElementView.css'
import { useFilteredGrowLog } from '../hooks'

export const ElementView: React.FC = () => {
  const growLog = useFilteredGrowLog()

  return (
    <>
      <NavBar />
      <section className='element-view-section'>
        <GrowLogElementView />
      </section>
      {growLog.length === 0 && <NoGrowLog />}
    </>

  )
}
