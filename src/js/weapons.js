const bookProps = {
  id: "book",
  label: "book",
  mannyZ: -75,
  animation: "spellcast",
  armature: {
    scale: {
      x: 0.75,
      y: 0.75,
      z: 0.75,
    },
    offset: {
      position: {
        x: 0,
        y: 8.8,
        z: 7.27,
      },
      rotation: {
        x: 0.88,
        y: 0.09,
        z: 1.35,
      },
    },
  },
};

const tomeProps = {
  id: "tome",
  label: "tome",
  mannyZ: -75,
  animation: "spellcast",
  armature: {
    offset: {
      position: {
        x: 0,
        y: 8.8,
        z: 7.27,
      },
      rotation: {
        x: 0.88,
        y: 0.09,
        z: 1.35,
      },
    },
  },
};

const chronicleProps = {
  id: "chronicle",
  label: "chronicle",
  mannyZ: -75,
  animation: "inwardslash",
  armature: {
    offset: {
      position: {
        x: 5.8,
        y: 7.42,
        z: 2.3,
      },
      rotation: {
        x: 0.4,
        y: -0.03,
        z: -1.58,
      },
    },
  },
};

const grimoireProps = {
  id: "grimoire",
  label: "grimoire",
  mannyZ: -75,
  animation: "spellcast",
  armature: {
    offset: {
      position: {
        x: 0,
        y: 8.98,
        z: 6.48,
      },
      rotation: {
        x: 1.15,
        y: 0.15,
        z: 1.35,
      },
    },
  },
};

const wandProps = {
  id: "wand",
  label: "wand",
  mannyZ: -100,
  armature: {
    offset: {
      position: {
        x: 11.78,
        y: 8.76,
        z: 4.04,
      },
      rotation: {
        x: 0.4,
        y: 0,
        z: -1.3,
      },
    },
  },
};

const boneWandProps = {
  id: "bonewand",
  label: "bonewand",
  mannyZ: -100,
  armature: {
    offset: wandProps.armature.offset,
  },
};

const ghostWandProps = {
  id: "ghostwand",
  label: "ghostwand",
  mannyZ: -100,
  armature: {
    offset: wandProps.armature.offset,
  },
};

const graveWandProps = {
  id: "gravewand",
  label: "gravewand",
  mannyZ: -100,
  armature: {
    offset: wandProps.armature.offset,
  },
};

const shortSwordProps = {
  id: "shortsword",
  label: "shortsword",
  mannyZ: -75,
  animation: "inwardslash",
  armature: {
    offset: {
      position: {
        x: 12.67,
        y: 7.27,
        z: 2.82,
      },
      rotation: {
        x: 0.4,
        y: -0.03,
        z: -1.58,
      },
    },
  },
};

const longSwordProps = {
  id: "longsword",
  label: "longsword",
  animation: "swordrun",
  armature: {
    scale: {
      x: 1.25,
      y: 1.5,
      z: 1.25,
    },
    offset: {
      position: {
        x: 17.01,
        y: 1.15,
        z: -1.66,
      },
      rotation: {
        x: -0.39,
        y: 0.49,
        z: -1.77,
      },
    },
  },
};

const scimitarProps = {
  id: "scimitar",
  label: "scimitar",
  mannyZ: -50,
  animation: "360swing",
  armature: {
    offset: {
      position: {
        x: 12.67,
        y: 7.27,
        z: 2.82,
      },
      rotation: {
        x: -2.9,
        y: -0.03,
        z: -1.58,
      },
    },
  },
};

const falchionProps = {
  id: "falchion",
  label: "falchion",
  mannyZ: -35,
  animation: "horizontalswing",
  armature: {
    offset: {
      position: {
        x: 12.67,
        y: 7.27,
        z: 2.82,
      },
      rotation: {
        x: 0.4,
        y: -0.03,
        z: -1.58,
      },
    },
  },
};

const katanaProps = {
  id: "katana",
  label: "katana",
  animation: "swordrun",
  armature: {
    offset: {
      position: {
        x: 3.73,
        y: 6.32,
        z: 2.52,
      },
      rotation: {
        x: -1.64,
        y: 0.43,
        z: -1.12,
      },
    },
  },
};

const clubProps = {
  id: "club",
  label: "club",
  mannyZ: -35,
  animation: "downwardswing",
  armature: {
    offset: {
      position: {
        x: 8.41,
        y: 8.38,
        z: 3.92,
      },
      rotation: {
        x: -1.03,
        y: -0.03,
        z: -1.58,
      },
    },
  },
};

const maceProps = {
  id: "mace",
  label: "mace",
  mannyZ: -35,
  animation: "downwardswing",
  armature: {
    offset: {
      position: {
        x: 8.41,
        y: 8.38,
        z: 3.92,
      },
      rotation: {
        x: -1.03,
        y: -0.21,
        z: -1.58,
      },
    },
  },
};

const maulProps = {
  id: "maul",
  label: "maul",
  mannyZ: -35,
  animation: "heavyswing",
  armature: {
    scale: {
      x: 1,
      y: 1.25,
      z: 1,
    },
    offset: {
      position: {
        x: -6.85,
        y: 1.56,
        z: 8.83,
      },
      rotation: {
        x: -1.07,
        y: -0.39,
        z: -1.06,
      },
    },
  },
};

const quarterstaffProps = {
  id: "quarterstaff",
  label: "quarterstaff",
  mannyZ: -35,
  animation: "spellcast2h",
  armature: {
    offset: {
      position: {
        x: 19.69,
        y: -30.5,
        z: -7.3,
      },
      rotation: {
        x: -0.58,
        y: -2.58,
        z: -0.76,
      },
    },
  },
};

const warhammerProps = {
  id: "warhammer",
  label: "warhammer",
  mannyZ: -20,
  animation: "battlecry",
  armature: {
    offset: {
      position: {
        x: 11.21,
        y: 9.46,
        z: 3.12,
      },
      rotation: {
        x: -2.46,
        y: -0.21,
        z: -1.76,
      },
    },
  },
};

module.exports = [
  bookProps,
  tomeProps,
  chronicleProps,
  grimoireProps,
  wandProps,
  boneWandProps,
  ghostWandProps,
  graveWandProps,
  shortSwordProps,
  longSwordProps,
  scimitarProps,
  falchionProps,
  katanaProps,
  clubProps,
  maceProps,
  maulProps,
  quarterstaffProps,
  warhammerProps,
];
