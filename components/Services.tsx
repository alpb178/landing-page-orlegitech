import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
  showStars?: boolean;
  showMapOverlay?: boolean;
}

export default function Services() {
  const services: Service[] = [
    {
      title: "APP",
      description: "Aplicación móvil",
      image: "/images/services/app.png",
      showStars: true,
    },
    {
      title: "Drone",
      description: "Servicios de drone",
      image: "/images/services/drone.png",
      showStars: true,
    },
    {
      title: "Buggy",
      description: "Alquiler de buggies",
      image: "/images/services/buggy.png",
      showStars: true,
      showMapOverlay: true,
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F5F5F0]">
      <div className="container mx-auto px-5">
        <h2 className="text-7xl font-bold text-center text-gray-800 mb-[200px]">
          Servicios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="relative mb-10">
              {/* Title and stars positioned outside and above the card */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                <div className="flex flex-col items-center bg-white w-[200px] justify-center rounded-full shadow-sm gap-2">
                  <span
                    className="text-[#1a4d3a] text-6xl font-bold absolute -top-12 right-8"
                    style={{
                      fontFamily: "var(--font-dancing-script)",
                    }}
                  >
                    {service.title}
                  </span>
                  {service.showStars && (
                    <div className="flex gap-1 px-2 py-1 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">
                          ★
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* Image Card */}
              <div className="relative w-full  md:h-[496px] h-[300px] rounded-2xl shadow-lg overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.description}
                  width={352}
                  height={496}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
