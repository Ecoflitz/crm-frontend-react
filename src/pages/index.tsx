import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../stores/hooks';
import LayoutGuest from '../layouts/Guest';
import WebSiteHeader from '../components/WebPageComponents/Header';
import WebSiteFooter from '../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FeaturesDesigns,
  TestimonialsDesigns,
  AboutUsDesigns,
  ContactFormDesigns,
} from '../components/WebPageComponents/designs';

import HeroSection from '../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../components/WebPageComponents/TestimonialsComponent';

import AboutUsSection from '../components/WebPageComponents/AboutUsComponent';

import ContactFormSection from '../components/WebPageComponents/ContactFormComponent';

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
      name: 'Lead Management',
      description:
        'Efficiently track and manage leads from initial contact to conversion. Keep your sales pipeline organized and up-to-date.',
      icon: 'mdiAccountMultiple',
    },
    {
      name: 'Department Collaboration',
      description:
        'Seamlessly connect sales, customer service, and marketing departments. Foster collaboration and improve communication across teams.',
      icon: 'mdiHandshakeOutline',
    },
    {
      name: 'Performance Metrics',
      description:
        'Monitor and analyze key performance indicators. Gain insights into departmental activities and make data-driven decisions.',
      icon: 'mdiChartLine',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} has transformed our workflow. The seamless integration between departments has boosted our efficiency tremendously.',
      company: 'LawTech Solutions',
      user_name: 'John Doe, Operations Manager',
    },
    {
      text: "Thanks to ${projectName}, tracking leads and managing client information has never been easier. It's a game-changer for our firm.",
      company: 'Legal Innovators',
      user_name: 'Jane Smith, Senior Partner',
    },
    {
      text: 'The intuitive interface and robust features of ${projectName} have made it an indispensable tool for our team.',
      company: 'Justice League Associates',
      user_name: 'Emily Johnson, Marketing Director',
    },
    {
      text: "Our customer service has improved significantly since adopting ${projectName}. It's a must-have for any law firm.",
      company: 'Advocate Alliance',
      user_name: 'Michael Brown, Customer Service Lead',
    },
    {
      text: 'With ${projectName}, we can now focus more on our clients and less on administrative tasks. Highly recommended!',
      company: 'Barrister Bros.',
      user_name: 'Sarah Williams, Legal Advisor',
    },
    {
      text: 'The performance metrics feature in ${projectName} provides invaluable insights, helping us make informed decisions.',
      company: 'Counsel Connect',
      user_name: 'David Lee, Department Manager',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`CRM Solutions for the Law Industry | Connect & Organize`}</title>
        <meta
          name='description'
          content={`Discover our CRM app tailored for the law industry, designed to connect departments, track leads, and streamline operations. Enhance your firm's efficiency today.`}
        />
      </Head>
      <WebSiteHeader projectName={'CRM'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'CRM'}
          image={['Law professionals collaborating efficiently']}
          mainText={`Revolutionize Your Law Firm's Efficiency`}
          subTitle={`Connect departments seamlessly with our CRM app tailored for the law industry. Organize notes, track leads, and enhance collaboration effortlessly.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'CRM'}
          image={['Dashboard showcasing CRM features']}
          withBg={1}
          features={features_points}
          mainText={`Discover Key Features of ${projectName}`}
          subTitle={`Enhance your law firm's operations with our CRM's powerful features. Streamline processes and boost productivity effortlessly.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'CRM'}
          design={TestimonialsDesigns.HORIZONTAL_CAROUSEL || ''}
          testimonials={testimonials}
          mainText={`What Our Clients Say About ${projectName} `}
        />

        <AboutUsSection
          projectName={'CRM'}
          image={['Team collaborating in modern office']}
          mainText={`Empowering Law Firms with ${projectName}`}
          subTitle={`At ${projectName}, we are dedicated to revolutionizing the legal industry by providing a comprehensive CRM solution. Our mission is to streamline operations, enhance collaboration, and drive success for law firms worldwide.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More About Us`}
        />

        <ContactFormSection
          projectName={'CRM'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Person typing on a laptop']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime for inquiries or support. Our team is here to assist you and will respond promptly to your messages.`}
        />
      </main>
      <WebSiteFooter projectName={'CRM'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
