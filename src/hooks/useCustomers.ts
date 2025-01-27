import { useMutation } from "@tanstack/react-query"

import { customerService } from "../services/customer.service"
import { CustomerBody } from "../types/customer";

export function useCustomers() {
  const mutation = useMutation({
    mutationKey: ['customers'],
    mutationFn: async (body: CustomerBody) => {
      const response = await customerService.getCustomers(body);
      return response.data.results;
    }
  })

  return mutation
}