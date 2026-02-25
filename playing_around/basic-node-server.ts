// @ts-nocheck

import { resolve } from "node:path";
import { readFile } from "node:fs/promises";
import { createServer, IncomingMessage, ServerResponse } from "node:http";

const STATUS = { OK: 200, INTERNAL_ERROR: 500 } as const;
const MESSAGES = { NA: "N/A", DEFAULT: "Hello" } as const;

const PORT: number = 3000;
const HOSTNAME: string = "127.0.0.1";
const FILEPATH: string = resolve(process.cwd(), "README.md");

let cachedFirstLine: string | null = null;

async function loadFirstLine(): Promise<void> {
  const data: string = await readFile(FILEPATH, "utf-8");
  const newLineIndex: number = data.indexOf("\n");
  cachedFirstLine = newLineIndex === -1 ? data : data.slice(0, newLineIndex) || null;
}

function sendText(res: ServerResponse, status: number, body: string): void {
  res.writeHead(status, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(body);
}

const myServer = createServer((req: IncomingMessage, res: ServerResponse): void => {
  if (req.url === "/first-line" && req.method === "GET") {
    if (cachedFirstLine == null) return sendText(res, STATUS.INTERNAL_ERROR, MESSAGES.NA);
    return sendText(res, STATUS.OK, cachedFirstLine);
  }

  return sendText(res, STATUS.OK, MESSAGES.DEFAULT);
});

async function init(): Promise<void> {
  await loadFirstLine();
  myServer.listen(PORT, HOSTNAME, (): void => console.log(`Server is running at port ${PORT} on ${HOSTNAME}`));
}

init().catch((e: unknown) => {
  console.error("Failed to start server:", e);
  process.exit(1);
});
