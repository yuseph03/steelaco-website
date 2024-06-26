import { HomeTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';


const Header = () => {
  const [current, setCurrent] = useState('h');

  const onClick = (e) => {
    setCurrent(e.key);
  };
  
  return (
    <>
     <Menu onClick={onClick} className="fs-3" selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="r">
        <Link to="/AboutUs">درباره ما</Link>
      </Menu.Item>
      <Menu.Item key="z" >
        <Link to="/Contact">تماس با ما</Link>
      </Menu.Item>
      <Menu.Item key="k" style={{ marginRight: 'auto' }}>
        <Link to="/Resume">رزومه</Link>
      </Menu.Item>
      <Menu.Item key="h" icon= {<HomeTwoTone />}>
       <Link to="/">صفحه اصلی</Link>
      </Menu.Item>
     </Menu>
     <Outlet/>
    </>
   
  )
};
export default Header;