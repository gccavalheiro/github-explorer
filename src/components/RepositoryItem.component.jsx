export const RepositoryItem = (props) => {
  return (
    <li>
      <h4>{props.repository.name ?? 'Default'} </h4>
      <p>{props.repository.description}</p>

      <a href={props.repository.link}>Acessar repositório</a>
    </li>
  );
};
