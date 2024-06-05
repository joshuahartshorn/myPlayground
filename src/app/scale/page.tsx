import Hero from '@/components/hero';
import scaleImage from 'public/images/scale.jpg';

export default function ScalePage() {
  return <Hero title="Scale your app to infinity" imageAlt="factory machinery" imageData={scaleImage} />;
}
