import type { Component } from 'solid-js';
import './index.css'
import { Card } from './components/card/card';
import { BaseRouter } from './pages';

const App: Component = () => {
  return (
    <>
      <BaseRouter />
      <Card />
    </>
  );
};

export default App;
