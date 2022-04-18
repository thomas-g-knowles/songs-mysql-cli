const { argv, string } = require("yargs");
const Yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const arguments = Yargs(hideBin(process.argv)).argv;
const database = require("./db/connection.js");
const bcyrpt = require("bcrypt");
const {
  uAdd,
  uList,
  uUpdate,
  uRemove,
  uDrop,
} = require("./db/utils/users-crud.js");
const {
  sAdd,
  sList,
  sUpdate,
  sRemove,
  sDrop,
} = require("./db/utils/songs-crud.js");
const { isDefined } = require("./db/connection.js");

// Converts all args to lowercase for smooth user experience:

const argVectors = Object.fromEntries(
  Object.entries(arguments).map(([k, v]) => [k.toLowerCase(), v])
);

// Using an IFEE for invoke:

(async () => {
  try {
    await database.authenticate();
    console.log("Connection to MySQL database established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  // Short circuiting selection, as error is thrown when tring to convert undefined:

  try {
    if (
      typeof argVectors.add === "string" &&
      argVectors.add.toLowerCase() === "user"
    ) {
      await uAdd();
    } else if (
      typeof argVectors.list === "string" &&
      argVectors.list.toLowerCase() === "user"
    ) {
      await uList();
    } else if (
      typeof argVectors.update === "string" &&
      argVectors.update.toLowerCase() === "user"
    ) {
      await uUpdate();
    } else if (
      typeof argVectors.remove === "string" &&
      argVectors.remove.toLowerCase() === "user"
    ) {
      await uRemove();
    } else if (
      typeof argVectors.drop === "string" &&
      argVectors.drop.toLowerCase() === "user"
    ) {
      await uDrop();
    } else if (
      typeof argVectors.add === "string" &&
      argVectors.add.toLowerCase() === "song"
    ) {
      await sAdd(collection, argVectors);
    } else if (
      typeof argVectors.list === "string" &&
      argVectors.list.toLowerCase() === "song"
    ) {
      console.log(await sList(collection, argVectors));
    } else if (
      typeof argVectors.update === "string" &&
      argVectors.update.toLowerCase() === "song"
    ) {
      await sUpdate(collection, argVectors);
    } else if (
      typeof argVectors.remove === "string" &&
      argVectors.remove.toLowerCase() === "song"
    ) {
      await sRemove(collection, argVectors);
    } else if (
      typeof argVectors.drop === "string" &&
      argVectors.drop.toLowerCase() === "song"
    ) {
      await sDrop(collection);
    } else {
      throw new Error("Incorrect CRUD command");
    }
  } catch (error) {
    console.log(error);
  } finally {
    await database.close();
  }
})();
