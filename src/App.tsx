import React from "react";
import { Layout, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import MenuSidebar from "./components/MenuSidebar";
import { HeaderTitleProvider, useHeaderTitle } from "./hooks/useHeaderTitle";

const App: React.FC = () => {
  return (
    <HeaderTitleProvider>
      <AppLayout />
    </HeaderTitleProvider>
  );
};

const AppLayout: React.FC = () => {
  const { title } = useHeaderTitle();

  return (
    <Layout>
      <Sider width={"25%"}>
        <MenuSidebar />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
        {title && (
            <Typography.Title style={{ color: "#fff" }}>
              {title}
            </Typography.Title>
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{ margin: "0 16px", padding: 24, minHeight: 360 }}
        >
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
