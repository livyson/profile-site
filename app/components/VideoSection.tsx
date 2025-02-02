export default function VideoSection() {
  return (
    <section id="video" className="py-20 px-4 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Video Presentation</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

