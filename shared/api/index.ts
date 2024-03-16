import axios from "axios";
import { config } from "@/app/config";

const api = axios.create({
  baseURL: config.baseURL,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export { api };
