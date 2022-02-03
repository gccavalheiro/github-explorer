import React, { useState } from 'react';

export const Profile = () => {
  const [perfil, setPerfil] = useState({});
  const [repositories, setRepositories] = useState([]);

  React.useEffect(() => {
    fetch('https://api.github.com/users/gccavalheiro')
      .then((response) => response.json())
      .then((data) => setPerfil(data));

    fetch('https://api.github.com/users/gccavalheiro/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));

    // if (repositories) {
    //   const promises = repositories.map((repository) => {
    //     return fetch(
    //       `https://api.github.com/users/gccavalheiro/repos/${perfil.login}/${repository.name}/pulls`
    //     )
    //       .then((response) => response.json())
    //       .then((data) => Promise.resolve(data));
    //   });
    //   console.log(promises);
    //   Promise.all(promises).then((response) => console.log(response));
    // }
  }, []);

  console.log({ perfil, repositories });
  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <img
                src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png"
                alt="mountains cover"
              />
              <div>
                <img src={perfil.avatar_url} alt="person" />
              </div>
            </div>
            <div>
              <div>
                <div>
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg"
                    alt="yellow star"
                  />
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg"
                    alt="yellow star"
                  />
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg"
                    alt="yellow star"
                  />
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg1.svg"
                    alt="yellow star"
                  />
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/full_width_user_profile_card-svg2.svg"
                    alt="gray star"
                  />
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <a>
                      <h2>{perfil.name}</h2>
                    </a>
                    <p>Pro</p>
                  </div>
                  <p>{perfil.bio}</p>
                </div>
                <div>
                  <div>
                    <h2>{perfil.public_repos}</h2>
                    <a>
                      <p>Repositórios</p>
                    </a>
                  </div>
                  <div>
                    <h2>28</h2>
                    <a>
                      <p>Projects</p>
                    </a>
                  </div>
                  <div>
                    <h2>42</h2>
                    <a>
                      <p>Approved</p>
                    </a>
                  </div>
                </div>
                <div>
                  <div>
                    <div>Remote</div>
                    <div>Available</div>
                  </div>
                  <button>Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
