import { useGardenActions, useGardenSelector } from '../../hooks'
import './SearchBar.css'

export const SearchBar: React.FC = () => {
  const { changeCurrentSearch } = useGardenActions()
  const { currentSearch } = useGardenSelector(state => state.garden)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    changeCurrentSearch(event.target.value)
  }

  return (
    <form className='search-bar'>
      <label>
        <span>SEARCH PLANT</span>
        <input
          type='text'
          placeholder='Carrot giant'
          name='name'
          value={currentSearch}
          onChange={onChange}
        />
      </label>
    </form>
  )
}
