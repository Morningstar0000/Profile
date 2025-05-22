import { links } from '../data.jsx';

const Navbar = () => {
  return (
    <nav className='bg-emerald-100'>
      <div className='align-element py-4 flex justify-between flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold '>
          Web<span className='text-emerald-600'>Dev</span>
        </h2>
        <div className='flex gap-x-3 py-4 md:py-0'>
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide  hover:scale-110 hover:-translate-y-1 text-emerald-600 duration-300 '
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;