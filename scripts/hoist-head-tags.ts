const LEADING_HEAD_TAG =
  /^\s*(<title[\s\S]*?<\/title>|<meta\s[\s\S]*?>|<link\s[\s\S]*?>)/;

/** Move react-helmet tags rendered inside #root into document <head> (SSG dedupe fix). */
export function hoistHeadTags(html: string): string {
  const rootOpenMatch = html.match(/<div id="root"[^>]*>/);
  if (!rootOpenMatch || rootOpenMatch.index === undefined) {
    return html;
  }

  const rootContentStart = rootOpenMatch.index + rootOpenMatch[0].length;
  let cursor = rootContentStart;
  const extractedTags: string[] = [];

  while (true) {
    const slice = html.slice(cursor);
    const match = slice.match(LEADING_HEAD_TAG);
    if (!match) {
      break;
    }
    extractedTags.push(match[1].trim());
    cursor += match[0].length;
  }

  if (extractedTags.length === 0) {
    return html;
  }

  const injected = extractedTags.join('\n    ');
  let result = html.slice(0, rootContentStart) + html.slice(cursor);

  // Replace default shell title; append per-route helmet tags before </head>.
  result = result.replace(/<title>[^<]*<\/title>\s*/i, '');
  result = result.replace('</head>', `    ${injected}\n  </head>`);

  return result;
}
