import { observable, action, toJS } from "mobx";

class Store {
  @observable
  cards1 = [
    {
      id: "1",
      content: "deneme 1",
    },
    {
      id: "2",
      content: "deneme 2",
    },
    {
      id: "3",
      content: "deneme 3",
    },
    {
      id: "4",
      content: "deneme 4",
    },
  ];

  @observable
  cards2: {
    id: string;
    content: string;
  }[] = [
    {
      id: "5",
      content: "deneme 1",
    },
    {
      id: "6",
      content: "deneme 1",
    },
    {
      id: "7",
      content: "deneme 1",
    },
    {
      id: "8",
      content: "deneme 1",
    },
  ];
}

export default Store;
