import InlineLink from '../../components/ui/InlineLink';

const PROJECTS = [
  {
    name: 'PushkinAI',
    github: 'https://github.com/shravyanandyala/pushkin.ai',
    link: 'https://github.com/shravyanandyala/pushkin.ai',
    skills: [
     "PyTorch", 
    "Natural Language Processing", 
      "Deep Learning", 
    ],
    image: {
      src: '/sys-diag.png',
      alt: 'PushkinAI img',
    },
    content: (
      <>
       <p>
         Combining my interests in russian language and deep learning, I worked with a friend to create PushkinAI. We developed a state-of-the-art Russian poetry generator using finetuned ruGPT, attempting to capturing the essence of renowned poet Alexander Sergeyevich Pushkin. 
       </p>
        <p>  
          We fine-tuned ruGPT on 763 Pushkin poems, and the final model outputs a poem when given a seed text as a starting point. 
        </p>
        <p>
          We also evaluated the poetry for relevance, rhyme scheme adherence, coherence, and aesthetics, garnering validation from manual expert assessments by university Russian language and literature professors at CMU. 
        </p>
        <p>
          Compared and analyzed differences with a secondary baseline LSTM-based model. You can see the detailed investigation we did in <InlineLink href="https://drive.google.com/file/d/11OztM4IyGJFpJBWBizJLDDH1HNh3XBuF/view?usp=sharing">this</InlineLink> report. 
        </p>
      </>
    ),
  },
];

export default PROJECTS;
