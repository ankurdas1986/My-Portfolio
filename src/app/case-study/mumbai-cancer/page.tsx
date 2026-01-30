"use client";

import { CaseStudyTemplate, type CaseStudyData } from "@/components";
import {
  Heart,
  Shield,
  Accessibility,
  Phone,
  BookOpen,
  Stethoscope,
} from "lucide-react";

const caseStudyData: CaseStudyData = {
  id: "mumbai-cancer",
  title: "Mumbai Cancer",
  subtitle:
    "Designing a compassionate, accessible healthcare platform that provides comprehensive oncology information and support for patients and their families.",
  category: "Healthcare & Medical",
  liveUrl: "https://mumbaicancer.in/",
  heroImage: "/images/project-mumbai-cancer.png",

  role: "UI/UX Design Lead + Frontend Developer",
  roleType: "design-lead",
  timeline: "2023-2024",

  aboutProject: `Mumbai Cancer is a comprehensive oncology information portal serving cancer patients, their families, and caregivers across India. The platform provides detailed information about cancer treatments, specialist services, and patient resources from leading oncologists in Mumbai. As the UI/UX Design Lead and Frontend Developer, my responsibility was to create a digital experience that balances medical professionalism with emotional sensitivity—recognizing that users often visit during extremely difficult moments in their lives. The design needed to inspire trust, provide clear information, and offer hope, all while maintaining the highest standards of accessibility.`,

  clientRequest: `We are a team of oncologists who want to reach more patients beyond our clinic walls. Many people in India lack access to reliable cancer information and often fall prey to misinformation. We need a website that provides accurate, compassionate information about cancer treatments, helps patients understand their options, and makes it easy to book consultations. The design must feel professional and trustworthy—we're dealing with life and death decisions here. Accessibility is non-negotiable as many of our patients are elderly or have disabilities.`,

  challenges: [
    "Creating a design language that conveys medical authority while remaining warm and accessible to distressed users.",
    "Organizing complex medical information (treatment types, cancer stages, procedures) in a way that's understandable to laypeople.",
    "Ensuring WCAG compliance for users with visual, motor, or cognitive impairments—many cancer patients experience treatment side effects affecting their abilities.",
    "Designing for emotional states: users may be anxious, fearful, or overwhelmed, requiring extra care in UX decisions.",
    "Balancing detailed medical content with clear calls-to-action without appearing commercially aggressive in a healthcare context.",
  ],

  approach: [
    "Conducted healthcare UX research to understand how patients and caregivers seek medical information online, identifying key frustration points.",
    "Developed a color palette centered on blue (trust, calm) and pink (cancer awareness) that distinguishes the platform from typical cold medical websites.",
    "Created an information architecture that organizes content by patient journey stages: diagnosis, treatment options, during treatment, and aftercare.",
    "Implemented large touch targets, high contrast text, and clear typography to ensure accessibility for users with various abilities.",
    "Designed a prominent 'Second Opinion' feature as clients identified this as a major patient need, making it immediately accessible from every page.",
    "Built the frontend using React with semantic HTML, ensuring screen reader compatibility and keyboard navigation throughout.",
  ],

  interestingFacts: [
    "The 'Seek for Second Opinion' modal was the most-discussed design element—we iterated through 8 versions to find the right balance of prominence without being pushy.",
    "User testing with actual cancer patients revealed that showing doctor photos significantly increased trust compared to text-only credentials.",
    "The consultation booking flow was simplified to just 3 steps after research showed distressed users abandoned complex forms.",
    "Accessibility testing included sessions with elderly users and those experiencing chemotherapy side effects like neuropathy.",
  ],

  summary: `The Mumbai Cancer project represents healthcare design at its most meaningful. As Design Lead and Frontend Developer, I created a platform that doesn't just inform—it supports, reassures, and guides users through one of life's most challenging experiences. The project showcases my ability to apply user-centered design principles in high-stakes contexts where design decisions can genuinely impact well-being. This case study demonstrates my expertise in accessible design, medical information architecture, and the sensitivity required to design for vulnerable user populations. The result is a trusted resource that extends the reach of quality cancer care information across India.`,

  tools: [
    "Figma",
    "React",
    "HTML5",
    "CSS3",
    "Semantic HTML",
    "WCAG 2.1",
    "Responsive Design",
  ],

  coreFeatures: [
    {
      title: "Second Opinion Portal",
      description:
        "Prominent, accessible feature allowing patients to easily request expert second opinions on their diagnosis or treatment plan.",
      icon: Stethoscope,
    },
    {
      title: "Accessible Design",
      description:
        "WCAG 2.1 compliant interface with large text options, high contrast, and full keyboard navigation support.",
      icon: Accessibility,
    },
    {
      title: "Patient Resources",
      description:
        "Comprehensive library of patient education materials, treatment guides, and caregiver resources.",
      icon: BookOpen,
    },
    {
      title: "Easy Consultation Booking",
      description:
        "Streamlined 3-step booking process for phone, video, or in-person consultations with specialists.",
      icon: Phone,
    },
    {
      title: "Trust-Building Elements",
      description:
        "Doctor profiles, credentials, patient testimonials, and hospital affiliations prominently displayed.",
      icon: Shield,
    },
    {
      title: "Compassionate UX",
      description:
        "Design patterns that acknowledge user emotional states and provide reassurance throughout the journey.",
      icon: Heart,
    },
  ],

  results: [
    {
      value: "100%",
      metric: "WCAG Compliant",
      description: "Full accessibility standards",
    },
    {
      value: "3-Step",
      metric: "Booking Flow",
      description: "Simplified consultation process",
    },
    {
      value: "8+",
      metric: "Specializations",
      description: "Cancer treatment areas covered",
    },
  ],

  prevProject: { title: "Used Oil India", slug: "used-oil-india" },
  nextProject: { title: "Agremy", slug: "agremy" },
};

export default function MumbaiCancerCaseStudy() {
  return <CaseStudyTemplate data={caseStudyData} />;
}
