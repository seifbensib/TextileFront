import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

const JoinUs = () => (
  <section className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)} >
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1 lg:w-1/2`)} >
          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}>Submit for a Job</h2>
          <div className={tw(`mt-8`)}>
            <div className={tw(`flex items-center`)}>
              <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
            </div>
          </div>
        </div>

        {/* New Form Section on the Right */}
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-0 lg:w-1/2 lg:p-12`)}>
          <h3 className={tw(`text-2xl font-semibold text-gray-800 mb-6 text-center`)}>Join Our Team</h3>
          <form className={tw(`space-y-4`)} >
            <div className={tw(`flex flex-col space-y-2`)}>
              <input type="text" placeholder="First Name" className={tw(`block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm`)} />
              <input type="text" placeholder="Last Name" className={tw(`block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm`)} />
              <input type="email" placeholder="Email" className={tw(`block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm`)} />
              <input type="date" className={tw(`block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm`)} />
              {/* Add any additional fields here */}
              <textarea placeholder="Your Message" className={tw(`block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm`)} rows={4} />
              <Button primary modifier="mt-4" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default JoinUs;
