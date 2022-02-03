import { RepositoryItem } from './RepositoryItem.component';

import '../styles/repositories.scss';
import React from 'react';

// https://api.github.com/users/gccavalheiro

// const repository = {
//   name: 'unform',
//   description: 'Forms in React',
//   link: 'https://github.com/unform/unform',
// };

export const RepositoryList = () => {
  const [repositories, setRepositories] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.github.com/users/gccavalheiro/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository, index) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
};
