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
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

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

  const faqs = [
    {
      question: 'What features does ${projectName} offer?',
      answer:
        '${projectName} offers a range of features including client management, task automation, document organization, custom reporting, secure communication, and calendar integration to streamline your legal operations.',
    },
    {
      question: 'How can ${projectName} benefit my law firm?',
      answer:
        '${projectName} enhances efficiency by automating routine tasks, improving client communication, and providing valuable insights through analytics, allowing your firm to focus on delivering exceptional legal services.',
    },
    {
      question: 'Is my data secure with ${projectName}?',
      answer:
        'Yes, ${projectName} employs advanced encryption and security measures to protect your sensitive client information, ensuring compliance with industry standards.',
    },
    {
      question: 'Can I customize reports in ${projectName}?',
      answer:
        "Absolutely! ${projectName} allows you to generate detailed, customizable reports tailored to your firm's specific needs, providing insights into performance and helping you make informed decisions.",
    },
    {
      question: 'How does ${projectName} integrate with existing systems?',
      answer:
        '${projectName} is designed to seamlessly integrate with your existing systems, ensuring a smooth transition and minimal disruption to your current workflow.',
    },
    {
      question: 'What support options are available for ${projectName}?',
      answer:
        'Our dedicated support team is available to assist you with any questions or issues. You can reach out to us via email or through our contact form for prompt assistance.',
    },
    {
      question: 'Is there a trial period for ${projectName}?',
      answer:
        'Yes, we offer a trial period for you to explore the features and benefits of ${projectName} before committing to a subscription. Contact us for more details.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions | ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about our CRM solutions for the law industry. Learn more about features, support, and how ${projectName} can benefit your firm.`}
        />
      </Head>
      <WebSiteHeader projectName={'CRM'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'CRM'}
          image={['Open book with question marks']}
          mainText={`Your ${projectName} Questions Answered Here`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. Learn how our CRM solutions can enhance your legal operations.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Explore FAQs`}
        />

        <FaqSection
          projectName={'CRM'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'CRM'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
