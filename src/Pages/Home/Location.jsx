export default function Location() {
  const highlights = [
    {
      number: "01",
      description: "Shaheed Path - 2 mins.",
    },
    {
      number: "02",
      description: "Ekana Stadium- 2 mins.",
    },
    {
      number: "03",
      description: "Sultanpur-Lucknow Highway - 5 mins.",
    },
    {
      number: "04",
      description: "Lucknow Airport- 20 mins.",
    },
    {
      number: "05",
      description: "Ayodhya-Lucknow Highway - 10 mins.",
    },
    {
      number: "06",
      description: "UP Police Head Office - 2 mins",
    },
  ];

  return (
    <section id="location" className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-white  ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 items-center">
          <div className="xl:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-2xl sm:text-4xl font-bold text-primary mb-8 leading-tight">
                Our Location
              </h2>

              <div className="space-y-2 sm:space-y-2">
                {highlights.map((highlight) => (
                  <div key={highlight.number} className="flex gap-4 group">
                    <div className="flex flex-col items-center cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <span className="text-primary font-bold text-md sm:text-lg p-2">{highlight.number}</span>
                      </div>
                      {highlight.number !== "06" && (
                        <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                      )}
                    </div>
                    <div className="md:mt-2">
                      <p className="text-gray-800 cursor-pointer font-medium text-sm sm:text-md leading-relaxed">
                        {highlight.description}.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="xl:w-1/2 w-full lg:mt-14 bg-gray-100 rounded-2xl">
            <div className="relative aspect-video w-full h-[420px] rounded-2xl  overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227822.60371562676!2d80.77770084731566!3d26.84859648393558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1753186928231!5m2!1sen!2sin" 
             width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0">

              </iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-6 rounded-lg max-w-md border border-white">
                  <h3 className="text-md sm:text-xl font-bold text-gray-800">
                    Prime Location
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-md mt-2">
                    Set amidst the vibrant and fully developed Eldeco City Township
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}