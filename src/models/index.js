import { action, observable, autorun, extendObservable } from "mobx";

class ViewModel {
  constructor() {
    extendObservable(this, { num: 0 });
  }

  @action
  update(num) {
    this.num = num;
  }
}

const vm = new ViewModel();

autorun(() => {
  console.log("autorun num value", vm.num);
});

export default vm;
