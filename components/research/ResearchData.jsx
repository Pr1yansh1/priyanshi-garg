import React from 'react';
import InlineLink from '../ui/InlineLink';

const RESEARCH = [
  {
    id: 0,
    company: 'Reliable Autonomous Systems Lab, CMU',
    href: 'https://www.ri.cmu.edu/robotics-groups/reliable-autonomous-systems-lab/',
    title: 'Undergraduate Researcher',
    date: 'Jan 2021 -- July 2021',
    bullets: [
      <span key="bullet-0">Worked on <InlineLink href = "https://www.cs.cmu.edu/~teachable/personnel.html"> Multi-Modal Communication for Teachable Robots </InlineLink> with Dr. Reid Simmons.</span>,
    ],
  },
  {
    id: 1,
    company: 'ML Department, CMU',
    href: 'https://www.cs.cmu.edu/~nihars/',
    title: 'Undergraduate Researcher',
    date: 'Sep 2022 -- Present',
    bullets: [
      <span key="bullet-1">Conducting cutting-edge research in the Machine Learning Department under the guidance of <InlineLink href="https://www.cs.cmu.edu/~nihars/">Dr. Nihar Shah</InlineLink> as an Undergraduate Researcher, focused on automating paper-reviewer assignments for academic journals.</span>,
      "Developed and tested novel online matching algorithms, informed by rigorous research, to revolutionize the review process, improve efficiency, and reduce bias.",
      "Utilized Python, APIs, and web-scraping techniques to construct a novel dataset of paper submissions and reviews, providing valuable research materials for the algorithmic assignment process.",
      "Demonstrated expertise in theoretical aspects by designing and proving the efficacy of various matching algorithms, ensuring optimal reviewer assignments based on similarity scores.",
      "Presented research findings in a poster presentation at CMU’s research symposium, sharing insights and contributions to the field of automated paper-reviewer assignments in academic journals. See here for my final report.",
      "Will continue working on improving initial results and preparing for publication, aiming to contribute novel insights to the field of automated paper-reviewer assignments in academic journals.",
    ],
  },
  {
    id: 2,
    company: 'Insanally Labs, University of Pittsburgh',
    href: 'https://www.insanallylab.com/',
    title: 'Research Developer',
    date: 'June -- August 2023',
    bullets: [
      <span key="bullet-2">Developed an open-source Python package for a novel trial-by-trial, spike-timing-based Bayesian decoding algorithm, revolutionizing the understanding of non-classically responsive neurons’ coding capacities in the brain.</span>,
      "Applied Object-Oriented Programming (OOP) principles and conducted rigorous unit and integration testing, resulting in a highly reliable and maintainable Python package that is now widely usable by the neuroscience community.",
      "Writing a methods paper for publication, showcasing the efficacy of the decoding package and its significant impact on advancing neuroscientific research.",
      <span key="bullet-3">By making the decoding algorithm accessible through an easy-to-use package, contributed to the democratization of neuroscience research, enabling scientists worldwide to investigate neuron responsiveness with greater ease and accuracy. See the package on <InlineLink href="https://github.com/InsanallyLab/DecodingPackage">GitHub</InlineLink>.</span>,
    ],
  },
].reverse();

export default RESEARCH;
