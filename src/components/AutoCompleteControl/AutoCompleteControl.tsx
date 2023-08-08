import React from 'react';
import {AutoCompeteControlStore} from './AutoCompeteControlStore';
import {observer} from 'mobx-react-lite';
import cls from './AutoCompleteControl.module.css'


interface AutoCompleteControlProps {
  store: AutoCompeteControlStore;
}

export const AutoCompleteControl = observer(({store}: AutoCompleteControlProps) => {
  return (
    <div>
      <input className={cls.input} type="text" onChange={(e) => store.setText(e.target.value)} value={store.text} placeholder='Введите название страны'/>
      {
        store.limitedHints.map((hint) => <div onClick={() => store.setText(hint.fullName)} className={cls.hint} key={hint.fullName}><span className={cls.text}>{hint.name} - {hint.fullName}</span><img src={hint.flag} alt={hint.name}/></div>)
      }
    </div>
  );
});

