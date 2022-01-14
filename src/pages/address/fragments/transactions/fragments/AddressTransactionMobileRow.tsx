import React from 'react'
import { Link } from 'react-router-dom'
import { AddressTransaction } from '../AddressTransaction'
import TransactionTime from './TransactionTime'
import { ROUTES } from '../../../../../constants'
import { toBigNumber } from '../../../../../utils/formatter'

type Props = {
  transaction: AddressTransaction
  chain: string
  network: string
}

const AddressTransactionMobileRow: React.FC<Props> = (props: Props) => {
  const { transaction, chain, network } = props

  const totalAmount = transaction.transfers.reduce(
    (sum, it) => (sum += toBigNumber(it.amount || 0).toNumber()),
    0,
  )

  return (
    <div className="address-transactions__card--mobile">
      <div className="horiz">
        <label className="weight-1">ID</label>
        <Link
          className="hash"
          to={`${ROUTES.TRANSACTION.url}/${chain}/${network}/${transaction.hash}`}
        >
          {transaction.hash}
        </Link>
      </div>
      <div className="horiz">
        <label className="weight-1">Date</label>
        <TransactionTime time={transaction.time} />
      </div>
      <div className="horiz">
        <label className="weight-1">Type</label>
        <span>NEP-17 Transfer</span>
      </div>
      <div className="horiz">
        <label className="weight-1">Amount</label>
        <span>{totalAmount}</span>
      </div>
    </div>
  )
}

export default AddressTransactionMobileRow
