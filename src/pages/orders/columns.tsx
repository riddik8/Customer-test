import { ColumnProps } from "antd/es/table";
import { SearchOutlined } from "@ant-design/icons";

import { Order } from "../../types/order";
import { formatDate } from "../../utils/formatters";
import Search from "../../components/search";

export const getColumns = (
  orderBy: string | undefined = "",
  orderByDesc: string | undefined = ""
): ColumnProps<Order>[] => [
    {
      dataIndex: "freight",
      title: "Freight",
      width: 130,
      onFilter: (value, record) => {
        return record.shipName
          .toLowerCase()
          .includes((value as string).toLowerCase());
      },
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      filterDropdown: (props) => <Search {...props} />,
      sorter: (a, b) => (a.freight ?? 0) - (b.freight ?? 0),
      sortOrder:
        orderBy === "freight"
          ? "ascend"
          : orderByDesc === "freight"
            ? "descend"
            : null,
    },
    {
      dataIndex: "shipName",
      title: "Ship Name",
      width: 220,
      sorter: (a, b) => a.shipName.localeCompare(b.shipName),
      sortOrder:
        orderBy === "shipName"
          ? "ascend"
          : orderByDesc === "shipName"
            ? "descend"
            : null,
    },
    // {
    //   dataIndex: "shipAddress",
    //   title: "Ship Address",
    //   onFilter: (value, record) => record.shipAddress.toLowerCase().includes(value.toLowerCase()),
    //   filterIcon: (filtered: boolean) => (
    //     <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    //   ),
    //   filterDropdown: (props) => <Search {...props} />,
    // },
    {
      dataIndex: "shipCity",
      title: "Ship City",
      width: 160,
      sorter: (a, b) => a.shipCity.localeCompare(b.shipCity),
      sortOrder:
        orderBy === "shipCity"
          ? "ascend"
          : orderByDesc === "shipCity"
            ? "descend"
            : null,
    },
    // {
    //   dataIndex: "shipPostalCode",
    //   title: "Ship Postal Code",
    // },
    {
      dataIndex: "shipCountry",
      title: "Ship Country",
      width: 160,
      sorter: (a, b) => a.shipCountry.localeCompare(b.shipCountry),
      sortOrder:
        orderBy === "shipCountry"
          ? "ascend"
          : orderByDesc === "shipCountry"
            ? "descend"
            : null,
    },
    // {
    //   dataIndex: "shipVia",
    //   title: "Ship Via",
    // },
    {
      dataIndex: "orderDate",
      title: "Order Date",
      width: 160,
      sorter: (a, b) => {
        const orderDateA = a.orderDate || "";
        const orderDateB = b.orderDate || "";
        return orderDateA.localeCompare(orderDateB);
      },
      sortOrder:
        orderBy === "orderDate"
          ? "ascend"
          : orderByDesc === "orderDate"
            ? "descend"
            : null,
      render: (_, record) => formatDate(record.orderDate),
    },
    {
      dataIndex: "requiredDate",
      title: "Required Date",
      width: 160,
      sorter: (a, b) => {
        const requiredDateA = a.requiredDate || "";
        const requiredDateB = b.requiredDate || "";
        return requiredDateA.localeCompare(requiredDateB);
      },
      sortOrder:
        orderBy === "requiredDate"
          ? "ascend"
          : orderByDesc === "requiredDate"
            ? "descend"
            : null,
      render: (_, record) => formatDate(record.requiredDate),
    },
    {
      dataIndex: "shippedDate",
      title: "Shipped Date",
      width: 160,
      sorter: (a, b) => {
        const shippedDateA = a.shippedDate || "";
        const shippedDateB = b.shippedDate || "";
        return shippedDateA.localeCompare(shippedDateB);
      },
      sortOrder:
        orderBy === "shippedDate"
          ? "ascend"
          : orderByDesc === "shippedDate"
            ? "descend"
            : null,
      render: (_, record) => formatDate(record.shippedDate),
    },
  ];
