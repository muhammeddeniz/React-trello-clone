import React from "react";
import App from "next/app";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { ListHead, Card, ListFooter } from "../index";

interface IProps {
  items: any;
  setEditTitle: any;
  setEditComment: any;
  setListeAdi: any;
  setEditCardAcildiMi: any;
  droppID: any;
  setNewCardAcildiMi: any;
  listeAdi: string;
}

const Dropable: React.FC<IProps> = ({
  items,
  setEditCardAcildiMi,
  setEditTitle,
  setEditComment,
  setListeAdi,
  setNewCardAcildiMi,
  droppID,
  listeAdi,
}) => {
  return (
    <Droppable droppableId={droppID}>
      {(provided, snapshot) => (
        <div
          className="home-elements-element"
          ref={provided.innerRef}
          style={{
            width: 300,
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 12,
            background: "#dee1ec",
          }}
        >
          <ListHead>
            {listeAdi == "birinci liste" ? "Birinci Liste" : "İkinci Liste"}{" "}
          </ListHead>
          {items.map((item: any, index: any) => (
            <div>
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Card
                      onClick={() => {
                        setEditTitle(item.content);
                        setEditComment(item.comment);
                        setListeAdi(listeAdi);
                        setEditCardAcildiMi(true);
                      }}
                      labels={item.labels ? item.labels : []}
                    >
                      {item.content}
                    </Card>
                  </div>
                )}
              </Draggable>
            </div>
          ))}
          {provided.placeholder}
          <ListFooter
            onClick={() => {
              setNewCardAcildiMi(true);
              setListeAdi("birinci liste");
            }}
          ></ListFooter>
        </div>
      )}
    </Droppable>
  );
};

export default Dropable;
