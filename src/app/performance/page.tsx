import Hero from '@/components/hero';
import performanceImage from 'public/images/performance.jpg';

export default function performancePage() {
  return <Hero title="We serve high performance applications" imageAlt="welding" imageData={performanceImage} />;
}
