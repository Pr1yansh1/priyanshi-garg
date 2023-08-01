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
              Hey there! I'm all about experiences that make a difference. Working at two early-stage start-ups was amazing – not only did I learn a ton, but collaborating with incredible minds allowed us to have a real impact on the projects.

I've also had the pleasure of working with some wonderful research labs and advisors at CMU and UPitt. Machine learning, ethical AI, optimization, and learning theory are where my interests lie.

Join me on this journey as we explore new ideas and make a positive impact with technology! 
              </p>
            </div>
            <div className={classes.rightCol}>
              <div className={`shadow-highlight ${classes.image}`}>
                <Image
                  src="/me.jpg"
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
