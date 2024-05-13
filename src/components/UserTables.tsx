import { Table } from "antd";
import { useEffect, useState } from "react";
import { User } from "../models/user";
import { getUsers } from "../services/users";

const UsersTable: React.FC = () => {
	const [users, setUsers] = useState<User[]>([]);
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const users = await getUsers();
				setUsers(users);
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		};

		fetchProducts();
	}, []);

	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Last Name",
			dataIndex: "lastName",
			key: "lastName",
		},
		{
			title: "Date of Birth",
			dataIndex: "dateOfBirth",
			key: "dateOfBirth",
			render: (date: Date | null) => (date ? new Date(date).toLocaleDateString() : ""),
		},
	];

	return (
		<>
			<Table
				columns={columns}
				dataSource={users}
				size="large"
				style={{ width: "100%" }}
			/>
		</>
	);
};

export default UsersTable;
