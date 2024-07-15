import { SearchBar, ViewLinks } from '../'
import './NavBar.css'

// TODO: Implement several filters

export const NavBar: React.FC = () => {
  return (
    <>
      <header>
        <h1>GARDEN ORGANIZER</h1>

        <section>
          <ViewLinks />
        </section>

        <section>
          <SearchBar />
        </section>
      </header>
    </>
  )
}
