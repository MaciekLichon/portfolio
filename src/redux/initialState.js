const initialState = {
  projects: [
    {
      id: '1',
      title: 'Path finder',
      technologies: 'JavaScript',
      description: 'Play around with four path finding algorithms and compare their efficiency in different conditions.',
      mainImage: '/images/project_backgrounds/pathfinder.png',
      foregroundOne: '/images/icons/flag-gradient.png',
      foregroundTwo: '',
      appLink: 'https://macieklichon.github.io/Pathfinder/',
      gitLink: 'https://github.com/MaciekLichon/Pathfinder',
    },
    {
      id: '2',
      title: 'Youtify',
      technologies: 'React, Redux, Bootstrap, Youtube and Spotify API',
      description: 'Find your favorite music on Youtube and save it to your Spotify playlist with only a few clicks.',
      mainImage: '/images/project_backgrounds/youtube-spotify.png',
      foregroundOne: '/images/icons/headphone-iso-gradient.png',
      foregroundTwo: '',
      appLink: 'https://macieklichon.github.io/youtube-spotify/',
      gitLink: 'https://github.com/MaciekLichon/youtube-spotify',
    },
  ],
};

export default initialState;
