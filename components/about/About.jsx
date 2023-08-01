import Image from 'next/image';
import InlineLink from '../ui/InlineLink';
import ScrollTo from '../ui/ScrollTo';
import classes from './About.module.scss';
import ColumnList from '../ui/ColumnList';
import ShowOnScroll from '../ui/ShowOnScroll';

const About = () => {
  return (
    <ShowOnScroll>
      <div className={`layout ${classes.about}`}>
        <div className={classes.wrapper}>
          <ScrollTo id="about" />
          <h2 className={`section-header`}>About Me</h2>
          <div className={classes.columns}>
            <div className={`border-highlight ${classes.text}`}>
              <p>
                This led to my current internship at
               an AI tutor chatbot powered by OpenAI&apos;s{' '}
                <InlineLink href="https://openai.com/gpt-4">GPT-4</InlineLink>.
                I&apos;m incredibly excited to get the chance to work with such
                cutting-edge technology as the wave of AI sweeps over our world!
              </p>
            </div>
            <div className={classes.rightCol}>
              <div className={`shadow-highlight ${classes.image}`}>
                <Image
                  src="./pg-img.jpg"
                  alt="Image Of Carter"
                  layout="fill"
                  objectFit="cover"
                  loading="eager"
                ></Image>
              </div>
              <div>
                <h4 className={classes.technologies}>
                  Some technologies I&apos;ve been using lately:
                </h4>
                <ColumnList
                  list={[
                    'React',
                    'Go',
                    'Angular',
                    'Node.js',
                    'Express.js',
                    'MongoDB',
                    'TypeScript',
                    'JavaScript',
                    'CSS / Sass',
                    'Java / Spring Boot',
                    'C++',
                    'Android Studio',
                  ]}
                  numCols={2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShowOnScroll>
  );
};

export default About;
