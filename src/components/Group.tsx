import React from "react";
import style from "components/Group.module.css";
import Item from "components/Item";
import Draggable from "components/Draggable";
import { useDrop } from "react-dnd";
import { ItemInfo } from "common/Types";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';

const Group : React.FC<{groupName: string, groupId: number, itemList:ItemInfo[], onMove:(items:ItemInfo[])=>void, onOpen:()=>void}> = ({groupName, groupId, itemList, onMove, onOpen})  => {

    const [, drop] = useDrop({
        accept: "box",
        // hover: () => {
        //     console.log("hover");
        // },
        drop: (item0: ItemInfo) => {
            for (var item of itemList) {
                if (item.id == item0.id) {
                    item.groupId = groupId;
                    onMove([...itemList]);
                    break;
                }
            }
        }
    });

    const onAddClick = () => {
        onOpen();
    }

    return (
        <div className={style.group} ref={drop}>
            {groupName}
            {groupId==1 && <IconButton onClick={onAddClick}><AddCircleIcon/></IconButton>}
            {itemList.map((item) => {
                if (item.groupId == groupId) {
                    return (
                    <Draggable item={item}>
                        <Item item={item} />
                    </Draggable>
                    );
                }
            })
            }
        </div>
    );
}

export default Group;