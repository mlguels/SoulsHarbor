import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className="min-h-dvh flex flex-col items-center justify-center text-center px-1 bg-white">
        <Image
          src="/Souls-Harbor-logo.jpg"
          width={2272}
          height={1029}
          alt="Souls Harbor Logo"
          loading="eager"
          className="w-100 md:w-180 h-auto mb-8"
        />
      </section>

      <section>
        <div>Join us this week</div>
        <div>Address</div>
        <div>
          <div>Schedule card 1</div>
          <div>Schedule card 1</div>
          <div>Schedule card 1</div>
        </div>
      </section>
    </main>
  );
}
