import { useSelector } from 'react-redux'
import type { RootState } from '../store'

export const useGardenSelector = useSelector.withTypes<RootState>()
