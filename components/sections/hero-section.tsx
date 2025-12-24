import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-16 md:pt-24 overflow-hidden min-h-screen w-full flex items-center justify-center bg-slate-50">
      <div className="w-full md:w-4/5 mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-10 sm:py-4 animate-in fade-in slide-in-from-left duration-1000 ease-out">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Gilang Pambudi Wibawanto
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-600 font-medium mb-8">
              Junior Web Developer
            </h2>
          </div>
          <div className="w-full md:w-1/2 relative mb-8 md:mb-0 animate-in fade-in slide-in-from-right duration-1000 ease-out">
            <Image
              src="/profil.jpeg"
              alt="profil"
              width={150}
              height={150}
              className="mx-auto rounded-full shadow-lg object-cover md:w-[300px] md:h-[300px] w-[240px] h-[240px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
