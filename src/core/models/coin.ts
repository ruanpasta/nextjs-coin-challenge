type Coin = {
  id: string
  crypto: string
  iconUrl: string
  price: number
  change: number // percentage
  volumeLastMonth: number
}

type CoinsContextType = {
  coins: Coin[]
  /*
    addCoin
    removeCoin
    ...
  */
}

export type { Coin, CoinsContextType }
