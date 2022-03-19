import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import hero from "../components/hero";
export default function Home() {
  return (
    <div>
      <div>
        <h1 className="ml-56   text-lg">
          Design inpiration and modern home ideas
        </h1>
      </div>
      <div className="ml-56 mt-5">
        <button className="bg-gray-200 m-2 text-black px-4 py-2 rounded-full  font-sm hover:bg-gray-300 transition duration-300">
          ALL
        </button>
        <button className="bg-gray-200 m-2 text-black px-4 py-2 rounded-full  font-sm hover:bg-gray-300 transition duration-300">
          Bedroom
        </button>
        <button className="bg-gray-200 m-2 text-black px-4 py-2 rounded-full  font-sm hover:bg-gray-300 transition duration-300">
          living room
        </button>
        <button className="bg-gray-200 m-2 text-black px-4 py-2 rounded-full  font-sm hover:bg-gray-300 transition duration-300">
          kitchen
        </button>
        <button className="bg-gray-200 m-2 text-black px-4 py-2 rounded-full  font-sm hover:bg-gray-300 transition duration-300">
          workspace
        </button>
        <button className="bg-gray-200 m-2 text-black px-4 py-2 rounded-full  font-sm hover:bg-gray-300 transition duration-300">
          outdoor
        </button>
        <button className="bg-gray-200 m-2 text-black px-4 py-2 rounded-full  font-sm hover:bg-gray-300 transition duration-300">
          bathroom
        </button>
        <button className="bg-gray-200 m-2 text-black px-4 py-2 rounded-full  font-sm hover:bg-gray-300 transition duration-300">
          kids room
        </button>
        <button className="bg-gray-200 m-2 text-black px-4 py-2 rounded-full  font-sm hover:bg-gray-300 transition duration-300">
          Dining room
        </button>
        <button className="bg-gray-200 m-2 text-black px-4 py-2 rounded-full  font-sm hover:bg-gray-300 transition duration-300">
          Halway
        </button>
        <button className="bg-gray-200 m-2 text-black px-4 py-2 rounded-full  font-sm hover:bg-gray-300 transition duration-300">
          Bundles
        </button>
      </div>
      <div>
        <div className="bg-white">
          <div className="max-w-2xl mx-60  sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              <a href="#" className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
              </a>

              <a href="#" className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
                    alt="Olive drab green insulated bottle with flared screw lid and flat top."
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
              </a>

              <a href="#" className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                    alt="Person using a pen to cross a task off a productivity paper card."
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
              </a>

              <a href="#" className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                    alt="Person using a pen to cross a task off a productivity paper card."
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
              </a>

              <a href="#" className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                    alt="Person using a pen to cross a task off a productivity paper card."
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
              </a>

              <a href="#" className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
              </a>
              <a href="#" className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
                    alt="Person using a pen to cross a task off a productivity paper card."
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
              </a>

              <a href="#" className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2>

              <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                <div className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                      alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Desk and Office
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Work from home accessories
                  </p>
                </div>

                <div className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
                      alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Self-Improvement
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Journals and note-taking
                  </p>
                </div>

                <div className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
                      alt="Collection of four insulated travel bottles on wooden shelf."
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Travel
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Daily commute essentials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="relative bg-white overflow-hidden">
  <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
      <div className="sm:max-w-lg">
        <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
        <p className="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
      </div>
      <div>
        <div className="mt-10">
          
          <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" className="w-full h-full object-center object-cover"/>
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" className="w-full h-full object-center object-cover"/>
                  </div>
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" className="w-full h-full object-center object-cover"/>
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" className="w-full h-full object-center object-cover"/>
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" className="w-full h-full object-center object-cover"/>
                  </div>
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" className="w-full h-full object-center object-cover"/>
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" className="w-full h-full object-center object-cover"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">Shop Collection</a>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}
