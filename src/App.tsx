import React from "react";
import { Layout, Table } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
import MenuSidebar from "./components/MenuSidebar";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import UsersTable from "./components/UserTables";
import Home from "./Home";

const headerStyle: React.CSSProperties = {
	textAlign: "center",
	color: "#fff",
	height: 64,
	paddingInline: 48,
	lineHeight: "64px",
	backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
	textAlign: "center",
	minHeight: 120,
	lineHeight: "120px",
	color: "#fff",
	backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
	textAlign: "center",
	lineHeight: "120px",
	color: "#fff",
	backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
	textAlign: "center",
	color: "#fff",
	backgroundColor: "#4096ff",
};

const layoutStyle: React.CSSProperties = {
	minHeight: "100vh", // Establece la altura mínima del Layout principal para que sea igual al 100% de la altura de la ventana
};



const App: React.FC = () => {
	return (
		<Layout style={layoutStyle}>
			<Sider width="25%" style={siderStyle}>
				<MenuSidebar />
			</Sider>
			<Layout>
				<Header style={headerStyle}>Usuario</Header>
				<Content style={contentStyle}>
					<UsersTable />
				</Content>
				<Footer style={footerStyle}>Created by: Ricardo</Footer>
			</Layout>
		</Layout>
	);
};

export default App;
