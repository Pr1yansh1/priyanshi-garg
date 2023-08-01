import { useEffect, useState } from 'react';
import InlineLink from '../ui/InlineLink';
import ScrollTo from '../ui/ScrollTo';
import classes from './Home.module.scss';

const Home = () => {
  const [showHi, setShowHi] = useState(false);
  const [showCarter, setShowCarter] = useState(false);
  const [showSubHeader, setShowSubHeader] = useState(false);
  const [showParargraph, setShowParargraph] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowHi(true), 2000);
    setTimeout(() => setShowCarter(true), 2800);
    setTimeout(() => setShowSubHeader(true), 4200);
    setTimeout(() => setShowParargraph(true), 6200);
  }, []);

  return (
    <>
      <ScrollTo id="home" />
      <div className={classes.home}>
        <div className={'layout ' + classes['home-textbox']}>
          <h3 className={`${classes.hi} ${!showHi ? classes.hide : ''}`}>
            Hi, I&apos;m
          </h3>
          <h1
            className={`${classes.carter} ${!showCarter ? classes.hide : ''}`}
          >
            Priyanshi Garg 
          </h1>
          <h1
            className={`${classes.subheader} ${
              !showSubHeader ? classes.hide : ''
            }`}
          >
            A curious researcher, engineer and dancer.  
          </h1>
          <p
            className={`${classes.paragraph} ${
              !showParargraph ? classes.hide : ''
            }`}
          >
            Currently studying Computer Science at the{' '}
            <InlineLink href="https://www.cs.cmu.edu/">
              Carnegie Mellon University 
            </InlineLink>
            .I am passionate about AI ethics, learning theory as well as software engineering. In my free time, I like to learn new langauges (both cs and human!), dance, and cook! 
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
