import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface LinkedTextProps {
  text: string;
  links: { phrase: string; to: string }[];
}

/** Inserts internal links for the first occurrence of each phrase in plain text. */
export function LinkedText({ text, links }: LinkedTextProps) {
  if (links.length === 0) return <>{text}</>;

  let nodes: ReactNode[] = [text];

  for (const { phrase, to } of links) {
    const next: ReactNode[] = [];
    for (const node of nodes) {
      if (typeof node !== 'string') {
        next.push(node);
        continue;
      }
      const index = node.indexOf(phrase);
      if (index === -1) {
        next.push(node);
        continue;
      }
      const before = node.slice(0, index);
      const after = node.slice(index + phrase.length);
      if (before) next.push(before);
      next.push(
        <Link key={`${phrase}-${to}`} to={to} className="text-[#00A651] font-medium hover:underline">
          {phrase}
        </Link>,
      );
      if (after) next.push(after);
    }
    nodes = next;
  }

  return <>{nodes}</>;
}
