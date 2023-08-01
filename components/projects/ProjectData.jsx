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
      src: '/sys-diag.jpg',
      alt: 'PushkinAI img',
    },
    content: (
      <>
       <p>
         Developed a state-of-the-art Russian poetry generator using finetuned ruGPT, capturing the essence of renowned poet Alexander Sergeyevich Pushkin’s style.
       </p>
        <p>  
          Evaluated the poetry for relevance, rhyme scheme adherence, coherence, and aesthetics, garnering validation from manual expert assessments by university Russian language and literature professors.
        </p>
        <p>
          Demonstrated the model’s prowess in producing high-quality poetic text, combining artistic meaning and form, to empower creative expression in the Russian language.
        </p>
        <p>
          Compared and analyzed differences with a secondary baseline LSTM-based model. You can see the detailed investigation we did in <InlineLink href="https://drive.google.com/file/d/11OztM4IyGJFpJBWBizJLDDH1HNh3XBuF/view?usp=sharing">this</InlineLink> report. 
        </p>
      </>
    ),
  },
];

export default PROJECTS;
