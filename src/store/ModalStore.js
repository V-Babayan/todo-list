import { makeAutoObservable } from "mobx";

class ModalStore {
  active = false;
  constructor() {
    makeAutoObservable(this);
  }

  toggleModal() {
    this.active = !this.active;
  }
}

export default new ModalStore();
