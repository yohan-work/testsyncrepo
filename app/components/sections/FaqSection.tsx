import { DummyData } from "@/data/dummyData";

interface FaqSectionProps {
  data: DummyData['faqSection'];
}

const FaqSection = ({ data }: FaqSectionProps) => (
  <section className="bg-white py-24">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">{data.title}</h2>
      <dl className="max-w-3xl mx-auto space-y-6 divide-y divide-gray-200">
        {data.questions.map((question, index) => (
          <div key={index} className="flex flex-col items-between md:flex-row">
            <dt className="text-lg font-medium text-gray-900">{question.question}</dt>
            <dd className="mt-2 text-base text-gray-500 md:ml-auto">{question.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default FaqSection;