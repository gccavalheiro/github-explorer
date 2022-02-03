
interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export const RepositoryItem = (props: RepositoryItemProps) => {
  return (
    <li>
      <h4>{props.repository.name} </h4>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
};
