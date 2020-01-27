import React, { useState } from 'react';

import AddButton from './AddButton';
import TodoInput from './TodoInput';

const AddTodo = () => {
    const [ showInput, setShowInput ] = useState(false);
    return (
        <>
            <AddButton onPress={() => setShowInput(true)}/>
            {showInput && <TodoInput hideTodoInput={() => setShowInput(false)} />}
        </>
    );
};

export default AddTodo;