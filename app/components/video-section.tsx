export function VideoSection() {
  return (
    <section id="video" className="w-full bg-gray-900/50 py-12 sm:py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl font-bold text-primary">Apresentação</h2>
        <div className="mx-auto max-w-xl overflow-hidden rounded-lg shadow-2xl">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/f9z_Ip7o72U"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 h-full w-full"
              title="Apresentação de Livyson Saymon"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

