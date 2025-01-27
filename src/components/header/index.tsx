import { useRouterState } from "@tanstack/react-router";
import { Layout } from "antd";

const { Header: AntdHeader } = Layout;

const Header = () => {
  const { location } = useRouterState();
  const { pathname } = location;
  const path = pathname.slice(1).toUpperCase();

  return <AntdHeader>{path}</AntdHeader>;
};

export default Header;
