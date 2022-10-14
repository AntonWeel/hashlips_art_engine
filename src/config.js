const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.bsc;

// General metadata for Ethereum
const namePrefix = "Pincoin https://pin-pin.io";
const description = "Mint Platform https://pin-pin.io";
const baseUri = "ipfs://bafybeiae7pryk7at3rvqmq67rpqzy7gble2xhoiuqdy53q3codjct632qu";


const solanaMetadata = {
  symbol: "YPC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "",
  creators: [
    {
      address: "0xEd0B5cD3AFc032b187a393258769634673437063",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 210000,
    layersOrder: [
      { name: "L4" },
      { name: "L3.3" },
      { name: "Iris" },
      { name: "Iriss" },
      { name: "Iriss" },
      { name: "Iriss" },
      { name: "Iriss" },
      { name: "Iriss" },
      { name: "Iriss" },
      { name: "Iriss" },
      { name: "Iriss" },
      { name: "Iriss" },
      { name: "Iriss" },
      { name: "Iriss" },
      { name: "Iriss" },
      { name: "Iriss" },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 250,
  height: 300,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 1,
  quality: 200,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
