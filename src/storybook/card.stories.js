import React from "react";
import { Card } from "../components";

export default {
  title: "Card",
};

export const Cards = () => (
  <div>
    <Card red>Card 1.1</Card>
    <br />
    <Card yellow>Card 1.2</Card>
    <br />

    <Card blue>Card 1.3</Card>
    <br />

    <Card green>Card 1.4</Card>
  </div>
);
