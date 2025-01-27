export interface QueryResponse<T> {
  offset?: number,
  total?: number,
  results?: Array<T>,
  meta?: { [key: string]: string },
  responseStatus?: unknown
}