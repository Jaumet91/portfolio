import { useContext, useState, useEffect } from 'react';
import { AiOutlineBulb, AiOutlineDesktop } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import { SkillsProgress } from './SkillsProgress';
import { ThemeContext } from '../../../utils';
import { config } from '../../../config';
import {
  imagesLight,
  imagesDark,
  iphoneFrame,
  laptopLight,
  laptopDark,
} from '../../../assets';

const { skills } = config;

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 10 : -10,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? 10 : -10,
      opacity: 0,
    };
  },
};

export const About = () => {
  const { theme, width, lgScreen } = useContext(ThemeContext);
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, imagesLight.length, page);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    setTimeout(() => paginate(1), 5000);
  }, [paginate]);

  return (
    <section
      id='about'
      className='lg:max-w-[1000px] md:max-w-[671px] mx-auto relative py-16 sm:py-20 md:py-24'>
      <div className='md:pb-10 lg:pb-32 xl:pb-40'>
        <article>
          <div>
            <span className='dark:text-primary-inverted text-primary pb-3'>
              Who I am
            </span>
          </div>
          <div className='flex justify-start items-center mt-2 mb-10'>
            <h2 className='dark:text-white text-light-black font-bold md:text-[34px] text-2xl shrink-0'>
              About me
            </h2>
            <span className='w-full sm:w-[300px] h-[1px] bg-slate-400 dark:bg-slate-600  ml-3 mt-1 rounded-3xl'></span>
          </div>

          <div className='flex-col lg:grid lg:grid-cols-2'>
            <motion.div
              initial={width > lgScreen ? { y: 80, opacity: 0 } : {}}
              whileInView={width > lgScreen ? { y: 0, opacity: 1 } : {}}
              viewport={width > lgScreen ? { once: true, amount: 0 } : {}}
              transition={width > lgScreen ? { duration: 0.5, delay: 0 } : {}}
              className='lg:grid lg:place-content-between'>
              <p className='dark:text-white text-light-black mb-4'>
                Hello, {"I'm"} Jaime Cortes a electronic engenieer based in
                Spain. I develop websites with{' '}
                <span className='text-primary dark:text-primary-inverted'>
                  MERN Stack
                </span>{' '}
                <span className='italic'>
                  {'"'}MongoDB, Express, React and Node.js{'"'}
                </span>{' '}
                and design them with softwares like Figma. {"I'm"} also learning
                the techonology behind web 3.0.
              </p>
              <p className='dark:text-white text-light-black mb-4'>
                From a young age, technology has interested me. I loved playing
                video games of some kind, but my interest {"didn't"} stop just
                at entertainment. The more I played, the more I wanted to
                understand how things worked.
              </p>
              <p className='dark:text-white text-light-black mb-4'>
                I started building computers and learned all about hardware and
                water cooling, but my interest in technologies changed as I
                expanded my knowledge from taking apart equipment to building
                new websites and coding.
              </p>
              <p className='dark:text-white text-light-black'>
                A few months ago {"I've"} discovered my passion for the world of
                web development and the beauty behind building useful websites
                like the one you will find in this portfolio. {"I'm"} now
                looking for a junior dev position to finally kick start my
                career and learn among professionals.
              </p>
            </motion.div>

            <div className='grid pb-14 lg:py-0 lg:place-content-between lg:pl-10 xl:pl-16'>
              {
                <motion.div
                  initial={width > lgScreen ? { y: 80, opacity: 0 } : {}}
                  whileInView={width > lgScreen ? { y: 0, opacity: 1 } : {}}
                  viewport={width > lgScreen ? { once: true, amount: 0 } : {}}
                  transition={
                    width > lgScreen ? { duration: 0.5, delay: 0 } : {}
                  }
                  className='my-14 lg:my-0'>
                  {skills.map((skill, i) => (
                    <motion.div key={skill.id}>
                      <SkillsProgress
                        width={width}
                        lgScreen={lgScreen}
                        name={skill.name}
                        skill={skill.skill}
                        i={i}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              }
              <div className='h-fit lg:mt-14'>
                <motion.div
                  initial={width > lgScreen ? { y: 80, opacity: 0 } : {}}
                  whileInView={width > lgScreen ? { y: 0, opacity: 1 } : {}}
                  viewport={width > lgScreen ? { once: true, amount: 0 } : {}}
                  transition={
                    width > lgScreen ? { duration: 0.5, delay: 0 } : {}
                  }>
                  <div className='flex '>
                    <AiOutlineBulb
                      size={60}
                      className='bg-primary dark:bg-primary-inverted p-2 rounded-md text-light-black
                       dark:text-white transition-colors shrink-0 '
                    />
                    <div className='pl-5'>
                      <h3 className='dark:text-primary-inverted text-primary font-bold md:text-[24px] text-xl'>
                        Product Design
                      </h3>
                      <p className='dark:text-white text-light-black pt-3'>
                        I work with certain design tools to create high-fidelity
                        designs and prototypes. Strong preference for easy to
                        use, intuitive UX/UI.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className='h-fit mt-14'>
                <motion.div
                  initial={width > lgScreen ? { y: 80, opacity: 0 } : {}}
                  whileInView={width > lgScreen ? { y: 0, opacity: 1 } : {}}
                  viewport={width > lgScreen ? { once: true, amount: 0 } : {}}
                  transition={
                    width > lgScreen ? { duration: 0.5, delay: 0 } : {}
                  }>
                  <div className='flex '>
                    <AiOutlineDesktop
                      size={60}
                      className='bg-primary dark:bg-primary-inverted p-2 rounded-md text-light-black
                       dark:text-white transition-colors shrink-0 '
                    />
                    <div className='pl-5'>
                      <h3 className='dark:text-primary-inverted text-primary font-bold md:text-[24px] text-xl '>
                        Website Development
                      </h3>
                      <p className='dark:text-white text-light-black pt-4 '>
                        Websites {"don't"} have to be static. I love making
                        pages come to life with smooth animations. My layouts
                        will work on any device, big or small.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className='relative grid place-content-center'>
        <div className='w-full'>
          <div className='img-shadow hidden md:grid place-content-center'>
            <img
              className='md:max-w-[576px] lg:max-w-[704px] xl:max-w-[1000px]'
              src={theme === 'dark' ? laptopDark : laptopLight}
            />
          </div>
          <div
            className='grid place-content-center pt-7 sm:pt-0 img-shadow md:-bottom-[70px]
           xl:-bottom-[150px] lg:-bottom-[30px] md:absolute'>
            <motion.div
              initial={width > lgScreen ? { y: 80, opacity: 0 } : {}}
              whileInView={width > lgScreen ? { y: 0, opacity: 1 } : {}}
              viewport={width > lgScreen ? { once: true, amount: 0 } : {}}
              transition={width > lgScreen ? { duration: 0.5, delay: 0 } : {}}
              className='w-[342px] sm:w-[400px] md:w-[140px] lg:w-[190px] xl:w-[250px] h-[700px]
                xl:h-[750px] md:h-[400px] sm:h-[830px] sm:mt-14 sm:mb-0 relative flex
                justify-center items-center overflow-hidden z-10'>
              <img className='w-full absolute z-10' src={iphoneFrame} />
              <AnimatePresence initial={true} custom={direction}>
                <motion.img
                  className='absolute w-[310px] sm:w-[363px] md:w-[127px] lg:w-[172px] xl:w-[226px]
                   left-[18px] sm:left-[21px]  md:left-[7px] xl:left-[13px] lg:left-[10px]'
                  key={page}
                  src={
                    theme === 'dark'
                      ? imagesDark[imageIndex]
                      : imagesLight[imageIndex]
                  }
                  custom={direction}
                  variants={variants}
                  initial='enter'
                  animate='center'
                  exit='exit'
                  drag='x'
                  transition={{
                    x: {
                      type: 'ease',
                    },
                    opacity: { duration: 0.4 },
                  }}
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
