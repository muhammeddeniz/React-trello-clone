import React from "react";
import "./editCard.scss";
import { observer } from "mobx-react";

import { Card2, Close, List } from "../icons";
import { Button, IconButton, Textarea } from "../index";
import { Profile } from "../profile";

interface IProps {
  store?: any;
}

const editCard: React.FC<IProps> = ({ store }) => {
  return (
    <div className="editCard">
      <div className="editCard-header">
        <div className="editCard-header-leftSide">
          <Card2 />
          <div className="editCard-header-leftSide-text">
            <p className="editCard-header-leftSide-text-title">Kart 2.1</p>
            <p className="editCard-header-leftSide-text-text">
              in List ikicni liste
            </p>
            <p className="editCard-header-leftSide-text-label">LABEL</p>

            <div className="editCard-header-leftSide-text-buttons">
              <Button warning>DİKKAT</Button>
              <IconButton onClick={() => alert("denem")} />
            </div>
          </div>
        </div>
        <Close />
      </div>

      <div className="editCard-body">
        <div className="editCard-body-title">
          <List></List>
          <p className="editCard-body-title-text">Kart 2.1</p>
        </div>
        <div className="editCard-body-inputSide">
          <div className="editCard-body-inputSide-avatar">
            <Profile />
          </div>
          <div className="editCard-body-inputSide-input">
            <Textarea />
            <Button success>SAVE</Button>
          </div>
        </div>

        <div className="editCard-body-comment">
          <div className="editCard-body-comment-header">
            <Profile />
            <div className="editCard-body-comment-header-t">
              <p className="editCard-body-comment-header-t-title">
                Muhammed Deniz
              </p>
              <p className="editCard-body-comment-header-t-text">
                a minute ago
              </p>
            </div>
          </div>
          <div className="editCard-body-comment-body">
            <div className="editCard-body-comment-body-text">
              <p>Yorum 1</p>
            </div>
            <div className="editCard-body-comment-footer">
              <p>Edit</p>
              <p>Delete</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(editCard);
