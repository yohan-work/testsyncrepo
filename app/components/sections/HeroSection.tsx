import Image from 'next/image';
import { DummyData } from "@/data/dummyData";

interface HeroSectionProps {
  data: DummyData['heroSection'];
}

const HeroSection = ({ data }: HeroSectionProps) => (
  <section className="bg-cover bg-center py-24" style={{ backgroundImage: `url(${data.imageUrl})` }}>
    <div className="container mx-auto text-center">
      <h1 className="text-5xl font-bold mb-8">{data.title}</h1>
      <p className="text-xl text-gray-600 mb-16">{data.description}</p>
    </div>
  </section>
);

export default HeroSection;