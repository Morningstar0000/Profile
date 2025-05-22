import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';


const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
          With over 2 years of experience in front-end web development, I specialize in crafting dynamic, user-friendly websites and applications. My expertise includes leveraging modern technologies like  React, JavaScript, Next, HTML, CSS, Radix UI, tailwind Css to create responsive and visually engaging interfaces. I am passionate about bringing designs to life, optimizing performance, and ensuring seamless user experiences. Continuously learning and adapting, I take pride in delivering projects that are both functional and aesthetically pleasing.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;