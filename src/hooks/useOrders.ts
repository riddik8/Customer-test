import { useMutation } from "@tanstack/react-query"

import { customerService } from "../services/customer.service"
import { OrderBody } from "../types/order";

export function useOrders() {
  const mutation = useMutation({
    mutationKey: ['orders'],
    mutationFn: async (body: OrderBody) => {
      const response = await customerService.getOrders(body);
      return response.data.results;
    }
  })

  return mutation
}