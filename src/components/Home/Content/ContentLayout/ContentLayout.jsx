import React from 'react';
import { About } from "../About/About";
import { Outlet } from 'react-router-dom';

export const ContentLayout = () => {
    return (
      <>
        <Outlet />
        <About />
      </>
    );
};

