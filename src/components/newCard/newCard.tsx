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
};

const NewCard: React.FC<IProps> = ({
  store,
  id,
  setID,
  setCardAdi,
  listeAdi,
  setAcildiMi,
  ...props
}) => {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState([]);

  return (
    <div className="editScreen">
      <div className="NewCard" {...props}>
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
              <Button
                success
                onClick={() => {
                  if (listeAdi == "birinci liste") {
                    store.addData1(id, title, comment);
                  } else if (listeAdi == "ikinci liste") {
                    store.addData2(id, title, comment);
                  }

                  setID(Number(id) + 1);
                  setAcildiMi(false);
                }}
              >
                SAVE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(NewCard);
