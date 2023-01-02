import { createContext, useState } from 'react';

const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [yearFilter, setYearFilter] = useState('2022 - 2023');
  const [league, setLeague] = useState('eng.1');

  const selectHandler = (event) => {
    setYearFilter(event.target.value);
  };

  return (
    <TableContext.Provider value={{ league, setLeague, yearFilter, selectHandler }}>{children}</TableContext.Provider>
  );
};

export default TableContext;
