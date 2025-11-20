export interface JourneyItem {
  id: number;
  title: string;
  period: string;
  description: string;
  logo: string; // path: /logos/xxx.svg
  company: string;
}

export const journeyData: JourneyItem[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    period: '2025 - Present',
    description:
      'Building accessible, responsive, and high-quality web interfaces using React and TypeScript. Ensuring production-ready code with clean structure and smooth user experience.',
    logo: '/logos/airbnb.svg',
    company: 'Airbnb',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    period: '2025 - Present',
    description:
      'Working closely with UI/UX designers to translate Figma design systems into pixel-perfect, scalable frontend components. Improving design consistency and modern visual flow.',
    logo: '/logos/dribble.svg',
    company: 'Dribbble',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    period: '2025 - Present',
    description:
      'Developing dashboard modules and interactive layouts with strong performance optimization, clean state handling, and reliable responsive behavior across devices.',
    logo: '/logos/zoom.svg',
    company: 'Zoom',
  },
  {
    id: 4,
    title: 'Frontend Developer',
    period: '2025 - Present',
    description:
      'Building modular web tooling and optimizing workflows through high-quality frontend engineering. Ensuring code clarity, maintainability, and scalable UI architecture.',
    logo: '/logos/github.svg',
    company: 'GitHub',
  },
];
