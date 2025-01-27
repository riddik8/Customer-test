import { Outlet, createRootRoute, useNavigate } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Layout } from "antd";

import Menu from "../components/menu";
import Header from "../components/header";
import { useEffect } from "react";

const { Content, Sider } = Layout;

const Redirector = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate({ to: "/orders" });
    }
  }, [navigate]);

  return null;
};

export const Route = createRootRoute({
  component: () => (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Menu />
      </Sider>
      <Layout>
        <Header />
        <Content style={{ margin: "16px" }}>
          <Redirector />
          <Outlet />
        </Content>
      </Layout>

      <TanStackRouterDevtools />
    </Layout>
  ),
});
