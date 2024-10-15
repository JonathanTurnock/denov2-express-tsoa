// @deno-types="npm:@types/express"
import express, { json, urlencoded } from "express";
import { RegisterRoutes } from "./__autogen/routes.ts";

const app = express();

app.use(
  urlencoded({
    extended: true,
  }),
);
app.use(json());

RegisterRoutes(app);

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  app.listen(3000);
}
