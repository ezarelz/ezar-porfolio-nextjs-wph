import ContactCard from '@/components/footer/ContactCard';
import FooterContainer from '@/components/footer/FooterContainer';
import FooterLinks from '@/components/footer/FooterLinks';

export default function FooterSection() {
  return (
    <FooterContainer>
      <ContactCard />
      <FooterLinks />
    </FooterContainer>
  );
}
