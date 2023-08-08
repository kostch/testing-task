import {observable, action, makeObservable} from 'mobx';

export class ControlStore {
  @observable text: string;

  constructor(text: string = 'Введите текст') {
    makeObservable(this);
    this.text = text;
  }

  @action setText = (value: string) => {
    this.text = value;
  };

  @action clearText = () => {
    this.text = '';
  }

  @action alertText = () => {
    alert(this.text);
  }
  @action alertNumber = () => {
    const number = +this.text;
    if (!isNaN(number)) {
      alert(number);
    }
  }
}
