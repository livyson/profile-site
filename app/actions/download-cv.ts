"use server"

import { promises as fs } from "fs"
import path from "path"

export async function downloadCV(language: "pt" | "en") {
  const fileName = language === "pt" ? "cv-livyson-pt.pdf" : "cv-livyson-en.pdf"
  const filePath = path.join(process.cwd(), "public", fileName)

  try {
    await fs.access(filePath)
    return { success: true, fileName }
  } catch (error) {
    return { success: false, error: "CV file not found" }
  }
}

