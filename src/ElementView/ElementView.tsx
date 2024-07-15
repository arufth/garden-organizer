import { NavBar, NoGrowLog } from '../components'
import { GrowLogElementView } from './components'

import './ElementView.css'
import { useContext } from 'react'
import { GardenContext } from '../context'

export const ElementView: React.FC = () => {
  const { growLog } = useContext(GardenContext)

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
