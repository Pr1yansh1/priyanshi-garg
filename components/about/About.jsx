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
              Hey there! I crave experiences that leave a mark on the world. Working at two early-stage start-ups was an absolute blast – not only did I learn invaluable lessons, but I also collaborated with incredible minds, making a real impact on the projects. Additionally, I value innovative ideas and have had the opportunity to work with some wonderful research labs and advisors at CMU as well as UPitt. I am interested in machine learning, ethical AI, optimization, and learning theory!
              </p>
            </div>
            <div className={classes.rightCol}>
              <div className={`shadow-highlight ${classes.image}`}>
                <Image
                  src="/pg-img.jpg"
                  alt="Priyanshi Garg"
                  layout="responsive"
                  objectFit="contain" // This will make sure the image fits within the dimensions
                  loading="eager"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShowOnScroll>
  );
};

export default About;
