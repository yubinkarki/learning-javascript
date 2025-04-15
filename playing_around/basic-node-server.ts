// @ts-nocheck

import { readFile } from "node:fs";
import { resolve } from "node:path";
import { createServer, IncomingMessage, ServerResponse } from "node:http";

const port: number = 3000;
const hostName: string = "127.0.0.1";
const filePath: string = resolve(process.cwd(), "README.md");

const myServer = createServer((req: IncomingMessage, res: ServerResponse): void => {
  if (req.url === "/first-line" && req.method === "GET") {
    readFile(filePath, "utf-8", (err, data): void => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        return res.end("Could not read file");
      }

      const lines: string[] = data.split("\n");

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      return res.end(lines[0] || "Line was empty");
    });
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    return res.end("Hello World");
  }
});

myServer.listen(port, hostName, (): void => console.log(`Server is running at port ${port} on ${hostName}`));
