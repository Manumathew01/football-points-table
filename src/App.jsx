import './App.css';
import TableContainer from './components/TableContainer';

import { QueryClient, QueryClientProvider } from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="bg-gray-200 grid grid-flow-col">
      <QueryClientProvider client={queryClient}>
        <TableContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
