import Image from 'next/image';

export default function LivestreamPage() {
  return (
    <main className="min-h-[85vh] bg-white flex flex-col items-center justify-center px-4 pt-32 pb-16">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Text prompt with direct YouTube link */}
        <a
          href="https://www.youtube.com/@soulsharborchurchsparks"
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif text-sm md:text-base text-sh-navy underline hover:text-sh-gold transition-colors duration-200 mb-12"
        >
          Please click here or the image below to go to our Youtube channel
        </a>

        {/* Large centered clickable brand logo */}
        <a
          href="https://www.youtube.com/@soulsharborchurchsparks"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Souls Harbor Apostolic Church YouTube Channel"
          className="group block transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image
            src="/Souls-Harbor-logo.jpg"
            alt="Souls Harbor Apostolic Church"
            width={800}
            height={362}
            priority
            className="w-[320px] sm:w-120 md:w-155 h-auto object-contain"
          />
        </a>
      </div>
    </main>
  );
}
