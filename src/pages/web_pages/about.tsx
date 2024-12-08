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
  AboutUsDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

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
      name: 'Integrated Workflow',
      description:
        'Seamlessly connect all departments within your firm, ensuring smooth communication and efficient task management.',
      icon: 'mdiSync',
    },
    {
      name: 'Advanced Analytics',
      description:
        "Gain insights into your firm's performance with comprehensive analytics and reporting tools, enabling data-driven decisions.",
      icon: 'mdiChartBar',
    },
    {
      name: 'Secure Data Management',
      description:
        'Protect sensitive client information with robust security measures, ensuring compliance and peace of mind.',
      icon: 'mdiLock',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has been a game-changer for our firm. The seamless integration and user-friendly interface have significantly improved our workflow.',
      company: 'Legal Pioneers Inc.',
      user_name: 'Alice Thompson, Managing Partner',
    },
    {
      text: "With ${projectName}, we can now focus more on our clients and less on administrative tasks. It's an essential tool for any law firm.",
      company: 'Justice Advocates',
      user_name: 'Robert Green, Senior Attorney',
    },
    {
      text: 'The analytics feature in ${projectName} provides invaluable insights, helping us make informed decisions and drive growth.',
      company: 'Counsel Connect',
      user_name: 'Emily White, Operations Manager',
    },
    {
      text: 'Our team loves the secure data management feature of ${projectName}. It gives us peace of mind knowing our client information is protected.',
      company: 'Barrister Bros.',
      user_name: 'Michael Brown, IT Director',
    },
    {
      text: 'Thanks to ${projectName}, our departments are more connected than ever. Communication and collaboration have never been easier.',
      company: 'LawTech Solutions',
      user_name: 'Sarah Johnson, HR Manager',
    },
    {
      text: 'The support team at ${projectName} is fantastic. They are always ready to help and ensure we get the most out of the software.',
      company: 'Advocate Alliance',
      user_name: 'David Lee, Customer Support Lead',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us | Discover Our Mission & Vision`}</title>
        <meta
          name='description'
          content={`Learn more about our mission, values, and the team behind our innovative CRM solutions for the law industry. Discover how we aim to transform legal operations.`}
        />
      </Head>
      <WebSiteHeader projectName={'CRM'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'CRM'}
          image={['Team brainstorming in modern office']}
          mainText={`Meet the Visionaries Behind ${projectName}`}
          subTitle={`Discover the passion and dedication driving our team to innovate and transform the legal industry. Learn about our journey and commitment to excellence.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Our Story`}
        />

        <AboutUsSection
          projectName={'CRM'}
          image={['Team discussing project strategy']}
          mainText={`Our Journey with ${projectName} Begins`}
          subTitle={`At ${projectName}, we are committed to revolutionizing the legal industry with innovative CRM solutions. Our mission is to empower law firms with tools that enhance efficiency and collaboration.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <FeaturesSection
          projectName={'CRM'}
          image={['Features displayed on a screen']}
          withBg={1}
          features={features_points}
          mainText={`Explore ${projectName} Core Features`}
          subTitle={`Discover the powerful features of ${projectName} that streamline legal operations and enhance productivity for law firms.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'CRM'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`Hear from Our Satisfied ${projectName} Users `}
        />
      </main>
      <WebSiteFooter projectName={'CRM'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
