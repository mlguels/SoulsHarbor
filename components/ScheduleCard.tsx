interface ScheduleCardProps {
  title: string;
  prayerTime: string;
  serviceTime: string;
  isHighlighted?: boolean; // The "?" makes it optional
}

const ScheduleCard = ({
  title,
  prayerTime,
  serviceTime,
  isHighlighted = false,
}: ScheduleCardProps) => {
  // If highlighted is true, use navy/gold. Otherwise, use light/navy.
  const baseClasses = 'p-8 rounded-2xl shadow-md flex-1 text-center';
  const colorClasses = isHighlighted
    ? 'bg-sh-navy border-4 border-sh-gold text-white'
    : 'bg-sky-100/25 text-sh-navy';

  return (
    <div className={`${baseClasses} ${colorClasses}`}>
      <h3
        className={`font-serif text-2xl font-bold mb-4 uppercase tracking-wide ${isHighlighted ? 'text-sh-gold' : 'text-sh-navy'}`}
      >
        {title}
      </h3>
      <p className="mb-2 font-sans text-base">{prayerTime}</p>
      <p className="font-sans text-base">{serviceTime}</p>
    </div>
  );
};

export default ScheduleCard;
