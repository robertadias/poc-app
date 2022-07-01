import React, { useState } from "react";

function Form(props){

    const [task, setTask] = useState('');

    //capturar o input(event)
    function handleChangeInput(event){
        const inputTask = event.target.value;
        setTask(inputTask);
    }

    //adiciona item na lista
    function addItemToList(event){
        event.preventDefault();

        if (task){

            props.onAddItem(task);
            setTask("");
        }
    }

    return(
        <form>
            <input type="text" placeholder="Adicione uma tarefa" onChange={handleChangeInput} value={task} />
            <button type="submit" onClick={addItemToList}>
                Adicionar
            </button>
        </form>
    );
}

export default Form;