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
              Some placeholder text lorem ipsum 
              </p>
            </div>
            <div className={classes.rightCol}>
              <div className={`shadow-highlight ${classes.image}`}>
                <Image
                  src="/pg-img.jpg"
                  alt="Image Of Carter"
                  layout="fill"
                  objectFit="cover"
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
