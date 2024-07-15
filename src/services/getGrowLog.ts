import { growLog } from '../../growLog.json'

// TODO: get from localStorage or DB in the future
export const getGrowLog = (): typeof growLog => {
  return growLog
}
