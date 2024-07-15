import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { FormGrowLog } from '../components'
import { TableView } from '../TableView'
import { ElementView } from '../ElementView'

const router = createBrowserRouter([
  {
    path: 'garden/table-view',
    element: <TableView />
  },
  {
    path: 'garden/table-view/plant/edit/:plantId',
    element: <FormGrowLog />
  },
  {
    path: 'garden/element-view',
    element: <ElementView />
  },
  {
    path: 'garden/element-view/plant/edit/:plantId',
    element: <FormGrowLog />
  },
  {
    path: '*',
    element: <Navigate to='/garden/element-view' />
  }
])

export const GardenRouter: React.FC = () => { return <RouterProvider router={router} /> }
