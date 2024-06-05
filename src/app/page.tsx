import Hero from '@/components/hero';
import homeImage from 'public/images/home.jpg';

export default function Home() {
  return <Hero title="Professional Cloud Hosting" imageAlt="car factory" imageData={homeImage} />;
}
