export interface OrderBody {
  freight?: number,
  skip?: number,
  take?: number,
  orderBy?: string,
  orderByDesc?: string,
  include?: string,
  fields?: string,
  meta?: {
    [key: string]: string
  }
}

export interface Order {
  id: 10328,
  customerId: string,
  employeeId?: number,
  orderDate?: string,
  requiredDate?: string,
  shippedDate?: string,
  shipVia?: number,
  freight?: number,
  shipName: string,
  shipAddress: string,
  shipCity: string,
  shipPostalCode: string,
  shipCountry: string,
}