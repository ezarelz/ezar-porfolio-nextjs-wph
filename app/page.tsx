import Aboutme from './home/partials/aboutme';
import FooterSection from './home/partials/footer';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import SectionFAQ from './home/partials/sectionFAQ';
import SectionJourney from './home/partials/sectionJourney';
import SectionProjects from './home/partials/sectionProjects';
import SectionSkillComparison from './home/partials/sectionSkillComparison';
import SectionTestimonials from './home/partials/sectionTestimonials';
import { SectionTools } from './home/partials/sectionTools';
import Tagline from './home/partials/tagline';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tagline />
      <Aboutme />
      <SectionTools />
      <SectionSkillComparison />
      <SectionProjects />
      <SectionJourney />
      <SectionTestimonials />
      <SectionFAQ />
      <FooterSection />
    </div>
  );
}
