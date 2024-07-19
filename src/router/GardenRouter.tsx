import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { FormGrowLog } from '../components'
import { TableView } from '../TableView'
import { ElementView } from '../ElementView'
import { useEffect } from 'react'
import { useGardenSelector } from '../hooks'
import { saveLocalStorage } from '../helper'

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

export const GardenRouter: React.FC = () => {
  const state = useGardenSelector(state => state.garden)
  useEffect(() => {
    saveLocalStorage(state)
  }, [state])
  return <RouterProvider router={router} />
}
