const RACES = [
  {
    raceID: "bm",
    name: "Beastmen",
    type: "chaos",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "khazrak",
        name: "Khazrak the One-Eye",
        factionName: "Warherd of the One-Eye",
        completionInfo: null,
        image,
      },
      {
        lordID: "malagor",
        name: "Malagor the Dark Omen",
        factionName: "Harbinger of Disaster",
        completionInfo: null,
        image,
      },
      {
        lordID: "morghur",
        name: "Morghur the Shadowgrave",
        factionName: "Warherd of the Shadowgrave",
        completionInfo: null,
        image,
      },
      {
        lordID: "taurox",
        name: "Taurox the Brass Bull",
        factionName: "Slaughterhorn Tribe",
        completionInfo: null,
        image,
      },
    ],
  },
  {
    raceID: "br",
    name: "Bretonnia",
    type: "order",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "alberic",
        name: "Alberic de Bordeleaux",
        factionName: "Bordeleaux",
        completionInfo: null,
        image,
      },
      {
        lordID: "fay_enchantress",
        name: "Fay Enchantress",
        factionName: "Carcassonne",
        completionInfo: null,
        image,
      },
      {
        lordID: "louen",
        name: "Louen Leoncoeur",
        factionName: "Couronne",
        completionInfo: null,
        image,
      },
      {
        lordID: "repanse",
        name: "Repanse de Lyonesse",
        factionName: "Lyonesse",
        completionInfo: null,
        image,
      },
    ],
  },
  {
    raceID: "cd",
    name: "Chaos Dwarves",
    type: "chaos",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "astragoth",
        name: "Astragoth Ironhand",
        factionName: "unknown",
        completionInfo: null,
        image,
      },
      {
        lordID: "drazhoath",
        name: "Drazhoath the Ashen",
        factionName: "Legion of Azgorh",
        completionInfo: null,
        image,
      },
      {
        lordID: "zhatan",
        name: "Zhatan the Black",
        factionName: "unknown",
        completionInfo: null,
        image,
      },
    ],
  },
  {
    raceID: "dc",
    name: "Daemons of Chaos",
    type: "chaos",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "dp",
        name: "Daemon Prince",
        factionName: "Legion of Chaos",
        completionInfo: null,
        image,
      },
    ],
  },
  {
    raceID: "de",
    name: "Dark Elves",
    type: "destruction",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "lokhir",
        name: "Lokhir Fellheart",
        factionName: "The Blessed Dread",
        completionInfo: null,
        image,
      },
      {
        lordID: "malekith",
        name: "Malekith",
        factionName: "Naggarond",
        completionInfo: null,
        image,
      },
      {
        lordID: "morathi",
        name: "Morathi",
        factionName: "Cult of Pleasure",
        completionInfo: null,
        image,
      },
      {
        lordID: "hellebron",
        name: "Crone Hellebron",
        factionName: "Har Ganeth",
        completionInfo: null,
        image,
      },
      {
        lordID: "malus",
        name: "Malus Darkblade",
        factionName: "Hag Graef",
        completionInfo: null,
        image,
      },
      {
        lordID: "rakarth",
        name: "Rakarth",
        factionName: "The Thousand Maws",
        completionInfo: null,
        image,
      },
    ],
  },

  {
    raceID: "dw",
    name: "Dwarfs",
    type: "order",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "grombrindal",
        name: "Grombrindal",
        factionName: "The Ancestral Throng",
        completionInfo: null,
        image,
      },
      {
        lordID: "thorgrim",
        name: "Thorgrim Grudgebearer",
        factionName: "Karaz-a-Karak",
        completionInfo: null,
        image,
      },
      {
        lordID: "ungrim",
        name: "Ungrim Ironfist",
        factionName: "Karak Kadrin",
        completionInfo: null,
        image,
      },
      {
        lordID: "belegar",
        name: "Belegar Ironhammer",
        factionName: "Clan Angrund",
        completionInfo: null,
        image,
      },
      {
        lordID: "thorek",
        name: "Thorek Ironbrow",
        factionName: "Ironbrow's Expedition",
        completionInfo: null,
        image,
      },
    ],
  },
  {
    raceID: "em",
    name: "Empire",
    type: "order",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "karl",
        name: "Karl Franz",
        factionName: "Reikland",
        completionInfo: null,
        image,
      },
      {
        lordID: "balthasar",
        name: "Balthasar Gelt",
        factionName: "Golden Order",
        completionInfo: null,
        image,
      },
      {
        lordID: "volkmar",
        name: "Volkmar the Grim",
        factionName: "The Cult of Sigmar",
        completionInfo: null,
        image,
      },
      {
        lordID: "markus",
        name: "Markus Wulfhart",
        factionName: "The Huntsmarshal's Expedition",
        completionInfo: null,
        image,
      },
    ],
  },
  {
    raceID: "gc",
    name: "Grand Cathay",
    type: "order",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "miao",
        name: "Miao Ying",
        factionName: "The Northern Provinces",
        completionInfo: null,
        image,
      },
      {
        lordID: "zhao",
        name: "Zhao Ming",
        factionName: "The Western Provinces",
        completionInfo: null,
        image,
      },
    ],
  },
  {
    raceID: "gr",
    name: "Greenskins",
    type: "chaos",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "grimgor",
        name: "Grimgor Ironhide",
        factionName: "Grimgor's Ardboyz",
        completionInfo: null,
        image,
      },
      {
        lordID: "azhag",
        name: "Azhag the Slaughterer",
        factionName: "Bonerattlaz",
        completionInfo: null,
        image,
      },
      {
        lordID: "skarsnik",
        name: "Skarsnik",
        factionName: "Crooked Moon",
        completionInfo: null,
        image,
      },
      {
        lordID: "wurrzag",
        name: "Wurrzag",
        factionName: "The Bloody Handz",
        completionInfo: null,
        image,
      },
      {
        lordID: "grom",
        name: "Grom the Paunch",
        factionName: "Broken Axe Tribe",
        completionInfo: null,
        image,
      },
    ],
  },
  {
    raceID: "he",
    name: "High Elves",
    type: "order",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "teclis",
        name: "Teclis",
        factionName: "Order of Loremasters",
        completionInfo: null,
        image,
      },
      {
        lordID: "tyrion",
        name: "Tyrion",
        factionName: "Lothern",
        completionInfo: null,
        image,
      },
      {
        lordID: "alarielle",
        name: "Alarielle the Radiant",
        factionName: "Avelorn",
        completionInfo: null,
        image,
      },
      {
        lordID: "eltharion",
        name: "Eltharion the Grim",
        factionName: "Yvresse",
        completionInfo: null,
        image,
      },
      {
        lordID: "alith",
        name: "Alith Anar",
        factionName: "Nagarythe",
        completionInfo: null,
        image,
      },
      {
        lordID: "imrik",
        name: "Imrik",
        factionName: "Knights of Caledor",
        completionInfo: null,
        image,
      },
    ],
  },

  {
    raceID: "kh",
    name: "Khorne",
    type: "chaos",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "skarbrand",
        name: "Skarbrand the Exiled",
        factionName: "Exiles of Khorne",
        completionInfo: null,
        image,
      },
    ],
  },
  {
    raceID: "kv",
    name: "Kislev",
    type: "order",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "katarin",
        name: "Tzarina Katarin",
        factionName: "The Ice Court",
        completionInfo: null,
        image,
      },
      {
        lordID: "kostaltyn",
        name: "Kostalytn",
        factionName: "The Grand Orthodoxy",
        completionInfo: null,
        image,
      },
      {
        lordID: "boris",
        name: "Boris Ursus",
        factionName: "Ursun Revivalists",
        completionInfo: null,
        image,
      },
    ],
  },
  {
    raceID: "lm",
    name: "Lizardmen",
    type: "order",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "mazdamundi",
        name: "Mazdamundi",
        factionName: "Hexoatl",
        completionInfo: null,
        image,
      },
      {
        lordID: "kroqgar",
        name: "Kroq-Gar",
        factionName: "Last Defenders",
        completionInfo: null,
        image,
      },
      {
        lordID: "tehenhauin",
        name: "Tehenhauin",
        factionName: "Cult of Sotek",
        completionInfo: null,
        image,
      },
      {
        lordID: "tiqtaqto",
        name: "Tiqtaq'to",
        factionName: "Tlaqua",
        completionInfo: null,
        image,
      },
      {
        lordID: "gorrok",
        name: "Gor-Rok",
        factionName: "Itza",
        completionInfo: null,
        image,
      },
      {
        lordID: "nakai",
        name: "Nakai the Wanderer",
        factionName: "Spirit of the Jungle",
        completionInfo: null,
        image,
      },
      {
        lordID: "oxyotl",
        name: "Oxyotl",
        factionName: "Ghosts of Pahuax",
        completionInfo: null,
        image,
      },
    ],
  },

  {
    raceID: "no",
    name: "Norsca",
    type: "chaos",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "wulfrik",
        name: "Wulfrik the Wanderer",
        factionName: "World Walkers",
        completionInfo: null,
        image,
      },
      {
        lordID: "throgg",
        name: "Throgg",
        factionName: "Wintertooth",
        completionInfo: null,
        image,
      },
    ],
  },

  {
    raceID: "ng",
    name: "Nurgle",
    type: "chaos",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "kugath",
        name: "Ku'gath Plaguefather",
        factionName: "Poxmakers of Nurgle",
        completionInfo: null,
        image,
      },
    ],
  },
  {
    raceID: "ok",
    name: "Ogre Kingdoms",
    type: "destruction",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "skrag",
        name: "Skrag the Slaughterer",
        factionName: "Disciples of the Maw",
        completionInfo: null,
        image,
      },
      {
        lordID: "greasus",
        name: "Greasus Goldtooth",
        factionName: "Goldtooth",
        completionInfo: null,
        image,
      },
    ],
  },
  {
    raceID: "sk",
    name: "Skaven",
    type: "destruction",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "skrolk",
        name: "Lord Skrolk",
        factionName: "Clan Pestilens",
        completionInfo: null,
        image,
      },
      {
        lordID: "queek",
        name: "Queek Headtaker",
        factionName: "Clan Mors",
        completionInfo: null,
        image,
      },
      {
        lordID: "tretch",
        name: "Tretch Craventail",
        factionName: "Clan Rictus",
        completionInfo: null,
        image,
      },
      {
        lordID: "ikit",
        name: "Ikit Claw",
        factionName: "Clan Skryre",
        completionInfo: null,
        image,
      },
      {
        lordID: "snikch",
        name: "Deathmaster Snikch",
        factionName: "Clan Eshin",
        completionInfo: null,
        image,
      },
      {
        lordID: "throt",
        name: "Throt the Unclean",
        factionName: "Clan Moulder",
        completionInfo: null,
        image,
      },
    ],
  },

  {
    raceID: "sl",
    name: "Slaanesh",
    type: "chaos",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "nkari",
        name: "N'Kari",
        factionName: "Seducers of Slaanesh",
        completionInfo: null,
        image,
      },
    ],
  },
  {
    raceID: "tk",
    name: "Tomb Kings",
    type: "undead",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "settra",
        name: "Settra the Imperishable",
        factionName: "Khemri",
        completionInfo: null,
        image,
      },
      {
        lordID: "arkhan",
        name: "Arkhan the Black",
        factionName: "Followers of Nagash",
        completionInfo: null,
        image,
      },
      {
        lordID: "khalida",
        name: "High Queen Khalida",
        factionName: "Court of Lybaras",
        completionInfo: null,
        image,
      },
      {
        lordID: "khatep",
        name: "Grand Hierophant Khatep",
        factionName: "Exiles of Nehek",
        completionInfo: null,
        image,
      },
    ],
  },

  {
    raceID: "tz",
    name: "Tzeentch",
    type: "chaos",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "kairos",
        name: "Kairos Fateweaver",
        factionName: "Oracles of Tzeentch",
        completionInfo: null,
        image,
      },
    ],
  },
  {
    raceID: "vc",
    name: "Vampire Counts",
    type: "undead",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "mannfred",
        name: "Mannfred von Carstein",
        factionName: "Sylvania",
        completionInfo: null,
        image,
      },
      {
        lordID: "heinrich",
        name: "Heinrich Kemmler",
        factionName: "Barrow Legion",
        completionInfo: null,
        image,
      },
      {
        lordID: "helman",
        name: "Helman Ghorst",
        factionName: "Caravan of the Blue Roses",
        completionInfo: null,
        image,
      },
      {
        lordID: "isabella",
        name: "Isabella von Carstein",
        factionName: "Sylvania",
        completionInfo: null,
        image,
      },
      {
        lordID: "vlad",
        name: "Vlad von Carstein",
        factionName: "Sylvania",
        completionInfo: null,
        image,
      },
    ],
  },

  {
    raceID: "vm",
    name: "Vampire Coast",
    type: "undead",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "noctilus",
        name: "Count Noctilus",
        factionName: "The Dreadfleet",
        completionInfo: null,
        image,
      },
      {
        lordID: "harkon",
        name: "Count Luthor Harkon",
        factionName: "The Awakened",
        completionInfo: null,
        image,
      },
      {
        lordID: "aranessa",
        name: "Aranessa Saltspite",
        factionName: "Pirates of Sartosa",
        completionInfo: null,
        image,
      },
      {
        lordID: "cylostra",
        name: "Cylostra Direfin",
        factionName: "The Drowned",
        completionInfo: null,
        image,
      },
    ],
  },

  {
    raceID: "wc",
    name: "Warriors of Chaos",
    type: "chaos",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "kholek",
        name: "Kholek Suneater",
        factionName: "Heralds of the Tempest",
        completionInfo: null,
        image,
      },
      {
        lordID: "valkia",
        name: "Valkia the Bloody",
        factionName: "Legion of the Gorequeen",
        completionInfo: null,
        image,
      },
      {
        lordID: "vilitch",
        name: "Vilitch the Curseling",
        factionName: "Puppets of Misrule",
        completionInfo: null,
        image,
      },
      {
        lordID: "belakor",
        name: "Be'lakor",
        factionName: "Shadow Legion",
        completionInfo: null,
        image,
      },
      {
        lordID: "sigvald",
        name: "Sigvald the Magnificent",
        factionName: "The Decadent Host",
        completionInfo: null,
        image,
      },
      {
        lordID: "azazel",
        name: "Azazel",
        factionName: "The Ecstatic Legions",
        completionInfo: null,
        image,
      },
      {
        lordID: "festus",
        name: "Festus the Leechlord",
        factionName: "The Fecundites",
        completionInfo: null,
        image,
      },
      {
        lordID: "archaon",
        name: "Archaon the Everchosen",
        factionName: "Warhost of the Apocalypse",
        completionInfo: null,
        image,
      },
    ],
  },
  {
    raceID: "we",
    name: "Wood Elves",
    type: "order",
    bannerImg,
    completionInfo: null,
    lords: [
      {
        lordID: "orion",
        name: "Orion",
        factionName: "Talsyn",
        completionInfo: null,
        image,
      },
      {
        lordID: "durthu",
        name: "Durthu",
        factionName: "Argwylon",
        completionInfo: null,
        image,
      },
      {
        lordID: "heralds",
        name: "Heralds of Ariel",
        factionName: "Heralds of Ariel",
        completionInfo: null,
        image,
      },
      {
        lordID: "drycha",
        name: "Drycha",
        factionName: "Wargrove of Woe",
        completionInfo: null,
        image,
      },
    ],
  },
];

// class Progress {
//   constructor(status, victoryType, difficulty) {
//     bannerImg, completionInfo: null, (this.status = status);
//     this.victoryType = victoryType;
//     bannerImg, completionInfo: null, (this.difficulty = difficulty);
//   }

//   set status(value) {}
// }

// class Race {
//   constructor(raceName, alignment) {
//     this.raceID = raceName;
//     this.alignment = alignment;
//   }
// }

// class Lord extends Race {
//   progress;

//   constructor(raceName, alignment, faction) {
//     super(raceName, alignment);
//     this.faction = faction;
//   }

//   addProgress(value) {
//     this.progress = new Progress(...value);
//   }
// }

// const taurox = new Lord("beastmen", "chaos", "Slaughterhorn Tribe");

// // taurox.addProgress(["completed", "short", "legendary"]);

// const completionInfo: null = {
//           dateCompleted,
//           difficulty: userDifficulty,
//           hadFun,
//         };
