import dayjs from "dayjs";

import { config } from "../config/config";

export const formatDate = (dateString?: string | number): string | null => {
  if (typeof dateString !== "string") {
    return null;
  }

  const timestampMatch = dateString.match(/\/Date\((\d+)-\d+\)\//);

  if (timestampMatch && timestampMatch[1]) {
    const timestamp = parseInt(timestampMatch[1], 10);
    return dayjs(timestamp).format(config.format.date);
  }

  return null;
};
