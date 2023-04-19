import type { NextApiRequest, NextApiResponse } from 'next'

import coins from '../../data/coins.json'
import coinsIcons from '../../data/coinsIcons.json'
import exchanges from '../../data/exchangesrates.json'

type CoinsData = {
  crypto: string
  iconUrl: string
  price: number
  change: number // percentage
}

const timer = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time))

/*
  Simula uma requisicao HTTP para buscar as Coins
  Para pegar as coins foi usado a Requisicao na CoinAPI:
  https://rest.coinapi.io/v1/assets?filter_asset_id=BTC,ETH,USDT,BNB,USDC,XRP,ADA,DOGE,MATIC,SOL
*/
const getCoins = async () => {
  await timer(500)
  return coins
}

/*
  Simula uma requisicao HTTP para buscar os Icones das coins
  Para pegar os icones foi usado a Requisicao na CoinAPI:
  https://rest.coinapi.io/v1/assets/icons/32

  Tambem seria possivel pegar as os icones pegando a `${urlPadrao}/${id_coin}.png`
  porem algumas coins nao retornaram icone,
  e conseguentemente na Requisicao das moedas nao retorna o id_coin,
  que eh usado para buscar a url da moeda
*/
const getCoinsIcons = async () => {
  await timer(250)
  return coinsIcons
}

/*
  Simula uma requisicao HTTP para buscar as variacoes das moedas
  Eh possivel fazer essa requisicao usando a Requisicao na CoinAPI:
  https://rest.coinapi.io/v1/exchangerate/XRP/USD

  Porem teriam que ser feitas varias requests
*/
const getCoinsChange = async () => {
  await timer(250)
  return exchanges
}

/*
  Simula requisicoes como um JsonServer.
  Para a maioria das requisicoes nesta simulacao,
  o melhor seria usar WebSockets, para ter as informacoes em tempo real com uma performance melhor
  sem a nescessidade de ficar fazendo varias requisicoes HTTP
*/
export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<CoinsData[]>
) {
  try {
    const responseCoins = await getCoins()
    const responseCoinsIcons = await getCoinsIcons()
    const responseCoinsChange = await getCoinsChange()

    const getIcon = (coin: any) =>
      responseCoinsIcons.find((coinIcon) => coinIcon.asset_id === coin.asset_id)
        ?.url || ''

    /* 
    Calculo para pegar a variacao diaria
    ((Preco atual - preco antigo) / preco antigo) * 100
  */
    const getCoinChange = (coin: any) => {
      const currentPrice = coin.price_usd
      const oldPrice =
        responseCoinsChange.find(
          (coinChange) => coinChange.asset_id_base === coin.asset_id
        )?.rate || 0

      const change = ((currentPrice - oldPrice) / oldPrice) * 100

      return change
    }

    const data = responseCoins.map((coin) => ({
      crypto: coin.name,
      iconUrl: getIcon(coin),
      price: coin.price_usd,
      change: getCoinChange(coin),
    }))

    return res.status(200).json(data)
  } catch (e) {
    return new Error('Failed to get coins')
  }
}
