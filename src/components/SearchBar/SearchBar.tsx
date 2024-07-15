import './SearchBar.css'
import { useContext } from 'react'
import { GardenContext } from '../../context'

export const SearchBar: React.FC = () => {
  const { changeSearch, search } = useContext(GardenContext)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    changeSearch(event.target.value)
  }

  return (
    <form className='search-bar'>
      <label>
        <span>SEARCH PLANT</span>
        <input
          type='text'
          placeholder='Carrot giant'
          name='name'
          value={search}
          onChange={onChange}
        />
      </label>
    </form>
  )
}
