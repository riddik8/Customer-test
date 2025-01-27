import { ColumnProps } from "antd/es/table";
import { SearchOutlined } from "@ant-design/icons";

import { Customer } from "../../types/customer";
import Search from "../../components/search";

export const getColumns = (
  orderBy: string | undefined = "",
  orderByDesc: string = ""
): ColumnProps<Customer>[] => [
    {
      dataIndex: "companyName",
      title: "Company Name",
      width: 250,
      sorter: (a, b) => a.companyName.localeCompare(b.companyName),
      sortOrder:
        orderBy === "companyName"
          ? "ascend"
          : orderByDesc === "companyName"
            ? "descend"
            : null,
    },
    {
      dataIndex: "contactName",
      title: "Contact Name",
      width: 220,
      sorter: (a, b) => a.contactName.localeCompare(b.contactName),
      sortOrder:
        orderBy === "contactName"
          ? "ascend"
          : orderByDesc === "contactName"
            ? "descend"
            : null,
    },
    // {
    //   dataIndex: 'contactTitle',
    //   title: 'Contact Title',
    // },
    {
      dataIndex: "address",
      title: "Address",
      width: 300,
      sorter: (a, b) => a.address.localeCompare(b.address),
      sortOrder:
        orderBy === "address"
          ? "ascend"
          : orderByDesc === "address"
            ? "descend"
            : null,
    },
    {
      dataIndex: "city",
      title: "City",
      width: 150,
      sorter: (a, b) => a.city.localeCompare(b.city),
      sortOrder:
        orderBy === "city"
          ? "ascend"
          : orderByDesc === "city"
            ? "descend"
            : null,
    },
    // {
    //   dataIndex: 'region',
    //   title: 'Region',
    // },
    {
      dataIndex: "postalCode",
      title: "Postal Code",
      width: 150,
      sorter: (a, b) => a.postalCode.localeCompare(b.postalCode),
      sortOrder:
        orderBy === "postalCode"
          ? "ascend"
          : orderByDesc === "postalCode"
            ? "descend"
            : null,
    },
    {
      dataIndex: "country",
      title: "Country",
      width: 150,
      onFilter: (value, record) => {
        return record.country
          .toLowerCase()
          .includes((value as string).toLowerCase());
      },
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      filterDropdown: (props) => <Search {...props} />,
      sorter: (a, b) => a.country.localeCompare(b.country),
      sortOrder:
        orderBy === "country"
          ? "ascend"
          : orderByDesc === "country"
            ? "descend"
            : null,
    },
    {
      dataIndex: "phone",
      title: "Phone",
      width: 160,
      sorter: (a, b) => a.phone.localeCompare(b.phone),
      sortOrder:
        orderBy === "phone"
          ? "ascend"
          : orderByDesc === "phone"
            ? "descend"
            : null,
    },
    {
      dataIndex: "fax",
      title: "Fax",
      width: 160,
      sorter: (a, b) => a.fax.localeCompare(b.fax),
      sortOrder:
        orderBy === "fax"
          ? "ascend"
          : orderByDesc === "fax"
            ? "descend"
            : null,
    },
  ];
