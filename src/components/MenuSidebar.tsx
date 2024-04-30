
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const MenuSidebar = () => {
	return (
		<Menu mode="inline" style={{ backgroundColor: "#1677ff", color: "#fff" }}>
			<SubMenu key="sub1" title="Colecciones">
				<Menu.Item key="1">
					<Link to="/users">Usuarios</Link>
				</Menu.Item>
			</SubMenu>
		</Menu>
	);
};

export default MenuSidebar;
