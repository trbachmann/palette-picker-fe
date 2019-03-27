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

export const mockProjectsAfterProjectDelete = [
  {
    "id": 1,
    "name": "Game Time",
    "created_at": "2019-03-23T18:13:25.614Z",
    "updated_at": "2019-03-23T18:13:25.614Z"
  },
  {
    "id": 3,
    "name": "Trapper Keeper",
    "created_at": "2019-03-23T18:13:25.652Z",
    "updated_at": "2019-03-23T18:13:25.652Z"
  }
];

export const mockPaletteBeforeUpdate = {
  name: 'Great Greens',
  color1: "#FCB97D",
  color2: "#EDD892",
  color3: "#C6B89E",
  color4: "#B5B8A3",
  color5: "#AABA9E",
  project_id: 1
};

export const mockPaletteWithUpdates = {
  name: 'Great Green Shades',
  color1: "#GGGGGG",
  color2: "#EDD892",
  color3: "#C6B89E",
  color4: "#G2G2G3",
  color5: "#AABA9E",
  project_id: 1
};

export const mockProjectsBeforePaletteUpdate = [
  {
    id: 1,
    name: "Game Maker",
    created_at: "2019-03-23T18:13:25.614Z",
    updated_at: "2019-03-23T18:13:25.614Z",
    palettes: [
      mockPaletteBeforeUpdate
    ]
  },
  {
    id: 2,
    name: "Keeper Time",
    created_at: "2019-03-23T18:13:27.614Z",
    updated_at: "2019-03-23T18:13:27.614Z",
    palettes: []
  }
];

export const mockProjectsAfterPaletteUpdate = [
  {
    id: 1,
    name: "Game Maker",
    created_at: "2019-03-23T18:13:25.614Z",
    updated_at: "2019-03-23T18:13:25.614Z",
    palettes: [
      mockPaletteWithUpdates
    ]
  },
  {
    id: 2,
    name: "Keeper Time",
    created_at: "2019-03-23T18:13:27.614Z",
    updated_at: "2019-03-23T18:13:27.614Z",
    palettes: []
  }
];

export const mockProjectsAfterNameUpdate = [
  {
    "id": 1,
    "name": "Game Time",
    "created_at": "2019-03-23T18:13:25.614Z",
    "updated_at": "2019-03-23T18:13:25.614Z",
    palettes: []
  },
  {
    "id": 2,
    "name": "Movie Matcher",
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

export const mockMinPaletteToExpand = [
  "#FGFHES",
  "#E6D292",
  "#B6B89E",
  "#A5B8A3",
  "#DABA9E",
];

export const mockColorsAfterExpand = [
  { hex: "#FGFHES", isLocked: false },
  { hex: "#E6D292", isLocked: false },
  { hex: "#B6B89E", isLocked: false },
  { hex: "#A5B8A3", isLocked: false },
  { hex: "#DABA9E", isLocked: false }
];

export const mockPaletteAfterLock = [
  { hex: "#FCB97D", isLocked: false },
  { hex: "#EDD892", isLocked: false },
  { hex: "#C6B89E", isLocked: false },
  { hex: "#B5B8A3", isLocked: true },
  { hex: "#AABA9E", isLocked: false }
]