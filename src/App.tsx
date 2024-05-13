import React from "react";
import { ConfigProvider, Layout, Typography } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import { HeaderTitleProvider, useHeaderTitle } from "./hooks/useHeaderTitle";
import MenuSidebar from "./Components/MenuSidebar";

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
	<ConfigProvider
			theme={{
				token: {
					colorPrimary: "#ffafb8",
					colorInfo: "#ffafb8",
					colorLink: "#fd7382",
					colorBgBase: "#fdf3f3",
					fontSize: 16,
					sizeStep: 4,
				},
				components: {
					"Button": {
					  "colorPrimary": "rgb(255, 125, 140)"
					}
				  }
			}}
		>
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
	</ConfigProvider>
  );
};

export default App;
