import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-100 relative overflow-hidden min-h-screen w-full flex items-center justify-center">
      <div className="w-full md:w-4/5 mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/fotoku.jpg"
                alt="foto profil"
                width={150}
                height={150}
                className="mx-auto rounded-full shadow-lg object-cover md:w-[300px] md:h-[300px] w-[240px] h-[240px]"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-gray-600 mb-4">
              Hello, I'm Gilang Pambudi Wibawanto, a junior web developer with experience in HTML, CSS, JavaScript, React, and Laravel. I'm always eager to learn new technologies. Feel free to reach out to me if you have any questions or if you'd like to collaborate on a project.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
