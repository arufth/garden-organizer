import { NavBar, NoGrowLog } from '../components'
import { AddNewEntry, GroLogTable } from './components'
import './TableView.css'
import { useFilteredGrowLog } from '../hooks'

export const TableView: React.FC = () => {
  const growLog = useFilteredGrowLog()
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
