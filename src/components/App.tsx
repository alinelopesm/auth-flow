import React, { ReactNode } from 'react';

interface AppProps {
  children: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  return <>{children}</>;
};

export default App;
