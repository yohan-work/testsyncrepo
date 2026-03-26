import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'iPhone Explanation',
  description: 'Learn about the features and specifications of the iPhone.'
};

const IntroductionSection = () => (
  <section>
    <h2>Introduction to iPhone</h2>
    <p>The iPhone is a line of smartphones designed, developed, and marketed by Apple Inc. It was first introduced in 2007 as the world's first smartphone with an integrated web browser.</p>
    <img src="/images/iphone-introduction.png" alt="iPhone Introduction" />
  </section>
);

const DisplaySection = () => (
  <section>
    <h2>Display</h2>
    <p>The iPhone features an OLED display with a high refresh rate for smooth visuals. ProMotion technology offers up to 120Hz refresh rates.</p>
    <img src="/images/iphone-display.png" alt="iPhone Display" />
  </section>
);

const ProcessorSection = () => (
  <section>
    <h2>Processor</h2>
    <p>The iPhone is powered by Apple's A-series processors, which are known for their performance and efficiency.</p>
    <img src="/images/iphone-processor.png" alt="iPhone Processor" />
  </section>
);

const CameraSection = () => (
  <section>
    <h2>Camera</h2>
    <p>The iPhone offers a high-quality camera system with features like Night mode and Cinematic mode.</p>
    <img src="/images/iphone-camera.png" alt="iPhone Camera" />
  </section>
);

const OperatingSystemSection = () => (
  <section>
    <h2>Operating System</h2>
    <p>iOS is Apple's mobile operating system, known for its user-friendly interface and robust app ecosystem.</p>
    <img src="/images/iphone-os.png" alt="iPhone OS" />
  </section>
);

const ConnectivitySection = () => (
  <section>
    <h2>Connectivity</h2>
    <p>The iPhone supports Wi-Fi, cellular data, Bluetooth, and NFC for seamless connectivity.</p>
    <img src="/images/iphone-connectivity.png" alt="iPhone Connectivity" />
  </section>
);

const iPhoneExplanationPage = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">iPhone Explanation</h1>

    <IntroductionSection />
    <DisplaySection />
    <ProcessorSection />
    <CameraSection />
    <OperatingSystemSection />
    <ConnectivitySection />
  </div>
);

export default iPhoneExplanationPage;