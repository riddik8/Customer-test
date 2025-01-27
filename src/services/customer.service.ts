import axios from "axios"

import { CustomerBody, Customer } from "../types/customer"
import { OrderBody, Order } from "../types/order"
import { QueryResponse } from "../types/general"

const URL = 'http://ec2-34-201-46-215.compute-1.amazonaws.com/json/reply'
const HEADERS = { Accept: "application/json", "Content-Type": "application/json" }

class CustomerService {

  getCustomers(body: CustomerBody) {
    return axios.post<QueryResponse<Customer[]>>(`${URL}/QueryCustomers/`, body, { headers: HEADERS })
  }

  getOrders(body: OrderBody) {
    return axios.post<QueryResponse<Order[]>>(`${URL}/QueryOrders/`, body, { headers: HEADERS })
  }
}

export const customerService = new CustomerService()