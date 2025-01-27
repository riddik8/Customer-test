import { createFileRoute } from "@tanstack/react-router";

import Orders from "../../pages/orders";

type PageParams = {
  page?: number;
  freight?: number;
  orderBy?: string;
  orderByDesc?: string;
};

export const Route = createFileRoute("/orders/")({
  component: Orders,
  validateSearch: (search: Record<string, unknown>): PageParams => {
    return {
      page: Number(search?.page ?? 1),
      freight: Number(search?.freight ?? 0),
      orderBy: (search?.orderBy ?? "").toString(),
      orderByDesc: (search?.orderByDesc ?? "").toString(),
    };
  },
});
