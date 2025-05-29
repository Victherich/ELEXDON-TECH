import React from 'react';
import styled from 'styled-components';
import heroBg from '../Images/ann1.png'; // Use your image path
import announcementIcon from '../Images/ann2.png'; // Optional icon
import useAnimateOnScroll from './useAnimateOnScroll';
import 'animate.css'


const PageContainer = styled.div`
  font-family: 'Segoe UI', sans-serif;
  color: #1e293b;
`;

const HeroSection = styled.section`
  position: relative;
  background: url(${heroBg}) no-repeat center center/cover;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(43, 50, 178, 0.6); /* Overlay */
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
    color: #fff;
  }
`;

const HeroContent = styled.div`
  max-width: 700px;
  padding: 0 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
`;

const AnnouncementSection = styled.section`
  padding: 60px 20px;
  background: #f9fafb;
`;

const AnnouncementGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 40px;
    margin-right: 1rem;
  }

  h3 {
    color: #2B32B2;
    font-size: 1.25rem;
    margin: 0;
  }
`;

const DateText = styled.p`
  font-size: 0.85rem;
  color: #64748b;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  font-size: 1rem;
  color: #334155;
  margin-bottom: 1rem;
`;

const LearnMore = styled.a`
  font-weight: bold;
  color: #2B32B2;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const announcements = [
  {
    id: 1,
    title: 'Introducing Our New Cloud Hosting Plans 🚀',
    date: 'May 25, 2025',
    content: 'We’re excited to launch our new lightning-fast cloud hosting plans tailored for speed, security, and scale.',
    link: '/cloud-hosting'
  },
  {
    id: 2,
    title: 'Scheduled Maintenance Notice 🛠️',
    date: 'May 20, 2025',
    content: 'We will be performing scheduled maintenance on May 28th from 12:00 AM – 3:00 AM UTC. Services may experience temporary interruptions.',
    link: ''
  },
  {
    id: 3,
    title: 'Affiliate Program Upgraded 💰',
    date: 'May 15, 2025',
    content: 'Our affiliate program just got better! Earn up to 35% recurring commissions. Existing affiliates are automatically upgraded.',
    link: '/affiliate'
  }
];

const Announcement = () => {
  const heroTitleAnim = useAnimateOnScroll('animate__fadeInDown animate__slower');
const heroSubtitleAnim = useAnimateOnScroll('animate__fadeInUp animate__slower');
const a = useAnimateOnScroll('animate__fadeInUp animate__slower');
const b = useAnimateOnScroll('animate__fadeInUp animate__slower');
const c = useAnimateOnScroll('animate__fadeInUp animate__slower');
const d = useAnimateOnScroll('animate__fadeInUp animate__slower');
const e = useAnimateOnScroll('animate__fadeInDown animate__slower');


  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle ref={heroTitleAnim.ref} className={heroTitleAnim.className}>Latest Announcements</HeroTitle>
          <HeroSubtitle ref={heroSubtitleAnim.ref} className={heroSubtitleAnim.className}>Stay updated with what's new at Elexdon Host — new features, system updates, and important notices.</HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <AnnouncementSection>
        <AnnouncementGrid>
          {announcements.map(item => (
            <Card key={item.id}>
              <CardHeader>
                <img src={announcementIcon} alt="Announcement Icon" />
                <h3>{item.title}</h3>
              </CardHeader>
              <DateText>{item.date}</DateText>
              <Content>{item.content}</Content>
              {item.link && (
                <LearnMore href={item.link}>Read More &rarr;</LearnMore>
              )}
            </Card>
          ))}
        </AnnouncementGrid>
      </AnnouncementSection>
    </PageContainer>
  );
};

export default Announcement;
