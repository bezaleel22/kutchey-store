/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: "http://localhost:3000/shop-api",
  },
  plugins: {
    "houdini-svelte": {},
  },
  scalars: {
    JSON: {
      type: "Object",
    },
    Money: {
      type: "string",
    },
    DateTime: {
      type: "string",
    },
  },
};

export default config
