const food = [
  {
    id: "01-ps",
    name: "Paella",
    country: "Spain",
    code: "e",
    description:
      "Lateen sail careen dead men tell no tales shrouds crow's nest scurvy Privateer. Hogshead Arr strike colors overhaul bring a spring upon her cable Cat o'nine tails rutters. Warp pillage lookout belay long clothes Cat o'nine tails lateen sail.",
    photo: {
      author: "Bernal Saborio",
      license: "https://creativecommons.org/licenses/by-sa/4.0/",
      url: "https://www.flickr.com/photos/44073224@N04/10787645716/",
      src: "paella.jpg",
    },
  },
  {
    id: "02-wa",
    name: "Wienerschnitzel",
    country: "Austria",
    code: "a",
    description:
      "Jolly Roger starboard jack pillage carouser fore chantey. Chase guns parrel hulk reef weigh anchor trysail Plate Fleet. Black jack deadlights fluke lad port skysail handsomely.",
    photo: {
      author: "Thomas Woodtli",
      license: "https://creativecommons.org/licenses/by/4.0/",
      url: "https://www.flickr.com/photos/21876032@N02/8320172465/",
      src: "wienerschnitzel.jpg",
    },
  },
  {
    id: "03-pp",
    name: "Pierogi",
    country: "Poland",
    code: "pl",
    description:
      "Quarter reef sails gabion lanyard doubloon cutlass draught. Doubloon dance the hempen jig killick rutters nipper scallywag Letter of Marque. Chase topgallant no prey, no pay nipper tack code of conduct crack Jennys tea cup",
    photo: {
      author: "Ana Paula Hirama",
      license: "https://creativecommons.org/licenses/by-sa/4.0/",
      url: "https://www.flickr.com/photos/anapaulahrm/3579021883/",
      src: "pierogi.jpg",
    },
  },
  {
    id: "04-gh",
    name: "Gulyás",
    country: "Hungary",
    code: "h",
    description:
      "Booty Pirate Round mizzenmast Shiver me timbers jib Brethren of the Coast hearties. Reef sails code of conduct log squiffy schooner doubloon grog blossom. Swab Davy Jones' Locker bilge water Admiral of the Black fire ship code of conduct brigantine.",
    photo: {
      author: "Top Budapest",
      license: "https://creativecommons.org/licenses/by/4.0/",
      url: "https://www.flickr.com/photos/topbudapest/9368219362/",
      src: "gulyas.jpg",
    },
  },
  {
    id: "05-rf",
    name: "Ratatouille",
    country: "France",
    code: "f",
    description:
      "Loot tender main sheet Corsair clipper avast dead men tell no tales. Swab me strike colors red ensign fluke rigging six pounders. Hearties salmagundi bowsprit hornswaggle gabion handsomely swab.",
    photo: {
      author: "Peter E",
      license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      url: "https://www.flickr.com/photos/pmeimon/8654102876/",
      src: "ratatouille.jpg",
    },
  },
  {
    id: "06-fu",
    name: "Fish & chips",
    country: "UK",
    code: "gb",
    description:
      "Hands Yellow Jack cable scallywag no prey, no pay matey Sail ho. Bounty Cat o'nine tails poop deck to go on account grog parley pink. Swing the lead mizzen squiffy clap of thunder holystone Buccaneer hail-shot.",
    photo: {
      author: "wEnDy",
      license: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      url: "https://www.flickr.com/photos/wwny/5569428147/",
      src: "fish-and-chips.jpg",
    },
  },
  {
    id: "07-pi",
    name: "Pizza",
    country: "Italy",
    code: "i",
    description:
      "Gangway mutiny bucko warp rum clipper boom. Rutters rope's end pinnace avast walk the plank scuttle doubloon. Buccaneer fire ship cog Brethren of the Coast hail-shot Barbary Coast heave down.",
    photo: {
      author: "Yuichi Sakuraba",
      license: "https://creativecommons.org/licenses/by-nc/4.0/",
      url: "https://www.flickr.com/photos/skrb/6123923448/",
      src: "pizza.jpg",
    },
  },
  {
    id: "08-mg",
    name: "Moussaka",
    country: "Greece",
    code: "gr",
    description:
      "Interloper ye smartly Jack Ketch hornswaggle Yellow Jack rutters. Prow scuttle yo-ho-ho bilged on her anchor Blimey driver black spot. Nipper blow the man down landlubber or just lubber Jack Ketch salmagundi rutters poop deck.",
    photo: {
      author: "Catherine Flessen",
      license: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      url: "https://www.flickr.com/photos/tcats819/2859367110",
      src: "moussaka.jpg",
    },
  },
  {
    id: "09-cc",
    name: "Ćevapčići",
    country: "Croatia",
    code: "hr",
    description:
      "lScourge of the seven seas snow rum swing the lead shrouds piracy rigging. Ye starboard dead men tell no tales sheet code of conduct blow the man down wherry. Strike colors swab gaff boom coffer spirits cutlass.",
    photo: {
      author: "johnny.andrew.sherwood",
      license: "https://creativecommons.org/licenses/by/4.0/",
      url: "https://www.flickr.com/photos/ciao-for-now/6092330406",
      src: "cevapcici.jpg",
    },
  },
  {
    id: "10-bs",
    name: "Bryndzové halušky",
    country: "Slovakia",
    code: "sk",
    description:
      "Reef Nelsons folly fathom overhaul prow landlubber or just lubber bilged on her anchor. Weigh anchor grapple Jack Tar matey stern warp maroon. Draught pinnace trysail shrouds scuttle bounty fluke.",
    photo: {
      author: "Backpack Foodie",
      license: "https://creativecommons.org/licenses/by-sa/3.0/",
      url: "https://www.flickr.com/photos/129225931@N02/15941746053",
      src: "bryndzove-halusky.jpg",
    },
  },
  {
    id: "11-vc",
    name: "Vepřo - knedlo - zelo",
    country: "Czech Republic",
    code: "cz",
    description:
      "No prey, no pay weigh anchor red ensign grapple chase holystone tack. Trysail tack topmast swab salmagundi piracy interloper. Bilge rat come about Jolly Roger loot hulk Pieces of Eight heave to.",
    photo: {
      author: "Kirk K",
      license: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      url: "https://www.flickr.com/photos/mmm-yoso/14482291555/",
      src: "vepro-knedlo-zelo.jpg",
    },
  },
  {
    id: "12-ss",
    name: "Štruklji",
    country: "Slovenia",
    code: "slo",
    description:
      "Driver schooner tender spike parrel topgallant hornswaggle. Scallywag skysail blow the man down shrouds grog fire ship me. Lookout pink cutlass belaying pin tender keelhaul spirits.",
    photo: {
      author: "IceBone",
      license: "https://creativecommons.org/licenses/by-nc-nd/2.0/",
      url: "https://www.flickr.com/photos/icebone/453018004/",
      src: "struklji.jpg",
    },
  },
  {
    id: "13-kb",
    name: "Kutia",
    country: "Ukraine",
    code: "ua",
    description:
      "Snow long clothes plunder parrel Blimey knave Admiral of the Black. Me capstan Gold Road gaff lad log keel. Jury mast lee hogshead fire ship me gun spirits.",
    photo: {
      author: "Marco Verch Professional Photographer",
      license: "https://creativecommons.org/licenses/by/4.0/",
      url: "https://www.flickr.com/photos/30478819@N08/50838185491/",
      src: "kutia.jpg",
    },
  },
  {
    id: "14-su",
    name: "Solyanka",
    country: "Russia",
    code: "rus",
    description:
      "Barbary Coast splice the main brace chantey belay cable reef aft. Chain Shot gangplank yardarm grog blossom red ensign loot jib. Lass case shot tack grog spyglass pressgang shrouds.",
    photo: {
      author: "Marco Verch Professional Photographer",
      license: "https://creativecommons.org/licenses/by/4.0/",
      url: "https://www.flickr.com/photos/30478819@N08/32833423677/",
      src: "solyanka.jpg",
    },
  },
  {
    id: "15-bg",
    name: "Bratwurst",
    country: "Germany",
    code: "d",
    description:
      "Marooned jib holystone run a shot across the bow red ensign black jack hulk. Cable quarter parley blow the man down Blimey boatswain squiffy. Dead men tell no tales cutlass pillage lanyard bring a spring upon her cable no prey, no pay schooner.",
    photo: {
      author: "Crosa",
      license: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      url: "https://www.flickr.com/photos/facing-my-life/613772255",
      src: "bratwurst.jpg",
    },
  },
  {
    id: "16-mr",
    name: "Mămăligă",
    country: "Romania",
    code: "ro",
    description:
      "Grog crack Jennys tea cup aft sheet Shiver me timbers black jack trysail. Hogshead scurvy hardtack deadlights trysail gabion league. Black jack gangplank interloper grog fore scurvy bilge rat.",
    photo: {
      author: "NicolaS961",
      license: "https://creativecommons.org/licenses/by-sa/4.0/",
      url:
        "https://commons.wikimedia.org/wiki/src:M%C4%83m%C4%83lig%C4%832020-02-12.jpg",
      src: "mamaliga.jpg",
    },
  },
  {
    id: "17-kd",
    name: "Koldskål",
    country: "Denmark",
    code: "dk",
    description:
      "Square-rigged Privateer splice the main brace pinnace hogshead starboard pillage. Pillage mizzen tack scuppers salmagundi yardarm holystone. Main sheet six pounders mutiny keelhaul heave down warp dance the hempen jig.",
    photo: {
      author: "Lisa Risager",
      license: "https://creativecommons.org/licenses/by-sa/4.0/",
      url: "https://www.flickr.com/photos/risager/9074552729",
      src: "koldskal.jpg",
    },
  },
  {
    id: "18-hf",
    name: "Hernekeitto",
    country: "Finland",
    code: "fin",
    description:
      "Spirits loot Pirate Round draft grog rope's end matey. Gunwalls square-rigged crimp Davy Jones' Locker Blimey loot broadside. Hulk knave run a shot across the bow hang the jib Sink me six pounders stern.",
    photo: {
      author: "Robert Andersson",
      license: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
      url: "https://www.flickr.com/photos/robban_andersson/5506995620",
      src: "hernekeitto.jpg",
    },
  },
  {
    id: "19-ke",
    name: "Kama",
    country: "Estonia",
    code: "est",
    description:
      "Booty long clothes me topsail sutler black jack piracy. Lee six pounders list dance the hempen jig barkadeer crow's nest deadlights. Prow gunwalls tackle jury mast yawl scuttle coxswain.",
    photo: {
      author: "Jaanus Treilmann",
      license: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
      url: "https://www.flickr.com/photos/treilmann/7629961948",
      src: "kama.jpg",
    },
  },
  {
    id: "20-mb",
    name: "Moules frites",
    country: "Belgium",
    code: "b",
    description:
      "Pirate gaff nipperkin chase guns Gold Road wench flogging. Wench port smartly gibbet Plate Fleet run a shot across the bow hempen halter. Cable carouser piracy matey rigging tack squiffy.",
    photo: {
      author: "UnorthodoxY",
      license: "https://creativecommons.org/licenses/by-sa/4.0/",
      url: "https://www.flickr.com/photos/unorthodoxy/2374439710/",
      src: "moules-frites.jpg",
    },
  },
  // {
  //   id: "",
  //   name: "",
  //   country: "",
  //   code: "",
  //   description: "lorem addem mas tardem",
  //   photo: {
  //     author: "",
  //     license: "",
  //     url: "",
  //     src: ".jpg",
  //   },
  // },
];

export default food;
