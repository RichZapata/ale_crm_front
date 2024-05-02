import { Table } from "antd";
import { useEffect, useState } from "react";
import { Product } from "../models/product";
import { getProducts } from "../services/product";

const UsersTable: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const products = await getProducts();
				setProducts(products);
			} catch (error) {
				console.error("Error fetching products:", error);
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
			title: "Price",
			dataIndex: "price",
			key: "price",
		},
	];

	return (
		<>
			<Table columns={columns} dataSource={products} size={'large'} style={{ width: '100%' }}/>
		</>
	);
};

export default UsersTable;
