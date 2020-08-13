import React, { useState } from "react";
import "./newCard.scss";
import { observer } from "mobx-react";

import { Card2, Close, List } from "../icons";
import { Button, IconButton, Textarea } from "../index";
import { Profile } from "../profile";

type IProps = JSX.IntrinsicElements["div"] & {
  store?: any;
  id?: string;
  setAcildiMi?: any;
  listeAdi?: string;
  setCardAdi?: any;
  setID?: any;
  setData?: any;
};

const NewCard: React.FC<IProps> = ({
  store,
  id,
  setID,
  setCardAdi,
  setData,
  listeAdi,
  setAcildiMi,
  ...props
}) => {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState([]);

  return (
    <div className="editScreen">
      <div className="NewCard" {...props}>
        <div className="NewCard-up">
          <p className="NewCard-up-title">Yeni Kart</p>
          <div
            className="close"
            onClick={() => {
              setAcildiMi(false);
            }}
          >
            <Close />
          </div>
        </div>
        <div className="NewCard-header">
          <div className="NewCard-header-leftSide">
            <Card2 />
            <div className="NewCard-header-leftSide-text">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="NewCard-header-leftSide-text-input"
              />
              <p className="NewCard-header-leftSide-text-text">
                in {listeAdi} liste
              </p>
            </div>
          </div>
        </div>

        <div className="NewCard-button">
          <Button
            onClick={() => {
              if (listeAdi == "birinci liste") {
                store.addData1(id, title, comment);
              } else if (listeAdi == "ikinci liste") {
                store.addData2(id, title, comment);
              }

              setID(Number(id) + 1);
              setAcildiMi(false);
            }}
            success
          >
            SAVE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default observer(NewCard);
