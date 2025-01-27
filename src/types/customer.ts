export interface CustomerBody {
  ids?: Array<number>,
  countryStartsWith?: string,
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

export interface Customer {
  id: string,
  companyName: string,
  contactName: string,
  contactTitle: string,
  address: string,
  city: string,
  region: string,
  postalCode: string,
  country: string,
  phone: string,
  fax: string,
}