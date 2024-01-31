import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SideBar = () => {
  const items = [
    {
      key: "1",
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "2",
      label: "Products",
      children: [
        {
          key: "21",
          label: <Link to="addProduct">Add Product</Link>,
        },
        {
          key: "22",
          label: <Link to="sellProduct">Sell Product</Link>,
        },
        {
          key: "23",
          label: <Link to="deleteProducts">Delete Products</Link>,
        },
      ],
    },
    {
      key: "3",
      label: "User management",
      children: [
        {
          key: "33",
          label: "Log out",
        },
      ],
    },
  ];

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
      />
    </Sider>
  );
};

export default SideBar;
