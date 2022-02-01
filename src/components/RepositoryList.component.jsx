import { RepositoryItem } from './RepositoryItem.component';

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform',
};

export const RepositoryList = () => {
  return (
    <section>
      <h2>Lista de repositórios</h2>

      <ul>
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  );
};
