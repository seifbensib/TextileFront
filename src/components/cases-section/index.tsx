import { tw } from 'twind';
import Particles from 'react-particles-js';
import Arrow from '@/constants/svg/arrow.svg';

const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

const jobOffers = [
  {
    title: `Textile Engineer`,
    description: `We are looking for a skilled Textile Engineer to join our team. The ideal candidate will have experience in textile manufacturing and a strong understanding of textile machinery.`,
    image: `https://www.lemoci.com/wp-content/uploads/2014/09/Textile-Afrique%C2%A9-michaeljung.jpg`,
    alt: `Textile Engineer`,
  },
  {
    title: `Quality Control Specialist`,
    description: `Join our team as a Quality Control Specialist. You will be responsible for ensuring that all products meet our high standards of quality before they reach our customers.`,
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNaUescG9FvWaHgFLTnuFX9BCKTSLFSp9fDg&s`,
    alt: `Quality Control Specialist`,
  },
  {
    title: `Production Manager`,
    description: `We are seeking an experienced Production Manager to oversee our textile manufacturing operations. The ideal candidate will have a proven track record in managing production teams and improving efficiency.`,
    image: `https://media.graphassets.com/fDKjTNZwR9aoonWQllNj`,
    alt: `Production Manager`,
  },
  {
    title: `Textile Designer`,
    description: `We are looking for a creative Textile Designer to develop new fabric designs and patterns. The ideal candidate will have a strong portfolio and experience in textile design.`,
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3EZHlbpIpJFC3julVHvJbZTKuJDo6Dc8zOg&s`,
    alt: `Textile Designer`,
  },
  {
    title: `Maintenance Technician`,
    description: `Join our team as a Maintenance Technician. You will be responsible for maintaining and repairing textile machinery to ensure smooth production operations.`,
    image: `https://www.advancedtech.com/wp-content/uploads/2023/05/Two-technicians-robotic-arm_1200x628.jpg`,
    alt: `Maintenance Technician`,
  },
  {
    title: `Logistics Coordinator`,
    description: `We are seeking a Logistics Coordinator to manage the transportation and distribution of our textile products. The ideal candidate will have experience in logistics and supply chain management.`,
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2pNrKUqEfx-VxicbfRkMv5zkBDsyrhFB6QQ&s`,
    alt: `Logistics Coordinator`,
  },
];

const JobOffersSection = () => (
  <section>
    <div className={tw(`w-full min-h-screen bg-gray-900 relative`)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>Join Our Team</h1>
        <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
          Explore our current job openings and become a part of our innovative textile factory.
        </p>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {jobOffers.map((offer) => (
              <div
                key={offer.title}
                className={tw(
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                )}
              >
                <div className={tw(`h-64 z-20`)}>
                  <img
                    src={offer.image}
                    alt={offer.alt}
                    className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                    width={400}
                    height={300}
                  />
                </div>
                <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                  <p className={tw(`uppercase text-sm text-gray-700 text-center pb-1`)}>Job Offer</p>
                  <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{offer.title}</p>
                  <p className={tw(`text-gray-400 text-center pb-1 text-sm`)}>{offer.description}</p>
                </div>
              </div>
            ))}
            <span
              className={tw(
                `-mt-8 pb-12 lg:mt-4 flex items-center text-xl
                text-indigo-400 cursor-pointer z-30 hover:text-indigo-600`,
              )}
            >
              See all job offers
              <Arrow className={tw(`h-6 w-6 fill-current ml-2`)} />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default JobOffersSection;
