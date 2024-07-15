import { NavBar, NoGrowLog } from '../components'
import { AddNewEntry, GroLogTable } from './components'
import { useContext } from 'react'
import { GardenContext } from '../context'
import './TableView.css'

export const TableView: React.FC = () => {
  const { growLog } = useContext(GardenContext)
  return (
    <>
      <NavBar />
      <section className='table-view-section'>
        <AddNewEntry />

        {
        growLog.length === 0
          ? <NoGrowLog />
          : <GroLogTable />
        }
      </section>

    </>
  )
}
