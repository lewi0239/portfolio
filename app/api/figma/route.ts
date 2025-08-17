import { NextResponse } from 'next/server';

export type FigmaFile = {
  id: string;
  name: string;
  desc: string;
  html_url: string;
  last_modified?: string;
  image: string;
  topics: ['figma'];
};

const MY_FIGMA_FILES: FigmaFile[] = [
  {
    id: 'revealme-design-system',
    name: 'RevealMe Design System',
    desc: 'The design system for RevealMe',
    html_url: 'https://www.figma.com/design/LwiKOHDNabwQNWg6SJzAOe/UX-Design--Copy-?node-id=1-9',
    last_modified: '2025-08-12T00:00:00Z',
    image: '/images/figma.svg',
    topics: ['figma'],
  },
  {
    id: 'revealme-tech-showcase',
    name: 'RevealMe – Tech Showcase Pitch',
    desc: 'The "YC" style pitch for RevealMe',
    html_url: 'https://www.figma.com/slides/n9QXCR5OtX9CEt2FNftBtV/YC-RevealMe--Copy-?node-id=1-29',
    last_modified: '2025-08-12T00:00:00Z',
    image: '/images/figma.svg',
    topics: ['figma'],
  },
];

export async function GET() {
  return NextResponse.json(MY_FIGMA_FILES);
}
