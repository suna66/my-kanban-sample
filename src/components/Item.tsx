import React from "react";
import style from "components/Item.module.css";
import { ItemInfo } from "common/Types";
import ClearIcon from '@mui/icons-material/ClearOutlined';
import EditIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';


const Item: React.FC<{item: ItemInfo}> = ({item}) => {
    return (
        <div className={style.item}>
            <div className={style.contents}>
                {item.msg}
            </div>
            <div className={style.button}>
                <IconButton><EditIcon/></IconButton>
                <IconButton><ClearIcon/></IconButton>
            </div>
        </div>
    );
};

export default Item;