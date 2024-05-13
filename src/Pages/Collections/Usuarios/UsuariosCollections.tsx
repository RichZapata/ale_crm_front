import { Button, Drawer, Form, Input, Space, Typography } from "antd";
import React, { useState } from "react";
import UsersTable from "../../../Components/UserTables";
import DrawerFooter from "../../../Components/DrawerFooter";

const UsuariosCollections: React.FC = () => {
	const [open, setOpen] = useState(false);

	return (
		<Space
			size={"large"}
			align={"start"}
			direction={"vertical"}
			style={{ width: "100%" }}
		>
			<Typography.Title>Usuarios</Typography.Title>

			<Button
				type="primary"
				onClick={() => setOpen(true)}
				style={{ marginBottom: 16 }}
			>
				Add a row
			</Button>

			<UsersTable />

			<Drawer
				title="Agregar usuario"
				onClose={() => setOpen(false)}
				open={open}
				footer={<DrawerFooter onCancel={() => setOpen(false)} />}
			>
				<Form layout="vertical">
					<Form.Item label="Nombre" name="name">
						<Input />
					</Form.Item>
					<Form.Item label="
          Apellido" name="lastName">
						<Input />
					</Form.Item>
				</Form>
			</Drawer>
		</Space>
	);
};

export default UsuariosCollections;
