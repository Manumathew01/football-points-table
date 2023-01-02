import TableContainer from './components/TableContainer';
import { TableProvider } from '../src/providers/TableContext';
import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="bg-gray-200 grid grid-flow-col">
      <TableProvider>
        <QueryClientProvider client={queryClient}>
          <TableContainer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </TableProvider>
    </div>
  );
}

export default App;
