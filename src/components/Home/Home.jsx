import React from 'react'
import './Home.scss'
import { Content } from './Content/Content'
import { SideBarLeft } from "./SideBarLeft/SideBarLeft";
import { SideBarRight } from './SideBarRight/SideBarRight';


export const Home = () => {
  return (
    <section className="home">
      <SideBarLeft />
      <Content />
      <SideBarRight/>
    </section>
  );
}
