import React from "react";
import "./newCard.scss";
import { observer } from "mobx-react";

import { Card2, Close, List } from "../icons";
import { Button, IconButton, Textarea } from "../index";
import { Profile } from "../profile";

type IProps = JSX.IntrinsicElements["div"] & {
  store?: any;
  setAcildiMi?: any;
  listeAdi?: string;
  setCardAdi?: any;
};

const NewCard: React.FC<IProps> = ({
  store,
  setCardAdi,
  listeAdi,
  setAcildiMi,
  ...props
}) => {
  return (
    <div className="NewCard" {...props}>
      <div className="NewCard-header">
        <div className="NewCard-header-leftSide">
          <Card2 />
          <div className="NewCard-header-leftSide-text">
            <input type="text" className="NewCard-header-leftSide-text-input" />
            <p className="NewCard-header-leftSide-text-text">
              in {listeAdi} liste
            </p>
            <p className="NewCard-header-leftSide-text-label">LABEL</p>

            <div className="NewCard-header-leftSide-text-buttons">
              <Button warning>DİKKAT</Button>
              <IconButton onClick={() => alert("denem")} />
            </div>
          </div>
        </div>
        <div
          className="close"
          onClick={() => {
            setAcildiMi(false);
          }}
        >
          <Close />
        </div>
      </div>

      <div className="NewCard-body">
        <div className="NewCard-body-title">
          <List></List>
          <p className="NewCard-body-title-text">Kart 2.1</p>
        </div>
        <div className="NewCard-body-inputSide">
          <div className="NewCard-body-inputSide-avatar">
            <Profile />
          </div>
          <div className="NewCard-body-inputSide-input">
            <Textarea />
            <Button success>SAVE</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(NewCard);
