import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList.component';
import './styles/global.scss';

export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}
