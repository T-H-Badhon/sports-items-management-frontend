import { Layout } from "antd";
import SideBar from "../components/sider";
import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

const Main = () => {
  return (
    <Layout
      style={{
        height: "100vh",
        margin: "auto",
        padding: 0,
        textAlign: "center",
        maxWidth: "1280px",
      }}
    >
      <Header
        style={{
          padding: 0,
          color: "white",
          fontWeight: 700,
          fontSize: "32px",
        }}
      >
        Sports Item Management System
      </Header>
      <Layout>
        <SideBar></SideBar>
        <Layout>
          <Content>
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Main;
