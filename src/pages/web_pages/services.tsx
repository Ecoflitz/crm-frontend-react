import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'CRM';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const features_points = [
    {
      name: 'Client Management',
      description:
        'Effortlessly manage client information and interactions. Keep track of case details and communication history in one place.',
      icon: 'mdiAccountCircle',
    },
    {
      name: 'Task Automation',
      description:
        'Automate routine tasks to save time and reduce errors. Focus on what matters most while ${projectName} handles the rest.',
      icon: 'mdiRobot',
    },
    {
      name: 'Document Organization',
      description:
        'Organize and access important documents with ease. Ensure your team has the right information at their fingertips.',
      icon: 'mdiFileDocumentOutline',
    },
    {
      name: 'Custom Reporting',
      description:
        "Generate detailed reports tailored to your firm's needs. Gain insights into performance and make informed decisions.",
      icon: 'mdiChartPie',
    },
    {
      name: 'Secure Communication',
      description:
        'Communicate securely with clients and colleagues. Protect sensitive information with advanced encryption.',
      icon: 'mdiLock',
    },
    {
      name: 'Calendar Integration',
      description:
        'Sync your schedule with ${projectName} to stay on top of appointments and deadlines. Never miss an important date again.',
      icon: 'mdiCalendarCheckOutline',
    },
  ];

  const testimonials = [
    {
      text: "${projectName} has streamlined our operations and improved client satisfaction. It's an indispensable tool for our firm.",
      company: 'Legal Innovators Group',
      user_name: 'Jessica Taylor, Managing Partner',
    },
    {
      text: 'The automation features in ${projectName} have saved us countless hours. Our team is more productive than ever.',
      company: 'Justice Solutions LLC',
      user_name: 'Mark Johnson, Operations Director',
    },
    {
      text: "With ${projectName}, we can securely manage client communications and documents. It's a game-changer for our practice.",
      company: 'Advocate Alliance',
      user_name: 'Emily Davis, Senior Attorney',
    },
    {
      text: 'The custom reporting feature in ${projectName} provides us with valuable insights. We can make informed decisions with ease.',
      company: 'Counsel Connect',
      user_name: 'Michael Brown, Financial Analyst',
    },
    {
      text: 'Our clients appreciate the seamless communication facilitated by ${projectName}. It has strengthened our client relationships.',
      company: 'Barrister Bros.',
      user_name: 'Sarah Wilson, Client Relations Manager',
    },
    {
      text: "The integration capabilities of ${projectName} have made our workflow more efficient. It's a must-have for any law firm.",
      company: 'LawTech Solutions',
      user_name: 'David Lee, IT Specialist',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services | Enhance Your Legal Operations`}</title>
        <meta
          name='description'
          content={`Explore the comprehensive services offered by our CRM solution tailored for the law industry. Discover how we can streamline your firm's operations and boost productivity.`}
        />
      </Head>
      <WebSiteHeader projectName={'CRM'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'CRM'}
          image={['Law firm team in discussion']}
          mainText={`Transform Your Legal Services with ${projectName}`}
          subTitle={`Discover how ${projectName} can revolutionize your law firm's operations. Our tailored CRM services enhance efficiency, streamline processes, and drive success.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Explore Our Services`}
        />

        <FeaturesSection
          projectName={'CRM'}
          image={['Features displayed on a tablet']}
          withBg={1}
          features={features_points}
          mainText={`Unleash the Power of ${projectName} Features`}
          subTitle={`Explore the robust features of ${projectName} designed to elevate your law firm's services and operational efficiency.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS_DIVERSITY || ''}
        />

        <TestimonialsSection
          projectName={'CRM'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL_DIVERSITY || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Love About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'CRM'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
