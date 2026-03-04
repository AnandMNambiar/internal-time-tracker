import { google } from "googleapis";
import path from "path";
import fs from "fs";

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "service-account.json"), "utf8")
  ),
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function addEntry(entry: any) {
  const client = await auth.getClient() as any;

  const sheets = google.sheets({
    version: "v4",
    auth: client,
  });

  const spreadsheetId = "10D58iGKoWz1t_0CLbaN6qd32OnoEGy9K7FIMj0iMN3s";

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "TimeEntries!A:F",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          Date.now(),
          entry.email,
          entry.project,
          entry.date,
          entry.time,
          new Date().toISOString(),
        ],
      ],
    },
  });
}