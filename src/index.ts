import { random } from "./random/handler";
import { multiply } from "./multiply/handler";

exports.random = (request, response) => {
  const result = random();
  response.status(200).send(result);
};

exports.multiply = (request, response) => {
  const result = multiply(request);
  response.status(200).send(result);
};