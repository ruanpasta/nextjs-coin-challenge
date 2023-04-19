import { createContext, useContext } from 'react'
import { CoinsContextType } from '../models/coin'

export const CoinsContext = createContext<CoinsContextType>({
  coins: [],
})

export const useCoinsContext = () => useContext<CoinsContextType>(CoinsContext)
