import React, { useState, useSyncExternalStore } from "react";

export const GameContext = React.createContext(null);
export function GameProvider(props) {
  const cards = [
    ["baby ", "infant ", "newborn"],
    ["basic ", "simple ", "elementary"],
    ["bandit ", "outlaw ", "villain"],
    ["blessing ", "luck ", "fortune"],
    ["noodles ", "spaghetti ", "pasta"],
    ["bird ", "fowl ", "game"],
    ["pants ", "trousers ", "jeans"],
    ["orc ", "goblin ", "troll"],
    ["odd ", "strange ", "weird"],
    ["mist ", "fog ", "smog"],
    ["dog ", "dingo ", "wolf"],
    ["horse ", "donkey ", "zebra"],
    ["purse ", "handbag ", "clutch"],
    ["curtain ", "drape ", "valance "],
    ["shrub ", "bush ", "hedge "],
    ["caiman ", "crocodile ", "alligator "],
    ["turtle ", "tortise ", "sea turtle "],
    ["snake ", "worm ", "eel "],
    ["crawfish ", "crab ", "lobster"],
    ["grub ", "maggot ", "larvae "],
    ["ox ", "cow ", "bull "],
    ["cup ", "mug ", "teacup "],
    ["house ", "home ", "abode "],
    ["sprint ", "run ", "dash "],
    ["push ", "shove ", "nudge "],
    ["clog ", "shoe ", "loafer "],
    ["bifocals ", "glasses ", "spectacles "],
    ["couch ", "sofa ", "loveseat "],
    ["giftcard ", "credit card ", "driver's license "],
    ["book ", "journal ", "notebook "],
    ["oak ", "pine ", "maple "],
    ["fence  ", "barrier ", "wall "],
    ["pond ", "lake ", "ocean "],
    ["river ", "stream ", "creek "],
    ["forest ", "woodland ", "jungle "],
    ["coffee ", "tea ", "hot chocolate "],
    ["nose ", "snout ", "nostril "],
    ["moon ", "planet ", "star "],
    ["talons ", "claws ", "nails "],
    ["molars ", "canine ", "incisors "],
    ["frog ", "toad ", "amphibian "],
    ["orbit ", "circle ", "rotation "],
    ["bicycle ", "motorcycle ", "vespa "],
    ["igauna ", "gecko ", "salamander "],
    ["butter knife ", "steak knife ", "butcher knife "],
    ["snail ", "slug ", "caterpillar "],
    ["wood ", "timber ", "plank "],
    ["monkey ", "gorilla ", "chimpanzee "],
    ["wand ", "staff ", "scepter "],
    ["smoothie ", "milkshake ", "malt "],
    ["search ", "hunt ", "scavange "],
    ["bounty ", "treasure ", "booty "],
    ["bee ", "wasp ", "hornet "],
    ["meal  ", "dinner ", "supper "],
    ["leopard ", "lion ", "tiger "],
    ["cabinet ", "shelf ", "pantry "],
    ["communism ", "democracy ", "socialism "],
    ["country ", "continent ", "region "],
    ["poll ", "election ", "ballot "],
    ["wresting ", "boxing ", "fighting "],
    ["sticky  ", "gooey ", "adhesive "],
    ["cold ", "chilly ", "freezing "],
    ["democrat ", "republican ", "independant "],
    ["fruit ", "vegetable ", "legume "],
    ["poison ", "toxin ", "venom "],
    ["swing ", "sway ", "wave "],
    ["tie ", "knot ", "lace "],
    ["monsoon ", "tsunami ", "typhoon "],
    ["blanket ", "comforter ", "coverlet "],
    ["raccoon ", "possum ", "badger "],
    ["wagon ", "cart ", "carriage "],
    ["Mountain ", "Hill ", "Plateau "],
    ["Guitar ", "Bass ", "Ukulele "],
    ["Rabbit ", "bunny ", "hare "],
    ["galaxy ", "universe ", "solar system "],
    ["Coffee ", "Tea ", "Hot chocolate "],
    ["Chair ", "Stool ", "Bench "],
    ["Pen ", "Pencil ", "Marker "],
    ["Dog ", "Cat ", "Rabbit "],
    ["Shirt ", "Blouse ", "T-shirt "],
    ["Car ", " ", "Motorcycle "],
    ["Book ", "Novel ", "Magazine "],
    ["Table ", "Desk ", "Counter "],
    ["Guitar ", "Bass ", "Ukulele "],
    ["Mountain ", "Hill ", "Valley "],
    ["Sun ", "Moon ", "Star "],
    ["Fedora ", "Cap ", "Beanie "],
    ["Laptop ", "Tablet ", "Smartphone "],
    ["Chair ", "Sofa ", "Recliner "],
    ["falcon ", "Eagle ", "Hawk "],
    ["Pull-over ", "Sweater ", "Hoodie "],
    ["Plane ", "aircraft ", "Jet "],
    ["Daisy", "Rose ", "Tulip "],
    ["Tree ", "Bush ", "Plant "],
    ["Lemon ", "Lime ", "Orange "],
    ["Wallet ", "Purse ", "Clutch "],
    ["Cup ", "Mug ", "Glass "],
    ["Rain ", "Snow ", "Hail "],
    ["Sun ", "Sky ", "Cloud "],
    ["bandana ", "Shawl ", "Scarf "],
    ["Boat ", "Ship ", "Yacht "],
    ["Greek ", "Roman ", "Persian "],
    ["Stallion ", "Foal ", "Colt "],
    ["Latte ", "Espresso ", "Cappuccino "],
    ["Thesaurus ", "Dictionary ", "Encyclopedia "],
    ["Bed ", "Mattress ", "Pillow "],
    ["Volley Ball ", "Soccer ball ", "Basketball "],
    ["Clock ", "Watch ", "Timer "],
    ["Mutt ", "Puppy ", "Hound "],
    ["sedan ", "Van ", "SUV "],
    ["Tree ", "Oak ", "Maple "],
    ["Raven ", "Parrot ", "Sparrow "],
    ["Cup ", "Saucer ", "Teapot "],
    ["Sun ", "Beach ", "Sand "],
    ["Hat ", "Fedora ", "Sombrero "],
    ["Bike ", "Bicycle ", "Scooter "],
    ["Table ", "Coffee table ", "Dining table "],
    ["Talapia ", "Salmon ", "Trout "],
    ["Rain ", "Thunder ", "Lightning "],
    ["Pizza ", "Pasta ", "lasagne "],
    ["Wagon ", "Sedan ", "Convertible "],
    ["Oak Tree ", "Palm tree ", "Pine tree "],
    ["Duck ", "Swan ", "Peacock "],
    ["homephone ", "Smartphone ", "Cellphone "],
    ["Window ", "Glass ", "Pane "],
    ["Boat ", "Canoe ", "Kayak "],
    ["Orchid ", "Iris ", "Rose "],
    ["Chair ", "Armchair ", "Lounge chair "],
    ["Dirt Bike ", "Mountain bike ", "Road bike "],
    ["Sombrero ", "Cowboy hat ", "Fedora "],
    ["coupe ", "Hatchback ", "SUV "],
    ["Tree ", "Willow ", "Birch "],
    ["Pen ", "marker ", "Highlighter "],
    ["ascend ", "mount ", "Climb "],
    ["Office ", "Library ", "Study "],
    ["Candle ", "Lamp ", "Light "],
    ["Combustion ", "Engine ", "Fuel "],
    ["moisturizer ", "lotion ", "Sunscreen "],
    ["Guitar ", "Strings ", "Pick "],
    ["celestial ", "extraterrestrial ", "Sky "],
    ["Scribe ", "Author ", "Writer "],
    ["Sandal ", "Sneaker ", "Boot "],
    ["Mozzarella ", "Cheddar ", "pepper jack "],
    ["Tissue ", "Handkerchief ", "Napkin "],
    ["Dolphin ", "Whale ", "Orca "],
    ["Parchment ", "paper ", "scroll "],
    ["Island ", "Penisula ", "isle "],
    ["Titan ", "Giant ", "Behemoth "],
    ["movie ", "tv ", "video "],
    ["Film ", "Photography ", "Cinematic "],
    ["Gazel ", "Deer ", "impala "],
    ["moose ", "elk ", "antelope "],
    ["bison ", "buffalo ", "yak "],
    ["magma ", "lava ", "volcano "],
    ["samsung", "apple ", "huawei "],
    ["bowl ", "plate ", "saucer "],
    ["precipitation ", "condensation ", "evaporation "],
    ["lawyer ", "attorney ", "judge "],
    ["doctor ", "pharmacist ", "dentist "],
    ["mathematician ", "engineer ", "physicist "],
    ["scissors ", "clippers ", "sheers "],
  ];
  const [card, setCard] = useState([]);
  const [isSketching, setIsSketching] = useState(false);
  const [isVoting, setIsVoting] = useState(false);
  const [isResults, setResults] = useState(false);
  const [userSketches, setUserSketches] = useState([]);
  const [userVotes, setUserVotes] = useState([]);
  function RandCard() {
    let rand = Math.floor(Math.random() * cards.length);
    console.log(cards[rand]);
    return cards[rand];
  }

  function RandTopic() {
    let rand = Math.floor(Math.random() * 3);
    return rand;
  }
  return (
    <GameContext.Provider
      value={{
        RandTopic,
        RandCard,
        card,
        isSketching,
        setIsSketching,
        setCard,
        isVoting,
        setIsVoting,
        setUserSketches,
        userSketches,
        isResults,
        setResults,
        setUserVotes,
        userVotes,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
