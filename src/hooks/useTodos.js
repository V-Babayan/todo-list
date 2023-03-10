import { useMemo } from "react";
import { priorityNumbers } from "../helpers/priorityNumbers";

/**
 *
 * @param { string } sort
 * @param {*} todos
 * @returns
 */
export const useSortTodos = (sort, todos) => {
  const sortedTodos = useMemo(() => {
    switch (sort) {
      case "title":
      case "description":
        return [...todos].sort((a, b) => a[sort]?.localeCompare(b[sort]));
      case "created":
      case "expected":
        return [...todos].sort((a, b) => Date.parse(a[sort]) - Date.parse(b[sort]));

      case "priority":
        return [...todos].sort((a, b) => priorityNumbers(a[sort]) - priorityNumbers(b[sort]));

      default:
        return todos;
    }
  }, [sort, todos]);

  return sortedTodos;
};

export const useTodos = ({ sort, query }, todos) => {
  const sortedTodos = useSortTodos(sort, todos);
  const sortedAndSearchedTodos = useMemo(() => {
    return sortedTodos.filter((todo) => todo.title?.toLowerCase().includes(query.toLowerCase()));
  }, [query, sortedTodos]);

  return sortedAndSearchedTodos;
};
