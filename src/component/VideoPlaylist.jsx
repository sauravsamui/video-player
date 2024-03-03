import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import DragComponent from "./DragComponent";
import MoviesData from "../moviesData.json";
const VideoPlaylist = ({ videoKey }) => {
  const [items, setItems] = useState(MoviesData);
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);
    setItems(newItems);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {items.map((item, index) => (
              <DragComponent key={item.id} item={item} index={index} videoKey={videoKey} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default VideoPlaylist;
