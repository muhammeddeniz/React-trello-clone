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
  Dropable,
} from "../components";
import { observer, inject } from "mobx-react";

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

////////////////////            APP            /////////////////////////

const App: React.FC<any> = inject("store")(
  observer((props) => {
    const [items, setItems] = useState(props.store.cards1);
    const [selected, setSelected] = useState(props.store.cards2);

    const [newCardAcildiMi, setNewCardAcildiMi] = useState(false);
    const [editCardAcildiMi, setEditCardAcildiMi] = useState(false);

    const [defaultID, setDefaultID] = useState(10);
    const [listeAdi, setListeAdi] = useState("");
    const [CardTitle, setCardTitle] = useState("");
    const [Comment, setComment] = useState("");

    const [editTitle, setEditTitle] = useState("");
    const [editCommnet, setEditComment] = useState([]);
    const [data, setData] = useState({
      id: "",
      title: "",
      comment: "",
    });

    useEffect(() => {
      setItems(props.store.cards1);
      setSelected(props.store.cards2);
    }, [newCardAcildiMi]);

    useEffect(() => {
      props.store.cards1 = items;
      props.store.cards2 = selected;
    }, [items, selected]);

    const id2List = {
      droppable1: "items",
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
          setSelected(items);
        }
        if (source.droppableId === "droppable1") {
          setItems(items);
        }
      } else {
        const result = move(
          getList(source.droppableId),
          getList(destination.droppableId),
          source,
          destination
        );

        setItems(result.droppable1);
        setSelected(result.droppable2);
      }
    };

    return newCardAcildiMi ? (
      <NewCard
        setData={setData}
        store={props.store}
        id={defaultID.toString()}
        setID={setDefaultID}
        setAcildiMi={setNewCardAcildiMi}
        listeAdi={listeAdi}
        setCardAdi={setCardTitle}
      ></NewCard>
    ) : editCardAcildiMi ? (
      <EditCard
        store={props.store}
        setEditAcildimi={setEditCardAcildiMi}
        title={editTitle}
        comment={editCommnet}
        inlist={listeAdi}
      ></EditCard>
    ) : (
      <div className="home-elements" style={{ display: "flex" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <div>
            <Dropable
              listeAdi="birinci liste"
              droppID="droppable1"
              items={items}
              setEditCardAcildiMi={setEditCardAcildiMi}
              setEditTitle={setEditTitle}
              setEditComment={setEditComment}
              setListeAdi={setListeAdi}
              setNewCardAcildiMi={setNewCardAcildiMi}
            ></Dropable>
          </div>
          <div>
            <Dropable
              listeAdi="ikinci liste"
              droppID="droppable2"
              items={selected}
              setEditCardAcildiMi={setEditCardAcildiMi}
              setEditTitle={setEditTitle}
              setEditComment={setEditComment}
              setListeAdi={setListeAdi}
              setNewCardAcildiMi={setNewCardAcildiMi}
            ></Dropable>
          </div>
        </DragDropContext>
      </div>
    );
  })
);

export default App;
