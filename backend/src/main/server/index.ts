import makeApp from "../config/app";
import { Environment } from "../config/environment";

process.env.TZ = "UTC";

const makeServer = async () => {
  const app = await makeApp();

  app.listen(Environment.infrastructure.server.rest.express.port, () => {
    // eslint-disable-next-line no-console
    console.log(
      `Server running on port ${Environment.infrastructure.server.rest.express.port}!`,
    );
  });
};

makeServer();
