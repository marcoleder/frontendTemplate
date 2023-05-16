import { Layout } from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import AppRouter from './components/routing/routers/AppRouter';
import Sider from 'antd/es/layout/Sider';

function App() {
  return (
  <Layout style={{ height: "100vh" }}>
    <Header />
    <Layout>
      <Sider />
      <Content>
        <AppRouter/>
      </Content>
    </Layout>
    <Footer />
  </Layout>
  );
}

export default App;
