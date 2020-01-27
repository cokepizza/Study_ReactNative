import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import Styled from 'styled-components/native';

import { TodoListContext } from '~/Context/TodoListContext';

import EmptyItem from './EmptyItem';
import TodoItem from './TodoItem';

const Container = Styled(FlatList)`
`;

const TodoList = () => {
    const { todoList, removeTodoList } = useContext(TodoListContext);

    return (
        <Container
            data={todoList}
            keyExtractor={(item, index) => {
                return `todo-${index}`;
            }}
            ListEmptyComponent={<EmptyItem />}
            renderItem={({ item, index }) => (
                <TodoItem
                    text={item}
                    onDelete={() => removeTodoList(index)}
                />
            )}
            contentContainerStyle={todoList.length === 0 && { flex: 1 }}
        />
    );
};

export default TodoList;
