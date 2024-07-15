import { NavLink } from 'react-router-dom'
import './ViewLink.css'

interface Props {
  link: string
}

export const ViewLink: React.FC<Props> = ({ link }) => {
  return (
    <NavLink
      className={({ isActive }) => isActive ? 'active' : ''}
      to={`/garden/${link}-view`}
    >
      {`${link.charAt(0).toUpperCase() + link.slice(1)} view`}
    </NavLink>
  )
}
