import { Header } from './Header';
import { Hero } from './Hero';
import { HowItWorks } from './HowItWorks';
import { WhatWeBuild } from './WhatWeBuild';
import { TechStack } from './TechStack';
import { Metrics } from './Metrics';
import { VelocitySystem } from './VelocitySystem';
import { CTASection } from './CTASection';
import { Partners } from './Partners';
import { Footer } from './Footer';

export default function HomeV9() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <WhatWeBuild />
      <TechStack />
      <Metrics />
      <VelocitySystem />
      <CTASection />
      <Partners />
      <Footer />
    </div>
  );
}
