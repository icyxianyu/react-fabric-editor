import Fabric from "@/components/fabric";
import { Layout  } from "antd";
import styled from "styled-components";

const { Header, Content, Sider } = Layout;
const theme = 'light';

const Container = styled(Layout)`
    height: 100vh;
    width: 100vw;
`
const StyleHeader = styled(Header)`
    background-color: #fff;
`
const ShadowContent = styled(Content)`
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 9px 2px #0000001f;
  z-index: 2;
  pointer-events: none;
`
export default  function LayoutContainer() {
  

  return (
        <Container>
            <StyleHeader></StyleHeader>
            <Layout >
              <Sider 
                  theme={theme}
                  collapsible></Sider>

              <ShadowContent>
                <Fabric/>
              </ShadowContent>

              <Sider 
                  theme={theme}
                  collapsible
                  reverseArrow></Sider>
            </Layout>
      </Container>
  )
}