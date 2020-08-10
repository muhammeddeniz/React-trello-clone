import React, { useState, useEffect } from "react";
import "./editCard.scss";
import { observer } from "mobx-react";

import { Card2, Close, List } from "../icons";
import { Button, IconButton, Textarea } from "../index";
import { Profile } from "../profile";
import { strict } from "assert";

type IProps = JSX.IntrinsicElements["div"] & {
  store?: any;
  title?: string;
  inList?: string;
  comment?: Array<string>;
  setEditAcildimi?: any;
};

const editCard: React.FC<IProps> = ({
  store,
  title,
  inlist,
  comment,
  setEditAcildimi,
  ...props
}) => {
  const [data, setData] = useState();

  useEffect(() => {
    if (inlist == "birinci liste") {
      setData(store.cards1);
    } else if (inlist == "ikinci liste") {
      setData(store.cards2);
    }
  }, []);

  return (
    <div className="newScreen">
      <div className="editCard" {...props}>
        <div className="editCard-header">
          <div className="editCard-header-leftSide">
            <Card2 />
            <div className="editCard-header-leftSide-text">
              <p className="editCard-header-leftSide-text-title">{title}</p>
              <p className="editCard-header-leftSide-text-text">
                in {inlist} liste
              </p>
              <p className="editCard-header-leftSide-text-label">LABEL</p>

              <div className="editCard-header-leftSide-text-buttons">
                <Button warning>DİKKAT</Button>
                <IconButton onClick={() => alert("denem")} />
              </div>
            </div>
          </div>
          <div
            className="close"
            onClick={() => {
              setEditAcildimi(false);
            }}
          >
            <Close />
          </div>
        </div>

        <div className="editCard-body">
          <div className="editCard-body-title">
            <List></List>
            <p className="editCard-body-title-text">{title}</p>
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

          {comment?.map((item: any, key: any) => {
            return (
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
                    <p>{item}</p>
                  </div>
                  <div className="editCard-body-comment-footer">
                    <p>Edit</p>
                    <p
                      onClick={() => {
                        store.DeleteComment(title, inlist, item);
                      }}
                    >
                      Delete
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default observer(editCard);
