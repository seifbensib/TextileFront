import { tw } from 'twind';
import { useState } from 'react';
import Button from '@/components/button';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
  
}


type Link = {
  label: string;
  href: string;
};

const links: Link[] = [
  { label: `Features`, href: `/` },
  { label: `Testimonials`, href: `/` },
  { label: `Pricing`, href: `/` },
  { label: `Blog`, href: `/` },
];

const secondaryLinks: Link[] = [
  { label: `Contact sales`, href: `/` },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-gray-400`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link: Link) => (
        <a href={link.href} className={tw(`text-gray-500 block px-3 py-2 text-base font-medium`)} key={link.label}>
          {link.label}
        </a>
      ))}
    </div>
    <div className={tw(`pt-4 pb-3 border-t border-gray-400`)}>
      <div className={tw(`px-2 space-y-1`)}>
        {secondaryLinks.map((link: Link) => (
          <a
            key={`mobile-${link.label}`}
            href={link.href}
            className={tw(`block px-3 py-2 text-base font-medium text-gray-500`)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const LoginForm = ({ openSignup }: { openSignup: () => void }) => (
  <div className={tw(`p-6 bg-gray-100 rounded-lg border border-gray-300 shadow-md`)}>
    <h2 className={tw(`text-xl font-semibold text-center mb-4`)}>Log in</h2>
    <form>
      <input 
        type="email" 
        placeholder="Email" 
        className={tw(`block w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        className={tw(`block w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500`)} 
      />
      <Button primary className={tw(`mt-4 w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600`)}>
        Log in
      </Button>
      <p className={tw(`text-center text-sm text-gray-500 mt-4`)}>
        Don’t have an account?{' '}
        <span
          onClick={openSignup}
          className={tw(`text-blue-500 hover:underline cursor-pointer`)}
        >
          Sign up
        </span>
      </p>
    </form>
  </div>
);


const SignupForm = () => (
  <div className={tw(`p-4`)}>
    <h2 className={tw(`text-lg font-medium text-center mb-4`)}>Sign up</h2>
    <form>
      <input type="text" placeholder="Name" className={tw(`block w-full mt-2 p-2 border rounded`)} />
      <input type="email" placeholder="Email" className={tw(`block w-full mt-2 p-2 border rounded`)} />
      <input type="password" placeholder="Password" className={tw(`block w-full mt-2 p-2 border rounded mb-2`)} />
      {/* New Repeat Password input field */}
      <input type="password" placeholder="Repeat Password" className={tw(`block w-full mt-2 p-2 border rounded mb-4`)} />
      <Button primary className={tw(`w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600`)}>
        Sign up
      </Button>
    </form>
  </div>
);


const Modal = ({ children, closeModal }: { children: React.ReactNode; closeModal: () => void }) => (
  <div className={tw(`fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50`)}>
    <div className={tw(`relative bg-white w-full max-w-sm p-6 rounded-lg shadow-xl`)}>
      <button
        onClick={closeModal}
        className={tw(
          `absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white 
          hover:bg-red-600 text-2xl font-bold focus:outline-none`
        )}
        aria-label="Close"
      >
        &times;
      </button>
      {children}
    </div>
  </div>
);





const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState<'login' | 'signup' | null>(null);

  const toggleMenu = () => setShowMenu(!showMenu);
  const openModal = (type: 'login' | 'signup') => {
    setFormType(type);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <nav className={tw(`bg-white`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <img className={tw(`h-12 w-12`)} src="mc.jpg" alt="logo" width={48} height={48} />
            </div>
            <div className={tw(`hidden md:block`)}>
              <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                {links.map((link: Link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={tw(`text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium`)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
           
              <Button primary onClick={() => openModal('signup')}>Log in</Button>
            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
      {isModalOpen && (
  <Modal closeModal={closeModal}>
    {formType === 'login' ? (
      <LoginForm openSignup={() => openModal('signup')} />
    ) : (
      <SignupForm />
    )}
  </Modal>
)}
    </nav>
  );
};

export default Navigation;
