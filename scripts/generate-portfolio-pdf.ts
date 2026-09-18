/**
 * Generates the downloadable "Project Portfolio" PDF from the same data
 * that powers the website (src/lib/site.ts), so the two never drift.
 *
 * Run with: npm run pdf:portfolio
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, extname } from "node:path";
import {
  PDFDocument,
  StandardFonts,
  rgb,
  type PDFFont,
  type PDFPage,
  type RGB,
  type PDFImage,
} from "pdf-lib";
import { site, completedProjects, services, stats } from "../src/lib/site";

const ROOT = join(import.meta.dirname, "..");
const PUBLIC_DIR = join(ROOT, "public");
const OUT_DIR = join(PUBLIC_DIR, "downloads");
const OUT_FILE = join(OUT_DIR, "vv-builders-portfolio.pdf");

const PAGE_W = 595.28; // A4 pt
const PAGE_H = 841.89;
const MARGIN = 54;
const CONTENT_W = PAGE_W - MARGIN * 2;

const NAVY = rgb(10 / 255, 14 / 255, 24 / 255);
const NAVY_SOFT = rgb(22 / 255, 29 / 255, 48 / 255);
const GOLD = rgb(198 / 255, 160 / 255, 87 / 255);
const CREAM = rgb(250 / 255, 247 / 255, 242 / 255);
const CREAM_DIM = rgb(236 / 255, 227 / 255, 211 / 255);
const INK = rgb(20 / 255, 22 / 255, 26 / 255);
const INK_SOFT = rgb(107 / 255, 110 / 255, 118 / 255);

function wrapText(font: PDFFont, text: string, size: number, maxWidth: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function drawParagraph(
  page: PDFPage,
  text: string,
  opts: { x: number; y: number; font: PDFFont; size: number; maxWidth: number; lineHeight: number; color: RGB }
): number {
  const lines = wrapText(opts.font, text, opts.size, opts.maxWidth);
  let cursorY = opts.y;
  for (const line of lines) {
    page.drawText(line, { x: opts.x, y: cursorY, size: opts.size, font: opts.font, color: opts.color });
    cursorY -= opts.lineHeight;
  }
  return cursorY;
}

function tracked(text: string, spacing = 1): string {
  return text.toUpperCase().split("").join(" ".repeat(spacing));
}

function drawFittedImage(
  page: PDFPage,
  image: PDFImage,
  box: { x: number; y: number; w: number; h: number }
) {
  page.drawRectangle({ x: box.x, y: box.y, width: box.w, height: box.h, color: NAVY_SOFT });
  const scale = Math.min(box.w / image.width, box.h / image.height);
  const drawW = image.width * scale;
  const drawH = image.height * scale;
  page.drawImage(image, {
    x: box.x + (box.w - drawW) / 2,
    y: box.y + (box.h - drawH) / 2,
    width: drawW,
    height: drawH,
  });
}

function drawFooter(page: PDFPage, font: PDFFont, pageNumber: number) {
  page.drawLine({
    start: { x: MARGIN, y: 38 },
    end: { x: PAGE_W - MARGIN, y: 38 },
    thickness: 0.5,
    color: rgb(0.85, 0.85, 0.85),
  });
  page.drawText(site.url.replace(/^https?:\/\//, ""), {
    x: MARGIN,
    y: 24,
    size: 8,
    font,
    color: INK_SOFT,
  });
  const pageLabel = `${pageNumber}`;
  page.drawText(pageLabel, {
    x: PAGE_W - MARGIN - font.widthOfTextAtSize(pageLabel, 8),
    y: 24,
    size: 8,
    font,
    color: INK_SOFT,
  });
}

function loadLocalImageBytes(publicPath: string): Buffer {
  const cleanPath = publicPath.replace(/^\//, "");
  return readFileSync(join(PUBLIC_DIR, cleanPath));
}

async function main() {
  const pdf = await PDFDocument.create();
  pdf.setTitle(`${site.name} — Project Portfolio`);
  pdf.setAuthor(site.name);
  pdf.setSubject("Completed project portfolio");

  const serif = await pdf.embedFont(StandardFonts.TimesRomanBold);
  const serifItalic = await pdf.embedFont(StandardFonts.TimesRomanItalic);
  const sans = await pdf.embedFont(StandardFonts.Helvetica);
  const sansBold = await pdf.embedFont(StandardFonts.HelveticaBold);

  // ---- Cover page ----------------------------------------------------
  {
    const page = pdf.addPage([PAGE_W, PAGE_H]);
    page.drawRectangle({ x: 0, y: 0, width: PAGE_W, height: PAGE_H, color: NAVY });
    page.drawRectangle({ x: 0, y: PAGE_H - 6, width: PAGE_W, height: 6, color: GOLD });

    page.drawText("V . V", {
      x: MARGIN,
      y: PAGE_H - 100,
      size: 26,
      font: serif,
      color: GOLD,
    });
    page.drawText(tracked("Builders", 2), {
      x: MARGIN,
      y: PAGE_H - 122,
      size: 9,
      font: sansBold,
      color: CREAM_DIM,
    });

    page.drawText("Project", {
      x: MARGIN,
      y: PAGE_H / 2 + 40,
      size: 46,
      font: serif,
      color: CREAM,
    });
    page.drawText("Portfolio", {
      x: MARGIN,
      y: PAGE_H / 2 - 16,
      size: 46,
      font: serif,
      color: GOLD,
    });

    drawParagraph(page, site.tagline, {
      x: MARGIN,
      y: PAGE_H / 2 - 60,
      font: serifItalic,
      size: 13,
      maxWidth: CONTENT_W - 100,
      lineHeight: 18,
      color: CREAM_DIM,
    });

    const bottomY = 130;
    page.drawLine({
      start: { x: MARGIN, y: bottomY + 24 },
      end: { x: PAGE_W - MARGIN, y: bottomY + 24 },
      thickness: 0.75,
      color: rgb(1, 1, 1),
      opacity: 0.15,
    });
    page.drawText(site.phone, { x: MARGIN, y: bottomY, size: 10, font: sansBold, color: GOLD });
    page.drawText(site.email, { x: MARGIN, y: bottomY - 16, size: 10, font: sans, color: CREAM_DIM });
    page.drawText(
      `${site.address.street}, ${site.address.city}, ${site.address.region}`,
      { x: MARGIN, y: bottomY - 32, size: 10, font: sans, color: CREAM_DIM }
    );
    page.drawText(site.url.replace(/^https?:\/\//, ""), {
      x: PAGE_W - MARGIN - sansBold.widthOfTextAtSize(site.url.replace(/^https?:\/\//, ""), 10),
      y: bottomY,
      size: 10,
      font: sansBold,
      color: GOLD,
    });
  }

  // ---- Overview page ---------------------------------------------------
  {
    const page = pdf.addPage([PAGE_W, PAGE_H]);
    page.drawRectangle({ x: 0, y: 0, width: PAGE_W, height: PAGE_H, color: CREAM });
    let y = PAGE_H - MARGIN - 10;

    page.drawText(tracked("About " + site.name, 1), {
      x: MARGIN,
      y,
      size: 9,
      font: sansBold,
      color: rgb(168 / 255, 130 / 255, 58 / 255),
    });
    y -= 26;
    page.drawText("Building With Purpose", { x: MARGIN, y, size: 28, font: serif, color: NAVY });
    y -= 42;

    y = drawParagraph(page, site.description, {
      x: MARGIN,
      y,
      font: sans,
      size: 11,
      maxWidth: CONTENT_W,
      lineHeight: 16,
      color: INK,
    });
    y -= 30;

    // Stats row
    const statBoxW = CONTENT_W / stats.length;
    stats.forEach((stat, i) => {
      const x = MARGIN + i * statBoxW;
      page.drawText(stat.value, { x, y, size: 24, font: serif, color: NAVY });
      const labelLines = wrapText(sans, stat.label, 8, statBoxW - 10);
      labelLines.forEach((line, lineIndex) => {
        page.drawText(line, { x, y: y - 18 - lineIndex * 11, size: 8, font: sans, color: INK_SOFT });
      });
    });
    y -= 60;

    page.drawLine({ start: { x: MARGIN, y }, end: { x: PAGE_W - MARGIN, y }, thickness: 0.75, color: rgb(0.85, 0.82, 0.76) });
    y -= 34;

    page.drawText("What We Do", { x: MARGIN, y, size: 18, font: serif, color: NAVY });
    y -= 28;

    for (const service of services) {
      page.drawRectangle({ x: MARGIN, y: y - 3, width: 5, height: 5, color: GOLD });
      page.drawText(service.name, { x: MARGIN + 14, y: y - 6, size: 11.5, font: sansBold, color: NAVY });
      y -= 18;
      y = drawParagraph(page, service.shortDescription, {
        x: MARGIN + 14,
        y,
        font: sans,
        size: 9.5,
        maxWidth: CONTENT_W - 14,
        lineHeight: 13,
        color: INK_SOFT,
      });
      y -= 12;
    }

    drawFooter(page, sans, 2);
  }

  // ---- One page per project --------------------------------------------
  let pageNumber = 2;
  for (const project of completedProjects) {
    pageNumber += 1;
    const page = pdf.addPage([PAGE_W, PAGE_H]);
    page.drawRectangle({ x: 0, y: 0, width: PAGE_W, height: PAGE_H, color: CREAM });

    const photoBox = { x: MARGIN, y: PAGE_H - MARGIN - 230, w: CONTENT_W, h: 230 };
    try {
      const bytes = loadLocalImageBytes(project.image);
      const ext = extname(project.image).toLowerCase();
      const image = ext === ".png" ? await pdf.embedPng(bytes) : await pdf.embedJpg(bytes);
      drawFittedImage(page, image, photoBox);
    } catch {
      page.drawRectangle({ x: photoBox.x, y: photoBox.y, width: photoBox.w, height: photoBox.h, color: NAVY_SOFT });
    }

    let y = photoBox.y - 34;
    page.drawText(
      `${project.category.toUpperCase()}  ·  ${project.location}  ·  ${project.year}`,
      { x: MARGIN, y, size: 9, font: sansBold, color: rgb(168 / 255, 130 / 255, 58 / 255) }
    );
    y -= 26;
    const titleColumnW = CONTENT_W * 0.62;
    y = drawParagraph(page, project.name, {
      x: MARGIN,
      y,
      font: serif,
      size: 24,
      maxWidth: titleColumnW,
      lineHeight: 27,
      color: NAVY,
    });
    y -= 18;

    y = drawParagraph(page, project.description, {
      x: MARGIN,
      y,
      font: sans,
      size: 10.5,
      maxWidth: titleColumnW,
      lineHeight: 15,
      color: INK,
    });

    // Specs panel
    const panelX = MARGIN + CONTENT_W * 0.68;
    const panelW = CONTENT_W * 0.32;
    let panelY = photoBox.y - 34;
    page.drawRectangle({ x: panelX - 14, y: panelY - 110, width: panelW + 14, height: 118, color: rgb(0.94, 0.91, 0.86) });
    panelY -= 16;
    const specRows: [string, string][] = [
      ["Location", project.location],
      ["Category", project.category],
      ["Size", project.size],
      ["Completed", project.year],
    ];
    for (const [label, value] of specRows) {
      page.drawText(label.toUpperCase(), { x: panelX, y: panelY, size: 7.5, font: sansBold, color: INK_SOFT });
      panelY -= 13;
      page.drawText(value, { x: panelX, y: panelY, size: 11, font: sansBold, color: NAVY });
      panelY -= 20;
    }

    drawFooter(page, sans, pageNumber);
  }

  // ---- Closing / contact page -------------------------------------------
  {
    const page = pdf.addPage([PAGE_W, PAGE_H]);
    page.drawRectangle({ x: 0, y: 0, width: PAGE_W, height: PAGE_H, color: NAVY });
    page.drawRectangle({ x: 0, y: 0, width: PAGE_W, height: 6, color: GOLD });

    let y = PAGE_H / 2 + 90;
    page.drawText("Let's Build Something", { x: MARGIN, y, size: 30, font: serif, color: CREAM });
    y -= 38;
    page.drawText("Extraordinary", { x: MARGIN, y, size: 30, font: serif, color: GOLD });
    y -= 60;

    const rows: [string, string][] = [
      ["Phone", site.phone],
      ["Email", site.email],
      ["Studio", `${site.address.street}, ${site.address.city}, ${site.address.region}`],
      ["Website", site.url.replace(/^https?:\/\//, "")],
    ];
    for (const [label, value] of rows) {
      page.drawText(tracked(label, 1), { x: MARGIN, y, size: 8, font: sansBold, color: GOLD });
      y -= 15;
      page.drawText(value, { x: MARGIN, y, size: 12, font: sans, color: CREAM });
      y -= 26;
    }

    page.drawText(`© ${new Date().getFullYear()} ${site.name}. All rights reserved.`, {
      x: MARGIN,
      y: 40,
      size: 8,
      font: sans,
      color: rgb(1, 1, 1),
      opacity: 0.4,
    });
  }

  mkdirSync(OUT_DIR, { recursive: true });
  const bytes = await pdf.save();
  writeFileSync(OUT_FILE, bytes);
  console.log(`Portfolio PDF written to ${OUT_FILE} (${(bytes.length / 1024).toFixed(0)} KB)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
