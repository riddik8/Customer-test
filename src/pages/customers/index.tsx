
import { useEffect, useState } from "react";
import { Modal, Spin } from "antd";
import Table, { TablePaginationConfig } from "antd/es/table";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { LoadingOutlined } from "@ant-design/icons";

import { Route } from '../../routes/customers'
import ObjectDetails from "../../components/itemDetails";
import { getColumns } from "./columns";
import { config } from "../../config/config";
import { useCustomers } from "../../hooks/useCustomers";
import { Customer } from "../../types/customer";

const Customers = () => {
  const navigate = Route.useNavigate();
  const { page, countryStartsWith, orderBy, orderByDesc } = Route.useSearch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<Customer | null>(null);
  const [pagination, setPagination] = useState({
    current: page || 1,
    pageSize: config.ui.pagination.size,
  });

  const { mutate, data, error, isPending, isError, isSuccess } = useCustomers();

  useEffect(() => {
    const filters = countryStartsWith ? { countryStartsWith } : {};
    mutate({
      skip: (pagination.current - 1) * pagination.pageSize,
      take: pagination.pageSize,
      ...filters,
      orderBy,
      orderByDesc,
    });
  }, [countryStartsWith, mutate, orderBy, orderByDesc, pagination]);

  const toggleModal = (record?: Customer) => {
    setCurrentRecord(record || null);
    setIsModalOpen(Boolean(record));
  };

  const handlePagination = (pagination: {
    current: number;
    pageSize: number;
  }) => {
    setPagination({
      current: pagination.current,
      pageSize: pagination.pageSize,
    });

    navigate({
      search: {
        page: pagination.current,
      },
    });
  };

  const handleChange = (
    pagination: TablePaginationConfig,
    filter: Record<string, FilterValue | null>,
    sorter: SorterResult<Customer> | SorterResult<Customer>[]
  ) => {
    const sortObj = Array.isArray(sorter) ? sorter[0] : sorter;
    const sort = { orderBy: "", orderByDesc: "" };
    if (sortObj?.order && sortObj?.order === "ascend") {
      sort.orderBy = (sortObj?.field ?? "").toString();
    }
    if (sortObj?.order && sortObj?.order === "descend") {
      sort.orderByDesc = (sortObj?.field ?? "").toString();
    }
    navigate({
      search: {
        page: pagination.current,
        countryStartsWith: filter.country ? filter.country.toString() : undefined,
        ...sort,
      },
    });
  };

  return (
    <>
      {isPending ?? (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      )}

      {!isPending && isError && <div>An error occurred: {error.message}</div>}

      {!isPending && isSuccess && data && (
        <Table
          dataSource={data.flat()}
          columns={getColumns(orderBy, orderByDesc)}
          scroll={{ x: "max-content" }}
          rowKey={(record) => (record.id ?? 0).toString()}
          onRow={(record) => ({
            onClick: () => toggleModal(record),
          })}
          pagination={{
            current: pagination.current,
            pageSize: pagination.pageSize,
            total: 91, // TODO fix when get total from service
            onChange: (page, pageSize) =>
              handlePagination({ current: page, pageSize: pageSize ?? 10 }),
          }}
          onChange={handleChange}
        />
      )}

      <Modal open={isModalOpen} onCancel={() => toggleModal()} footer={null}>
        <ObjectDetails name="Customer" record={currentRecord} />
      </Modal>
    </>
  );
}

export default Customers