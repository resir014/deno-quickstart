import { VERSION } from "./deps/version.ts";
import { slugify } from "./deps/slugify.ts";

console.log(`Welcome to Deno 🦕`);
console.log(`-----------------`);
console.log(`Deno version: ${Deno.version.deno}`);
console.log(`TypeScript version: ${Deno.version.typescript}`);
console.log(`V8 version: ${Deno.version.v8}`);
console.log(`stdlib version: ${VERSION}`);

console.log(`\n${slugify("Hello world", { lower: true })}`);
