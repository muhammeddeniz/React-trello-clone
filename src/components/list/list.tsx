import React from "react";

import "./list.scss";
import { ListHead, ListFooter, Card } from "../index";

interface IProps {
  ListName?: string;
  cards?: Array<any>;
}

const List: React.FC<IProps> = ({ ListName }) => {
  return (
    <div className="list">
      <ListHead>{ListName}</ListHead>
      <Card>Kart 1.1</Card>
      <Card>Kart 1.2</Card>
      <Card green>Kart 1.3</Card>
      <Card green>Kart 1.4</Card>
      <ListFooter />
    </div>
  );
};

export default List;
