import React from 'react';
import cls from './App.module.css';
import {Control} from './components/Control/Control';
import {ControlStore} from './components/Control/ControlStore';
import {Button} from './components/Button/Button';

export const App = () => {
  const ControlStore1 = new ControlStore();
  const ControlStore2 = new ControlStore();
  return (
    <div className={cls.paddingTop}>
      <Control store={ControlStore1} rightButtons={[<Button onClick={ControlStore1.clearText} children={'Clear Text'}/>, <Button onClick={() => ControlStore1.setText('Hello World!')} children={'Hello World!'}/>]}/>
      <Control store={ControlStore2} leftButtons={[<Button onClick={ControlStore1.alertNumber} children={'Alert Number'}/>]} rightButtons={[<Button onClick={ControlStore2.alertText} children={'Alert Text'}/>]}/>
    </div>
  );
};
