import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu as AntdMenu, MenuProps } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const items: Required<MenuProps>["items"] = [
  {
    label: (
      <Link to="/orders" className="[&.active]:font-bold">
        Orders
      </Link>
    ),
    key: "orders",
    icon: <ShoppingCartOutlined />,
  },
  {
    label: (
      <Link to="/customers" className="[&.active]:font-bold">
        Customers
      </Link>
    ),
    key: "customers",
    icon: <UserOutlined />,
  },
];

const Menu = () => {
  const { location } = useRouterState();
  const { pathname } = location;

  const path = pathname.slice(1);

  const [selectedKeys, setSelectedKeys] = useState([path]);

  useEffect(() => {
    if (selectedKeys[0] !== path) {
      setSelectedKeys([path])
    }
  }, [path, selectedKeys])

  const onClick: MenuProps["onClick"] = (e) => {
    setSelectedKeys([e.key]);
  };

  return (
    <AntdMenu
      selectedKeys={selectedKeys}
      mode="inline"
      theme="light"
      items={items}
      onClick={onClick}
    />
  );
};

export default Menu;
