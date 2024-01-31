import { Layout, theme } from "antd";
import SideBar from "../components/sider";

const { Header, Content } = Layout;

const Main = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ height: "100vh", margin: 0, padding: 0 }}>
      <Header
        style={{
          padding: 0,
          color: "white",
          fontWeight: 700,
          fontSize: "32px",
        }}
      >
        Dashboard
      </Header>
      <Layout>
        <SideBar></SideBar>
        <Layout>
          <Content>
            <div
              style={{
                padding: 24,
                minHeight: 360,

                borderRadius: borderRadiusLG,
              }}
            >
              content
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Main;
