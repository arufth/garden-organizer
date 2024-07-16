import { EditSvg, DeleteSvg } from '../../../icons'
import { useEditGrowLog, useFilteredGrowLog, useGardenDispatch } from '../../../hooks'
import { HEADER_TABLE } from '../../../../constants'
import { removeLog } from '../../../garden'
import './GrowLogTable.css'

export const GroLogTable: React.FC = () => {
  const growLog = useFilteredGrowLog()
  const { editGrowLog } = useEditGrowLog()
  const dispatch = useGardenDispatch()

  return (
    <table>
      <caption>Grow Log</caption>
      <thead>
        <tr>
          {
            HEADER_TABLE.map(header => (
              <th key={header}>{header}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          growLog.map(log => (
            <tr key={log.id}>
              <th>
                <img src={log.cover} alt={log.name} />
              </th>
              <th>{log.name}</th>
              <td>{log.datePlanted}</td>
              {
                log.harvestDate !== ''
                  ? <td>{log.harvestDate}</td>
                  : <td>----</td>
              }
              <td>
                <button
                  onClick={() => editGrowLog(log.id)}
                  className='edit-btn'
                >
                  <EditSvg />
                </button>
              </td>
              <td>
                <button
                  onClick={() => dispatch(removeLog(log.id))}
                  className='delete-btn'
                >
                  <DeleteSvg />
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
