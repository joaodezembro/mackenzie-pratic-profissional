import Dotenv from "dotenv";
import { EnvironmentEnum } from "./enums/EnvironmentEnum.struct";
import "./set-multi-environment";

Dotenv.config();

export interface IEnvironment {
  infrastructure: {
    server: {
      environment: EnvironmentEnum;
      url: string;
      rest: {
        express: {
          port: number;
        };
      };
    };
    web: {
      url: string;
    };
    database: {
      postgresql: {
        host: string;
        port: number;
        user: string;
        password: string;
        database: string;
      };
    };
  };
  secrets: {
    jwt: string;
    temporary_permission: string;
  };
}

const Environment: IEnvironment = {
  infrastructure: {
    server: {
      environment:
        EnvironmentEnum[process.env.NODE_ENV] || EnvironmentEnum.development,
      url: process.env.SERVER_URL,
      rest: {
        express: {
          port: Number(process.env.SERVER_PORT) || 49120,
        },
      },
    },
    web: {
      url: process.env.WEB_URL,
    },
    database: {
      postgresql: {
        host: process.env.POSTGRESQL_DATABASE_HOST || "localhost",
        port: Number(process.env.POSTGRESQL_DATABASE_PORT) || 5438,
        user: process.env.POSTGRESQL_DATABASE_USER || "development",
        password: process.env.POSTGRESQL_DATABASE_PASSWORD || "",
        database: process.env.POSTGRESQL_DATABASE_NAME || "contratadb",
      },
    },
  },
  secrets: {
    jwt: String(process.env.JWT_SECRET),
    temporary_permission: String(process.env.TEMPORARY_PERMISSION_SECRET),
  },
};

export { Environment };
