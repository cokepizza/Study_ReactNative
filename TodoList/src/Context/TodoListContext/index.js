import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const TodoListContext = createContext({
    todoList: [],
    addTodoList: todo => {},
    removeTodoList: index => {},
});

const TodoListContextProvider = ({ children }) => {
    const [ todoList, setTodoList ] = useState([]);

    const addTodoList = todo => {
        const list = [ ...todoList, todo ];
        setTodoList(list);
        AsyncStorage.setItem('todoList', JSON.stringify(list));
    };

    const removeTodoList = index => {
        let list = [ ...todoList ];
        list.splice(index, 1);
        setTodoList(list);
        AsyncStorage.setItem('todoList', JSON.stringify(list));
    };

    const initData = async () => {
        try {
            const list = await AsyncStorage.getItem('todoList');
            if(list != null) {
                setTodoList(JSON.parse(list));
            }
        } catch(e) {
            console.log(e);
        }
    };

    useEffect(() => {
        initData();
    }, []);

    return (
        <TodoListContext.Provider
            value={{
                todoList,
                addTodoList,
                removeTodoList,
            }}>
            {children}
        </TodoListContext.Provider>
    )
};

export { TodoListContextProvider, TodoListContext };