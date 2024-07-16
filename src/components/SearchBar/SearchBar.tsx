import { useGardenDispatch, useGardenSelector } from '../../hooks'
import { changeCurrentSearch } from '../../garden'
import './SearchBar.css'

export const SearchBar: React.FC = () => {
  const dispatch = useGardenDispatch()
  const { currentSearch } = useGardenSelector(state => state.garden)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeCurrentSearch(event.target.value))
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
