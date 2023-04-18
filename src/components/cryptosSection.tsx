import { TableComponent } from '@/libs'
import {
  CryptosSectionContainer,
  CryptosSectionContent,
} from '@/styles/components/cryptosSection'

const data = [
  { id: 1, crypto: 'Bitcoin', price: 50000, change: 0.05, trade: 'Buy' },
  { id: 2, crypto: 'Ethereum', price: 2500, change: -0.02, trade: 'Sell' },
  { id: 3, crypto: 'Ethereum', price: 2500, change: -0.02, trade: 'Sell' },
  { id: 4, crypto: 'Ethereum', price: 2500, change: -0.02, trade: 'Sell' },
  { id: 5, crypto: 'Ethereum', price: 2500, change: -0.02, trade: 'Sell' },
  { id: 6, crypto: 'Ethereum', price: 2500, change: -0.02, trade: 'Sell' },
  { id: 7, crypto: 'Ethereum', price: 2500, change: -0.02, trade: 'Sell' },
  { id: 8, crypto: 'Ethereum', price: 2500, change: -0.02, trade: 'Sell' },
  { id: 9, crypto: 'Ethereum', price: 2500, change: -0.02, trade: 'Sell' },
  { id: 10, crypto: 'Ethereum', price: 2500, change: -0.02, trade: 'Sell' },
  { id: 11, crypto: 'Ethereum', price: 2500, change: -0.02, trade: 'Sell' },
  { id: 12, crypto: 'Ethereum', price: 2500, change: -0.02, trade: 'Sell' },
  { id: 13, crypto: 'Ethereum', price: 2500, change: -0.02, trade: 'Sell' },
]

const expandedColumns = ['price', 'change']

export default function CryptosSection() {
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
