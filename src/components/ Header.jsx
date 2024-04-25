import { HomeTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';


export default function Header() {
  const [current, setCurrent] = useState('h');

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
     <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="h" icon= {<HomeTwoTone />}>
       <Link to="/">Home</Link>
      </Menu.Item>
     </Menu>
     <Outlet/>
    </>
   
  )
};