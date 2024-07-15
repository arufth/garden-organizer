import './NoGrowLog.css'

export const NoGrowLog: React.FC = () => {
  return (
    <div className='no-results-div'>
      <h2 className='empty-grow-log'>
        THERE IS NO GROW LOG
      </h2>
      <h2 className='sub-empty-grow-log'>
        But you can add one.
      </h2>
    </div>
  )
}
