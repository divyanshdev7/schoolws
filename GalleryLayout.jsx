const GalleryLayout = ({ title, subtitle, description, sectionTitle, children }) => {
  return (
    <>
      <section>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2 space-y-2 mt-14">
          <div className="max-w-6xl text-center px-4 mx-auto">
            <h1 className="text-8xl md:text-9xl font-medium tracking-tighter">
              {title}
            </h1>
          </div>
          <div className="max-w-6xl lg:py-2 mx-auto">
            <article className="mt-7 space-y-6 text-gray-600 text-xl">
              <div className="max-w-7xl px-4 mt-16 sm:px-6 lg:px-8 mx-auto">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-3 text-center">
                    <h2 className="text-3xl font-bold">{subtitle}</h2>
                    <p className="text-lg sm:text-xl text-gray-800">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <h1 className="text-2xl text-center font-semibold">
          <span className="bg-gray-900 text-yellow-300 rounded-3xl p-2 px-10">
            {sectionTitle}
          </span>
        </h1>
        {children}
        
        <div className="flex justify-center items-center py-8">
          <a className="inline-flex items-center gap-x-1 text-lg text-blue-700 hover:underline" href="#">
            Explore more
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
      <hr />
    </>
  );
};

export default GalleryLayout;