import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'معرض المشاريع والعتاد الطوبوغرافي | Galerie SETAU Mila',
  description: "توثيق بصري لـ 66 مشروعاً ميدانياً منجزاً وتجهيزات Leica Geosystems السويسرية عالية الدقة. مكتب الدراسات الطوبوغرافية SETAU وادي العثمانية، ولاية ميلة.",
  alternates: {
    canonical: 'https://setau-topographie.dz/galerie',
  },
  openGraph: {
    title: 'معرض المشاريع والعتاد الطوبوغرافي | Galerie SETAU Mila',
    description: "توثيق بصري لـ 66 مشروعاً ميدانياً منجزاً وتجهيزات Leica Geosystems السويسرية عالية الدقة. مكتب SETAU - وادي العثمانية، ميلة.",
    url: 'https://setau-topographie.dz/galerie',
    type: 'website',
    images: ['/gallery/assets_001.jpg'],
  },
};

export default function GalerieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
