import React, {useState} from "react";
import List from "./components/List";
import Form from "./components/Form";
import Item from "./components/Item";

//criando um componente -> componentes aceitar como argumento um objeto com dados e retorna um elemento React
function Todo(){
    const [itemList, setItemList] = useState([]); //definição de um estado que recebe um array de item
  
    function handleAddItemToList(newItem){
        const item = new Item(newItem);

        setItemList([...itemList, item]);//entendi médio
    }

    function handleRemoveItemToList(item){
        console.log(item)
        const filteredItems = itemList.filter(
            itemCurrent => itemCurrent.id !== item.id
        );
      
        console.log(filteredItems);
        setItemList(filteredItems);
    }

    function handleEditItemToList(item, newText){
        console.log(item)
        const doneItem = itemList.find(
            itemCurrent => itemCurrent.id === item.id
        );

        doneItem.text=newText;

        setItemList([...itemList]);
    }

    function handleDoneItemToList(item){
        console.log(item)
        const doneItem = itemList.find(
            itemCurrent => itemCurrent.id === item.id
        );

        doneItem.done=true;

        setItemList([...itemList]);
    }

    return (
        //o que wrapper?
        <div className="todo-wrapper">
            <h1>ToDo List</h1>
            <Form onAddItem={handleAddItemToList} /> {}

            <List itemList={itemList} onItemDeleted={handleRemoveItemToList}
            onItemEdit={handleEditItemToList} onItemDone={handleDoneItemToList} /> 
        </div>
    );

    
}

export default Todo;