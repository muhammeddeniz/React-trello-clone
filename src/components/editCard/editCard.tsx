import React, { useState, useEffect } from "react";
import "./editCard.scss";
import { observer } from "mobx-react";

import { Card2, Close, List } from "../icons";
import { Button, IconButton, Textarea, Labels, AddLabel } from "../index";
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
  const [newComment, SetNewComment] = useState("");
  const [addLabelOpen, setAddlabelOpen] = useState(false);

  const [warning, setWarning] = useState(false);
  const [info, setInfo] = useState(false);
  const [success, setSuccess] = useState(false);
  const [danger, setDanger] = useState(false);

  useEffect(() => {
    if (warning) {
      store.AddNewLabel(title, "y", inlist);
      setWarning(false);
      setAddlabelOpen(false);
    }
    if (info) {
      store.AddNewLabel(title, "b", inlist);
      setInfo(false);
      setAddlabelOpen(false);
    }
    if (success) {
      store.AddNewLabel(title, "g", inlist);
      setSuccess(false);
      setAddlabelOpen(false);
    }
    if (danger) {
      store.AddNewLabel(title, "r", inlist);
      setDanger(false);
      setAddlabelOpen(false);
    }
  });

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
                <Labels
                  inList={inlist}
                  store={store}
                  data={data}
                  title={title}
                ></Labels>

                <IconButton
                  onClick={() => {
                    setAddlabelOpen(!addLabelOpen);
                  }}
                />
                <div className="editCard-header-leftSide-text-buttons-label">
                  <div className="editCard-header-leftSide-text-buttons-label-1">
                    {addLabelOpen ? (
                      <AddLabel
                        setSuccess={setSuccess}
                        setInfo={setInfo}
                        setDanger={setDanger}
                        setWarning={setWarning}
                      ></AddLabel>
                    ) : null}
                  </div>
                </div>
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
              <input
                className="editCard-body-inputSide-input-i"
                value={newComment}
                onChange={(e: any) => SetNewComment(e.target.value)}
              ></input>

              <Button
                success
                onClick={() => {
                  let newCom = {
                    text: newComment,
                    time: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()} `,
                  };
                  store.AddNewComment(title, newCom, inlist);
                }}
              >
                SAVE
              </Button>
            </div>
          </div>

          {comment?.map((item: any, key: any) => {
            return (
              <div className="editCard-body-comment">
                <div className="editCard-body-comment-header">
                  <Profile />
                  <div className="editCard-body-comment-header-t">
                    <p className="editCard-body-comment-header-t-title">
                      {store.name}
                    </p>
                    <p className="editCard-body-comment-header-t-text">
                      {<p>{item.time}</p>}
                    </p>
                  </div>
                </div>
                <div className="editCard-body-comment-body">
                  <div className="editCard-body-comment-body-text">
                    <p>{item.text}</p>
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
