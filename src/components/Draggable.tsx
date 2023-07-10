import React, { ReactNode } from 'react';
import { useDrag } from 'react-dnd';
import { ItemInfo } from 'common/Types';

const Draggable : React.FC<{item:ItemInfo, children:ReactNode}> = ({item, children}) => {
    //const ref = useRef<HTMLDivElement>(null);

    const [collected, drag] = useDrag(
        {
            type: "box",
            item: item,
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
                canDrag: monitor.canDrag()
            })
        }, [item]);


    return (
        <div
        ref={drag}
        style={{
            cursor: collected.canDrag ? "move" : "default",
            opacity: collected.isDragging ? 0.4 : 1.0
        }}
        draggable="true"
        >
        {children}
      </div>
    );
}

export default Draggable;