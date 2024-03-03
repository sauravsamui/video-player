import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { ROUTES } from "../utils/Constants";

const DragComponent = ({ item, index, videoKey }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <Link to={`${ROUTES.WATCH}/?v=${item.key}`}>
            <VideoCard data={item} playlist highlight={item.key === videoKey} />
          </Link>
        </div>
      )}
    </Draggable>
  );
};

export default DragComponent;
