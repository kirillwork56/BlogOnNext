const contentfulManagement = require("contentful-management");
const dotenv = require("dotenv");

module.exports = function () {
  dotenv.config();

  const tokenID = process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN;
  const spaceID = process.env.REACT_APP_SPACE;
  const environmentID = process.env.CONTENTFUL_ENVIRONMENT;

  const contentfulClient = contentfulManagement.createClient({
    accessToken: tokenID,
  });

  return contentfulClient
    .getSpace(spaceID)
    .then((space) => space.getEnvironment(environmentID));
};
