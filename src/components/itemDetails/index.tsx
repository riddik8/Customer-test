import _ from 'lodash'

import { formatDate } from '../../utils/formatters'
import { Order } from '../../types/order'
import { Customer } from '../../types/customer'

const ItemDetails = ({ name, record }: { name: string, record: Order | Customer | null }) => {
  const modifiedRecord = _.omit(record, ['id', 'customerId', 'employeeId'])

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2>{name} Details</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px' }}>
        {Object.entries(modifiedRecord).map(([key, value]) => (<div key={key}>
          <strong>{key}</strong> - {formatDate(value) || value}
        </div>)
        )}
      </div>
    </div>
  )
}

export default ItemDetails