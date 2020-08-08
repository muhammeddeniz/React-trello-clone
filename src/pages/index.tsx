import React from "react";

import { List } from "../components";

const HomePage: React.FC<any> = () => {
  return (
    <div className="homePage">
      <List ListName="Birinci Liste"></List>
      <List ListName="İkinci Liste"></List>
      <List ListName="Üçüncü Liste"></List>
    </div>
  );
};

export default HomePage;
