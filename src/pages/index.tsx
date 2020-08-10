import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Card,
  List,
  ListHead,
  ListFooter,
  EditCard,
  NewCard,
} from "../components";
import { observer, inject } from "mobx-react";

const data1 = [
  {
    id: "1",
    content: "Kart 1.1",
  },
  {
    id: "2",
    content: "Kart 1.2",
  },
  {
    id: "3",
    content: "Kart 1.3",
  },
];
const data2 = [
  {
    id: "4",
    content: "Kart 1.1",
  },
  {
    id: "5",
    content: "Kart 1.2",
  },
  {
    id: "6",
    content: "Kart 1.3",
  },
];

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (
  source: any,
  destination: any,
  droppableSource: any,
  droppableDestination: any
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: any = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};
const defaultID = 10;

////////////////////            APP            /////////////////////////

const App: React.FC<any> = inject("store")(
  observer((props) => {
    const [items, setItems] = useState(props.store.cards1);
    const [selected, setSelected] = useState(props.store.cards2);
    const [acildiMi, setAcildiMi] = useState(true);
    const [listeAdi, setListeAdi] = useState("");
    const [CardTitle, setCardTitle] = useState("");
    const [Comment, setComment] = useState("");

    useEffect(() => {
      console.log(props.store.cards2);
    }, []);

    const id2List = {
      droppable: "items",
      droppable2: "selected",
    };

    const getList: any = (id: never) => {
      if (id2List[id] == "items") {
        return items;
      } else {
        return selected;
      }
    };

    const onDragEnd = (result: any) => {
      const { source, destination } = result;

      if (!destination) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
        const items = reorder(
          getList(source.droppableId),
          source.index,
          destination.index
        );

        let state: any = { items };

        if (source.droppableId === "droppable2") {
          setSelected(state);
        }
      } else {
        const result = move(
          getList(source.droppableId),
          getList(destination.droppableId),
          source,
          destination
        );

        setItems(result.droppable);
        setSelected(result.droppable2);
      }
    };

    return acildiMi ? (
      <NewCard
        setAcildiMi={setAcildiMi}
        listeAdi={listeAdi}
        setCardAdi={setCardTitle}
      ></NewCard>
    ) : (
      <div style={{ display: "flex" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
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
                <ListHead>Birinci Liste</ListHead>
                {items.map((item: any, index: any) => (
                  <div>
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Card green> {item.content}</Card>
                        </div>
                      )}
                    </Draggable>
                  </div>
                ))}
                {provided.placeholder}
                <ListFooter
                  onClick={() => {
                    setAcildiMi(true);
                    setListeAdi("birinci liste");
                  }}
                ></ListFooter>
              </div>
            )}
          </Droppable>
          <Droppable droppableId="droppable2">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={{
                  userSelect: "none",
                  width: 300,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 5,
                  paddingBottom: 5,
                  borderRadius: 12,
                  background: "#dee1ec",
                }}
              >
                <ListHead>İkinci Liste</ListHead>
                {selected.map((item: any, index: any) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card red> {item.content}</Card>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <ListFooter
                  onClick={() => {
                    let data = {
                      id: defaultID,
                      content: CardTitle,
                    };

                    setAcildiMi(true);
                    setListeAdi("ikinci liste");
                  }}
                ></ListFooter>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  })
);

export default App;
