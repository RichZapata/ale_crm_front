import React, { useEffect, useState } from "react";
import { getProducts } from "./services/product";
import { Table } from "antd";
import { Product } from "./models/product";

const App: React.FC = () => {
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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    }
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={products}
      />
        
    </>
  );
}

export default App;
