type Coin = {
  id: string
  crypto: string
  iconUrl: string
  price: number
  change: number // percentage
  volumeLastMonth: number
}

type CoinIconDTO = {
  asset_id: string
  url: string
}

type CoinChangeDTO = {
  time: string
  asset_id_base: string
  asset_id_quote: string
  rate: number
}

type CoinDTO = {
  asset_id: string
  name: string
  type_is_crypto: number 
  data_quote_start: string
  data_quote_end: string
  data_orderbook_start: string
  data_orderbook_end: string
  data_trade_start: string
  data_trade_end: string
  data_symbols_count: number 
  volume_1hrs_usd: number 
  volume_1day_usd: number 
  volume_1mth_usd: number 
  price_usd: number 
  id_icon: string
  data_start: string
  data_end: string
}

type CoinsContextType = {
  coins: Coin[]
  /*
    addCoin
    removeCoin
    ...
  */
}

export type { Coin, CoinsContextType, CoinIconDTO, CoinChangeDTO, CoinDTO }
