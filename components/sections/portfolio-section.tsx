import Image from "next/image"
import portfolioItems from "@/lib/portfolio" // Pastikan path ini sesuai dengan struktur project Anda

export default function PortfolioSection() {
    return (
        <section
            id="portfolio"
            className="relative pt-16 md:pt-24 overflow-hidden min-h-screen w-full flex items-center justify-center bg-slate-50 pb-8 md:pb-8"
        >
            <div className="w-full md:w-4/5 mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Portfolio</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {portfolioItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden transform hover:-translate-y-2 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-blue-400"
                            style={{ transitionProperty: 'box-shadow, transform, filter' }}
                        >
                            <div className="relative w-full h-48">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 transition-colors duration-300 group-hover:text-blue-700">{item.title}</h3>
                                <p className="text-gray-600 mb-4 flex-1">{item.description}</p>
                                <span className="text-blue-600 font-medium mt-auto transition-colors duration-300 group-hover:text-blue-800">Visit Project &rarr;</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}