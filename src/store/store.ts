import { observable, action, toJS } from "mobx";

class Store {
  @observable
  name = "Deniz";

  @observable
  cards1 = [
    {
      id: "1",
      content: "Kart 1.1",
      comment: ["çok iyi ", "çok güzel", "olmuş bu "],
      labels: ["y", "g", "s", "w"],
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
    let temp = false;

    if (listAdi == "birinci liste") {
      let findData: any = this.cards1.find((item) => item.content == title);

      let indexMaster: any = this.cards1.indexOf(findData);
      let index: any = findData?.comment.indexOf(text);

      if (index > -1) {
        this.cards1[indexMaster].comment.splice(index, 1);
        temp = true;
      }
    } else if (listAdi == "ikinci liste") {
      let findData: any = this.cards2.find((item) => item.content == title);

      let indexMaster: any = this.cards2.indexOf(findData);
      let index: any = findData?.comment.indexOf(text);

      if (index > -1) {
        this.cards2[indexMaster].comment.splice(index, 1);
        temp = true;
      }
    }

    if (temp != true) {
      let findData: any = this.cards1.find((item) => item.content == title);

      let indexMaster: any = this.cards1.indexOf(findData);
      let index: any = findData?.comment.indexOf(text);

      if (index > -1) {
        this.cards1[indexMaster].comment.splice(index, 1);
        temp = true;
      }
    }

    if (temp != true) {
      let findData: any = this.cards2.find((item) => item.content == title);

      let indexMaster: any = this.cards2.indexOf(findData);
      let index: any = findData?.comment.indexOf(text);

      if (index > -1) {
        this.cards2[indexMaster].comment.splice(index, 1);
      }
    }
  };

  @action
  AddNewComment = (title: string, comment: string, listName: string) => {
    let temp = false;

    if (listName == "birinci liste") {
      let findData: any = this.cards1.find((item) => item.content == title);
      let indexMaster: any = this.cards1.indexOf(findData);

      if (indexMaster > -1) {
        console.log("deneme");

        this.cards1[indexMaster].comment.push(comment);
        temp = true;
      }
    } else if (listName == "ikinci liste") {
      let findData: any = this.cards2.find((item) => item.content == title);
      let indexMaster: any = this.cards2.indexOf(findData);

      if (indexMaster > -1) {
        console.log("ikinci");

        this.cards2[indexMaster].comment.push(comment);
        temp = true;
      }
    }
  };

  @action
  ChangeName = (e: string) => {
    this.name = e;
  };

  @action
  SetCards1 = (item: any) => {
    this.cards1 = item;
  };
}

export default Store;
