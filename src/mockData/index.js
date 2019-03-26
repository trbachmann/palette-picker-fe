export const mockProjects = [
  {
    "id": 1,
    "name": "Game Time",
    "created_at": "2019-03-23T18:13:25.614Z",
    "updated_at": "2019-03-23T18:13:25.614Z"
  },
  {
    "id": 2,
    "name": "Movie Tracker",
    "created_at": "2019-03-23T18:13:25.631Z",
    "updated_at": "2019-03-23T18:13:25.631Z"
  },
  {
    "id": 3,
    "name": "Trapper Keeper",
    "created_at": "2019-03-23T18:13:25.652Z",
    "updated_at": "2019-03-23T18:13:25.652Z"
  }
];

export const mockProjectsWithEmptyPalettes = [
  {
    "id": 1,
    "name": "Game Time",
    "created_at": "2019-03-23T18:13:25.614Z",
    "updated_at": "2019-03-23T18:13:25.614Z",
    palettes: []
  },
  {
    "id": 2,
    "name": "Movie Tracker",
    "created_at": "2019-03-23T18:13:25.631Z",
    "updated_at": "2019-03-23T18:13:25.631Z",
    palettes: []
  },
  {
    "id": 3,
    "name": "Trapper Keeper",
    "created_at": "2019-03-23T18:13:25.652Z",
    "updated_at": "2019-03-23T18:13:25.652Z",
    palettes: []
  }
];

export const mockProjectsWithFullPalettes = [
  {
    "id": 1,
    "name": "Game Time",
    "created_at": "2019-03-23T18:13:25.614Z",
    "updated_at": "2019-03-23T18:13:25.614Z",
    palettes: [
      {
          id: 1,
          name: "Not favorites",
          color1: "#FCB97D",
          color2: "#EDD892",
          color3: "#C6B89E",
          color4: "#B5B8A3",
          color5: "#AABA9E",
          project_id: 1,
          created_at: "2019-03-19T20:28:06.194Z",
          updated_at: "2019-03-19T20:28:06.194Z"
      },
      {
          id: 2,
          name: "Favorites",
          color1: "#A0DDFF",
          color2: "#758ECD",
          color3: "#C1CEFE",
          color4: "#7189FF",
          color5: "#624CAB",
          project_id: 1,
          created_at: "2019-03-19T20:28:06.193Z",
          updated_at: "2019-03-19T20:28:06.193Z"
      }
    ]
  },
  {
    "id": 2,
    "name": "Movie Tracker",
    "created_at": "2019-03-23T18:13:25.631Z",
    "updated_at": "2019-03-23T18:13:25.631Z",
    palettes: []
  },
  {
    "id": 3,
    "name": "Trapper Keeper",
    "created_at": "2019-03-23T18:13:25.652Z",
    "updated_at": "2019-03-23T18:13:25.652Z",
    palettes: []
  }
];

export const mockPalette = [
  { hex: "#FCB97D", isLocked: false },
  { hex: "#EDD892", isLocked: false },
  { hex: "#C6B89E", isLocked: false },
  { hex: "#B5B8A3", isLocked: false },
  { hex: "#AABA9E", isLocked: false }
];

export const mockProjectPalettes = [
  {
      id: 1,
      name: "Not favorites",
      color1: "#FCB97D",
      color2: "#EDD892",
      color3: "#C6B89E",
      color4: "#B5B8A3",
      color5: "#AABA9E",
      project_id: 1,
      created_at: "2019-03-19T20:28:06.194Z",
      updated_at: "2019-03-19T20:28:06.194Z"
  },
  {
      id: 2,
      name: "Favorites",
      color1: "#A0DDFF",
      color2: "#758ECD",
      color3: "#C1CEFE",
      color4: "#7189FF",
      color5: "#624CAB",
      project_id: 1,
      created_at: "2019-03-19T20:28:06.193Z",
      updated_at: "2019-03-19T20:28:06.193Z"
  }
];

export const mockProjectsAfterDelete = [
  {
    "id": 1,
    "name": "Game Time",
    "created_at": "2019-03-23T18:13:25.614Z",
    "updated_at": "2019-03-23T18:13:25.614Z",
    palettes: [
      {
        id: 2,
        name: "Favorites",
        color1: "#A0DDFF",
        color2: "#758ECD",
        color3: "#C1CEFE",
        color4: "#7189FF",
        color5: "#624CAB",
        project_id: 1,
        created_at: "2019-03-19T20:28:06.193Z",
        updated_at: "2019-03-19T20:28:06.193Z"
      }
    ]
  },
  {
    "id": 2,
    "name": "Movie Tracker",
    "created_at": "2019-03-23T18:13:25.631Z",
    "updated_at": "2019-03-23T18:13:25.631Z",
    palettes: []
  },
  {
    "id": 3,
    "name": "Trapper Keeper",
    "created_at": "2019-03-23T18:13:25.652Z",
    "updated_at": "2019-03-23T18:13:25.652Z",
    palettes: []
  }
];