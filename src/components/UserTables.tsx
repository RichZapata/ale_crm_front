import { Button, Col, Modal, Row, Table } from "antd";
import { useEffect, useState } from "react";
import { Product } from "../models/product";
import { getProducts } from "../services/product";
import { ExclamationCircleFilled } from "@ant-design/icons";

const UsersTable: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);
  const { confirm } = Modal;
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

  const deleteElement = () => {
    confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  };

	return (
		<>


        <Table
          columns={columns}
          dataSource={products}
          size="large"
          style={{ width: '100%' }}
        />
    </>
	);
};

export default UsersTable;
