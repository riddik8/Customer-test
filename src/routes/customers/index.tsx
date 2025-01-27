import { createFileRoute } from "@tanstack/react-router";

import Customers from "../../pages/customers";

type PageParams = {
  page?: number;
  countryStartsWith?: string;
  orderBy?: string;
  orderByDesc?: string;
};

export const Route = createFileRoute("/customers/")({
  component: Customers,
  validateSearch: (search: Record<string, unknown>): PageParams => {
    return {
      page: Number(search?.page ?? 1),
      countryStartsWith: (search?.countryStartsWith ?? "").toString(),
      orderBy: (search?.orderBy ?? "").toString(),
      orderByDesc: (search?.orderByDesc ?? "").toString(),
    };
  },
});
