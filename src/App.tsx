import React from 'react';
import cls from './App.module.css';
import {Control} from './components/Control/Control';
import {ControlStore} from './components/Control/ControlStore';
import {Button} from './components/Button/Button';
import {AutoCompleteControl} from "./components/AutoCompleteControl/AutoCompleteControl";
import {AutoCompeteControlStore} from "./components/AutoCompleteControl/AutoCompeteControlStore";

export const App = () => {
  const ControlStore1 = new ControlStore();
  const ControlStore2 = new ControlStore();
  const AutoCompleteStore1 = new AutoCompeteControlStore(3);
  const AutoCompleteStore2 = new AutoCompeteControlStore(10);

  return (<>
      <div className={cls.paddingTop}>
        <Control store={ControlStore1}
                 rightButtons={[<Button onClick={ControlStore1.clearText} children={'Clear Text'}/>,
                   <Button onClick={() => ControlStore1.setText('Hello World!')} children={'Hello World!'}/>]}/>
        <Control store={ControlStore2}
                 leftButtons={[<Button onClick={ControlStore2.alertNumber} children={'Alert Number'}/>]}
                 rightButtons={[<Button onClick={ControlStore2.alertText} children={'Alert Text'}/>]}/>
      </div>
      <div className={cls.autocomplite}>
        <AutoCompleteControl store={AutoCompleteStore1}/>
        <AutoCompleteControl store={AutoCompleteStore2}/>
      </div>
    </>
  );
};
