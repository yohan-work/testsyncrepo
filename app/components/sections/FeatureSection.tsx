import Image from 'next/image';
import { DummyData } from "@/data/dummyData";

interface FeatureSectionProps {
  data: DummyData['featureSection'];
}

const FeatureSection = ({ data }: FeatureSectionProps) => (
  <section className="bg-gray-100 py-24">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">{data.title}</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {data.features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center w-full md:w-1/3">
            <Image src={feature.imageUrl} alt={feature.name} width={200} height={200} />
            <h3 className="text-xl font-bold mb-4">{feature.name}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureSection;