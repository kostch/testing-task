import {observable, action, makeObservable, computed} from 'mobx';
import {CountryInfo, getCountryByName} from "../../api/apiService";
import {debounce} from "../../utils/debounce";

export class AutoCompeteControlStore {
  @observable text: string = '';
  @observable countryHints: CountryInfo[] = [];
  @observable hintLimit: number;

  constructor(hintLimit: number = 0) {
    makeObservable(this);
    this.hintLimit = hintLimit;
  }

  @action setText = (value: string) => {
    this.text = value;

    debounce(this.getCountryInfo, 300)();
  };

  @action getCountryInfo = async () => {
    this.countryHints = await getCountryByName(this.text);
  };

  @computed get limitedHints() {
    if (this.hintLimit !== 0) {
      return this.countryHints.slice(0, this.hintLimit);
    } else {
      return this.countryHints;
    }
  }
}
