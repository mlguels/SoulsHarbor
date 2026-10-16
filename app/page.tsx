import ScheduleCard from '@/components/ScheduleCard';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white">
      <section className="pt-32 pb-16 flex flex-col items-center justify-center text-center bg-white">
        <Image
          src="/Souls-Harbor-logo.jpg"
          width={800}
          height={500}
          alt="Souls Harbor Logo"
          loading="eager"
          className="w-100 md:w-150 h-auto mb-8"
        />
      </section>

      <section className="flex flex-col items-center justify-center">
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
