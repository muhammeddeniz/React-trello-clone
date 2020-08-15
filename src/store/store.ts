import { observable, action, toJS } from "mobx";

class Store {
  @observable
  name = "Muhammed";

  @observable
  cards1 = [
    {
      id: "1",
      content: "Kart 1.1",
      comment: [
        {
          text: "iyi",
          time: "12.02.2332",
        },
      ],
      labels: ["y", "g", "r", "b"],
    },
    {
      id: "2",
      content: "Kart 1.2",
      comment: [
        {
          text: "deneme",
          time: "12.02.2332",
        },
      ],
      labels: ["y", "b"],
    },
    {
      id: "3",
      content: "Kart 1.3",
      comment: [
        {
          text: "demee",
          time: "12.02.2332",
        },
      ],
      labels: ["y"],
    },
  ];

  @observable
  cards2 = [
    {
      id: "5",
      content: "Kart 2.1",
      comment: [
        {
          text: "iyi",
          time: "12.02.2332",
        },
      ],
      labels: ["y", "b"],
    },
    {
      id: "6",
      content: "Kart 2.2",
      comment: [
        {
          text: "güzel",
          time: "12.02.2332",
        },
      ],
      labels: ["g", "r"],
    },
  ];

  @action
  addData1 = (id: string, title: string, comment: any) => {
    let data: {
      id: string;
      content: string;
      comment: any;
      labels: Array<string>;
    } = {
      id: id,
      content: title,
      comment: comment,
      labels: [""],
    };

    this.cards1.push(data);
  };

  @action
  addData2 = (id: string, title: string, comment: any, labels: any = [""]) => {
    let data: {
      id: string;
      content: string;
      comment: any;
      labels: Array<string>;
    } = {
      id: id,
      content: title,
      comment: comment,
      labels: labels,
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
  AddNewComment = (title: string, comment: any, listName: string) => {
    if (listName == "birinci liste") {
      let findData: any = this.cards1.find((item) => item.content == title);
      let indexMaster: any = this.cards1.indexOf(findData);

      if (indexMaster > -1) {
        this.cards1[indexMaster].comment.push(comment);
      }
    } else if (listName == "ikinci liste") {
      let findData: any = this.cards2.find((item) => item.content == title);
      let indexMaster: any = this.cards2.indexOf(findData);

      if (indexMaster > -1) {
        this.cards2[indexMaster].comment.push(comment);
      }
    }
  };

  @action
  AddNewLabel = (title: string, label: string, listName: string) => {
    if (listName == "birinci liste") {
      let findData: any = this.cards1.find((item) => item.content == title);
      let findLabel = findData.labels.find((i: any) => i === label);

      if (findLabel) {
        return;
      }

      let indexMaster: any = this.cards1.indexOf(findData);

      if (indexMaster > -1) {
        this.cards1[indexMaster].labels?.push(label);
      }
    } else if (listName == "ikinci liste") {
      let findData: any = this.cards2.find((item) => item.content == title);
      let indexMaster: any = this.cards2.indexOf(findData);

      let findLabel = findData.labels.find((i: any) => i === label);

      if (findLabel) {
        return;
      }
      if (indexMaster > -1) {
        this.cards2[indexMaster].labels?.push(label);
      }
    }
  };

  @action
  DeleteLabel = (title: string, listAdi: any, text: string) => {
    let temp = false;

    if (listAdi == "birinci liste") {
      let findData: any = this.cards1.find((item) => item.content == title);

      let indexMaster: any = this.cards1.indexOf(findData);
      let index: any = findData?.labels.indexOf(text);

      if (index > -1) {
        this.cards1[indexMaster].labels.splice(index, 1);
        temp = true;
      }
    } else if (listAdi == "ikinci liste") {
      let findData: any = this.cards2.find((item) => item.content == title);

      let indexMaster: any = this.cards2.indexOf(findData);
      let index: any = findData?.labels.indexOf(text);

      if (index > -1) {
        this.cards2[indexMaster].labels.splice(index, 1);
        temp = true;
      }
    }

    if (temp != true) {
      let findData: any = this.cards1.find((item) => item.content == title);

      let indexMaster: any = this.cards1.indexOf(findData);
      let index: any = findData?.labels.indexOf(text);

      if (index > -1) {
        this.cards1[indexMaster].labels.splice(index, 1);
        temp = true;
      }
    }

    if (temp != true) {
      let findData: any = this.cards2.find((item) => item.content == title);

      let indexMaster: any = this.cards2.indexOf(findData);
      let index: any = findData?.labels.indexOf(text);

      if (index > -1) {
        this.cards2[indexMaster].labels.splice(index, 1);
      }
    }
  };

  @action
  ChangeName = (e: string) => {
    this.name = e;
  };
}

export default Store;
