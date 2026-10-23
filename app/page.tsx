import ScheduleCard from '@/components/ScheduleCard';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white">
      {/* 1. HERO SECTION WITH BACKGROUND & OVERLAY */}
      <section className="relative min-h-130 md:min-h-155 flex flex-col items-center justify-center text-center px-4 pt-32 pb-16 overflow-hidden">
        {/* Background Skyline Image */}
        <Image
          src="/heroimage.PNG"
          alt="Reno Skyline and Sierra Nevada Mountains"
          fill
          priority
          className="object-cover object-center z-10"
        />

        {/* Contrast Tint Overlay */}
        <div className="absolute inset-0 bg-black/45 z-10" />

        {/* Hero Title & Subtitle */}
        <div className="relative z-20 flex flex-col items-center">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white drop-shadow-xl uppercase mb-2">
            SOULS HARBOR
          </h1>
          <p className="font-sans text-md sm:text-lg md:text-xl font-light tracking-[0.2em] text-white/95 drop-shadow-md uppercase">
            Apostolic Church
          </p>
          <Image
            src="/whiteanchor.png"
            alt="Souls Harbor Anchor"
            width={110}
            height={50}
            priority
            className="w-20 h-auto md:w-28 drop-shadow-2xl object-contain"
          />
        </div>
      </section>

      {/* 2. SCHEDULE SECTION */}
      <section className="flex flex-col items-center justify-center pt-16">
        <h1 className="font-serif text-4xl text-sh-navy font-bold mb-2 uppercase tracking-wide">
          JOIN US THIS WEEK
        </h1>
        <p className="font-sans text-lg text-sh-gray mb-12">
          450 E. QUEEN WAY, SPARKS, NV
        </p>
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto w-full px-4 pb-24">
          <ScheduleCard
            title="Sundays"
            prayerTime="Prayer at 9:30 AM & 5:30 PM"
            serviceTime="Service at 10:00 AM & 6:00 PM"
          />
          <ScheduleCard
            title="Midweek"
            prayerTime="Tuesday Prayer 7:00 PM"
            serviceTime="Wednesday Service 7:30 pm"
          />
          <ScheduleCard
            title="First Sunday"
            prayerTime="Prayer at 12:30 PM, Service 1:00 PM"
            serviceTime="Join us for food, fun & fellowship!"
            isHighlighted
          />
        </div>
      </section>
    </main>
  );
}
