import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_SPACE || "",
  accessToken: process.env.REACT_APP_TOKEN || "",
});

export default client;
