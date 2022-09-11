import { Outlet } from "react-router-dom";
import Navigation from '../organism/navigation/Navigation';
//styled components
import {Container} from './style/Layout.style';
const Layout = () => {
  return (
    <>
      <Container>
        <div className="nav">
          <Navigation/>
        </div>
        <div className="body">
          <Outlet/>
        </div>
      </Container>
    </>
  )
};

export default Layout;
/**
 * 
 * 
 */