import { useCoinsContext } from '@/core/contexts/coinsContext'
import { Coin } from '@/core/models/coin'
import { TableComponent } from '@/libs'
import { ButtonComponent } from '@/libs/components'
import {
  CryptosSectionContainer,
  CryptosSectionContent,
  CryptosSectionContentLabel,
  CryptosSectionContentNegativeChange,
  CryptosSectionContentPositiveChange,
} from '@/styles/components/cryptosSection'
import Image from 'next/image'

const expandedColumns = ['price', 'change']

export default function CryptosSection() {
  const { coins } = useCoinsContext()

  const getCrypto = (coin: Coin) => {
    if (coin.iconUrl) {
      return (
        <CryptosSectionContentLabel>
          <Image src={coin.iconUrl} alt='Crypto icon' width={32} height={32} />
          <span>{coin.crypto}</span>
        </CryptosSectionContentLabel>
      )
    }
    return coin.crypto
  }

  const getCoinPrice = (coin: Coin) =>
    Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(coin.price)

  const getChange = (coin: Coin) => {
    const info = `${coin.change.toFixed(2)}%`
    if (coin.change > 0)
      return (
        <CryptosSectionContentPositiveChange>
          {info}
        </CryptosSectionContentPositiveChange>
      )
    return (
      <CryptosSectionContentNegativeChange>
        {info}
      </CryptosSectionContentNegativeChange>
    )
  }

  const getTrade = () => (
    <ButtonComponent variant='contained' color='success' size='medium'>Buy</ButtonComponent>
  )

  const data = coins
    .sort((a, b) => b.volumeLastMonth - a.volumeLastMonth)
    .map((coin, index) => ({
      id: index + 1,
      crypto: getCrypto(coin),
      price: getCoinPrice(coin),
      change: getChange(coin),
      trade: getTrade(),
    }))

  return (
    <CryptosSectionContainer>
      <CryptosSectionContent>
        <h3>Top Cryptos</h3>
        <TableComponent
          data={data}
          mainRow='crypto'
          expandableColumn='trade'
          expandedColumns={expandedColumns}
          rows={5}
        />
      </CryptosSectionContent>
    </CryptosSectionContainer>
  )
}
