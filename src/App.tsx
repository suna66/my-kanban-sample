import React, { useEffect, useState } from 'react';
import './App.css';
import Group from "components/Group";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { GroupInfo, ItemInfo } from 'common/Types';
import InputDialog from 'components/InputDialog';


function App() {
  const [groupList, setGroupList] = useState<GroupInfo[]>([]);
  const [itemList, setItemList] = useState<ItemInfo[]>([])
  const [openDialog, setOpenDialog] = useState<boolean>(false);


  useEffect(() => {
    let items = [
      {
        id:0,
        groupId:1,
        msg: "message11"
      },
      {
        id:1,
        groupId:1,
        msg: "message11"
      },
      {
        id:2,
        groupId:2,
        msg: "message11"
      },
    ];
    setGroupList([{name:"Backlog", id:1}, {name:"To Do", id:2},{name:"Doing", id:3},{name:"Done", id:4},]);
    setItemList(items);
  }, []);

  const onMovedItem = (itemList: ItemInfo[]) =>  {
    setItemList(itemList);
  }

  const onOpenDialog = () => {
    setOpenDialog(true);
  }

  const onCloseDialog = () => {
    setOpenDialog(false);
  }

  const onRegister = (msg: string) => {
    let item = {
      id: itemList.length,
      groupId: 1,
      msg: msg
    };
    itemList.push(item);
    setItemList(itemList);
    setOpenDialog(false);
  }

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        {
          groupList.map(group => {
            return (
              <section className="Section">
                <Group groupName={group.name} groupId={group.id} itemList={itemList} onMove={onMovedItem} onOpen={onOpenDialog}/>
              </section>
            );
          })
        }
      </DndProvider>
      <InputDialog isOpen={openDialog} onClose={onCloseDialog} onRegister={onRegister}/>
    </div>
  );
}

export default App;
