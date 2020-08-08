import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card, List, ListHead, ListFooter } from "../components";

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

const grid = 8;

class App extends Component {
  state = {
    items: data1,
    selected: data2,
  };

  id2List = {
    droppable: "items",
    droppable2: "selected",
  };

  getList: any = (id: never) => this.state[this.id2List[id]];

  onDragEnd = (result: any) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state: any = { items };

      if (source.droppableId === "droppable2") {
        state = { selected: items };
      }

      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.setState({
        items: result.droppable,
        selected: result.droppable2,
      });
    }
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <DragDropContext onDragEnd={this.onDragEnd}>
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
                {this.state.items.map((item, index) => (
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
                <ListFooter></ListFooter>
              </div>
            )}
          </Droppable>
          <Droppable droppableId="droppable2">
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
                <ListHead>İkinci Liste</ListHead>
                {this.state.selected.map((item, index) => (
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
                <ListFooter></ListFooter>
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

export default App;
