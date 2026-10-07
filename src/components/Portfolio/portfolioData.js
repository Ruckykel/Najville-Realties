const PICS = '/New-Media/Pics';
const VIDS = '/New-Media/Vids';

export const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'videos', label: 'Videos' },
  { id: 'renders', label: '3D Renders' },
  { id: 'plans', label: 'Design & Plans' },
  { id: 'construction', label: 'Construction' },
];

export const videos = [1, 2, 3, 4, 5].map((n) => ({
  id: `video-${n}`,
  type: 'video',
  category: 'videos',
  src: `${VIDS}/Najville${n}.mp4`,
  title: `Najville Project Film ${n}`,
}));

export const renders = [1, 2].map((n) => ({
  id: `render-${n}`,
  type: 'image',
  category: 'renders',
  src: `${PICS}/3d${n}.webp`,
  title: `Exterior Visualization ${n}`,
}));

// Each 3D render is paired with the architectural plan it was developed from
export const designPlans = [1, 2, 3, 4].map((n) => ({
  id: `plan-${n}`,
  category: 'plans',
  render: { type: 'image', src: `${PICS}/3dwithplan${n}.webp`, title: `Design Concept ${n} — 3D View` },
  plan: { type: 'image', src: `${PICS}/plan${n}.webp`, title: `Design Concept ${n} — Floor Plan` },
  title: `Design Concept ${n}`,
}));

export const construction = [1, 2, 3, 4, 5].map((n) => ({
  id: `site-${n}`,
  type: 'image',
  category: 'construction',
  src: `${PICS}/Pic${n}.webp`,
  title: `On-Site Progress ${n}`,
}));
