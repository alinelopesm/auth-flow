import React, { ReactNode } from 'react';
import Header from '../Header/index';
import Content from '../Content';
import Footer from '../Footer';
import './styles.css';

interface StructProps {
  children: ReactNode;
}

const Struct: React.FC<StructProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </div>
  );
}

export default Struct;
