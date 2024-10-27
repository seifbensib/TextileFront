import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Quality Control Specialists`,
    description: `Our dedicated quality control team meticulously inspects each batch of textiles to guarantee that they adhere to our high standards. By maintaining strict quality checks throughout the production process, we ensure that our clients receive only the best products.`,
  },
  {
    title: `Manufacturers`,
    description: `Our experienced manufacturers utilize state-of-the-art machinery and techniques to produce high-quality textiles. With a focus on efficiency and craftsmanship, they ensure every piece meets our rigorous quality standards, from fabric creation to final product.`,
  },
  {
    title: `Designers`,
    description: `Our skilled designers create innovative and stylish fabric patterns that meet the latest fashion trends. They work closely with clients to transform ideas into beautiful, market-ready collections, ensuring quality and aesthetic appeal.`,
    
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Grow your revenue</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Transform Your Textile Production
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4 ${index === 0 ? 'mb-8' : ''}`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`flex flex-col items-center lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <img
              src="/imageSections/txt.png" // Update this path to your first image
              alt="Descriptivetions alt text 1"
              className={tw(`w-3/4 h-auto rounded-lg mb-4`)} // Smaller width
            />
            <img
              src="/imageSections/manu.png" // Update this path to your second image
              alt="Descriptive alt text 2"
              className={tw(`w-3/4 h-auto rounded-lg mb-4`)} // Smaller width
            />
            <img
              src="/imageSections/designe.png" // Update this path to your third image
              alt="Descriptive alt text 3"
              className={tw(`w-3/4 h-auto rounded-lg`)} // Smaller width
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
