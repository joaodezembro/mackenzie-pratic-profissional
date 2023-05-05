import fs from "fs";
import path from "path";

export function mapProjectFiles(directory: string): string[] {
  const routes = [];

  fs.readdirSync(directory).forEach(file => {
    const absolute = path.join(directory, file);

    if (fs.statSync(absolute).isDirectory()) {
      routes.push(...mapProjectFiles(absolute));
    } else {
      routes.push(absolute);
    }
  });

  return routes;
}

export function findFile(
  filename: string,
  uploadFolder?: boolean,
  staticFolder?: boolean,
) {
  let srcFolder = "";

  if (!uploadFolder) {
    srcFolder = path.resolve(__dirname, "..", "..");
  }
  if (uploadFolder) {
    srcFolder = path.resolve(__dirname, "..", "..", "..", "upload");
  }
  if (staticFolder) {
    srcFolder = path.resolve(__dirname, "..", "..", "..", "static");
  }

  const files = mapProjectFiles(srcFolder);

  return files.find(file => file.includes(filename));
}
