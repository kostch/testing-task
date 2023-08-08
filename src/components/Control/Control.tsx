import React from 'react';
import {ControlStore} from './ControlStore';
import {observer} from 'mobx-react-lite';
import cls from './Control.module.css';

interface ControlProps {
  store: ControlStore;
  leftButtons?: React.ReactNode[];
  rightButtons?: React.ReactNode[];
}


export const Control= observer(({store, leftButtons, rightButtons}: ControlProps) => {
  return (
    <div className={cls.control}>
      <div className={cls.leftColumn}>
        {leftButtons &&
          leftButtons.map((button, index) => (
            <React.Fragment key={index}>{button}</React.Fragment>
          ))}
      </div>

      <input type="text" className={cls.text} value={store.text} onChange={(e) => store.setText(e.target.value)}/>

      <div className={cls.rightColumn}>
        {rightButtons &&
          rightButtons.map((button, index) => (
            <React.Fragment key={index}>{button}</React.Fragment>
          ))}
      </div>
    </div>
  );
});

