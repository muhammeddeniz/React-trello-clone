import { observable, action, toJS } from "mobx";

class Store {
  @observable
  cards1 = [
    {
      id: "1",
      content: "Kart 1.1",
      comment: ["çok iyi ", "çok güzel", "olmuş bu "],
    },
    {
      id: "2",
      content: "Kart 1.2",
      comment: ["çok iyi ", "çok güzel", "olmuş bu "],
    },
    {
      id: "3",
      content: "Kart 1.3",
      comment: ["çok iyi ", "çok güzel", "olmuş bu "],
    },
    {
      id: "4",
      content: "Kart 1.4",
      comment: ["çok iyi ", "çok güzel", "olmuş bu "],
    },
  ];

  @observable
  cards2: {
    id: string;
    content: string;
    comment: Array<string>;
  }[] = [
    {
      id: "5",
      content: "Kart 2.1",
      comment: ["çok iyi ", "çok güzel", "olmuş bu "],
    },
    {
      id: "6",
      content: "Kart 2.2",
      comment: ["çok iyi ", "çok güzel", "olmuş bu "],
    },
    {
      id: "7",
      content: "Kart 2.3",
      comment: ["çok iyi ", "çok güzel", "olmuş bu "],
    },
    {
      id: "8",
      content: "Kart 2.4",
      comment: ["çok iyi ", "çok güzel", "olmuş bu "],
    },
  ];

  @action
  addData1 = (id: string, title: string, comment: Array<string>) => {
    let data: {
      id: string;
      content: string;
      comment: Array<string>;
    } = {
      id: id,
      content: title,
      comment: comment,
    };

    this.cards1.push(data);
  };

  @action
  addData2 = (id: string, title: string, comment: Array<string>) => {
    let data: {
      id: string;
      content: string;
      comment: Array<string>;
    } = {
      id: id,
      content: title,
      comment: comment,
    };

    this.cards2.push(data);
  };

  @action
  DeleteComment = (title: string, listAdi: any, text: string) => {
    if (listAdi == "birinci liste") {
      let findData = this.cards1.find((item) => item.content == title);

      let index: any = findData?.comment.indexOf(text);
      console.log(index);

      if (index > -1) {
        this.cards1[index].comment.splice(index, 1);
      }
    }
  };
}

export default Store;
