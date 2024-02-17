import React from 'react';
import { useCountdown } from './useCountdown';

export default function CountdownTimer({ targetDate }: { targetDate: number }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
}

const ExpiredNotice = () => {
  return <div className="text-[100px] text-JA-creme-50">ESTAMOS CASADOS</div>;
};

const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return (
    <>
      <p className="text-[100px] text-JA-creme-50">{days}</p>
      <p className="text-[24px] italic text-JA-creme-50">
        {days === 1 ? 'día' : 'días'}
      </p>
      <p className="text-[100px] text-JA-creme-50">{hours}</p>
      <p className="text-[24px] italic text-JA-creme-50">
        {hours === 1 ? 'hora' : 'horas'}
      </p>
      <p className="text-[100px] text-JA-creme-50">{minutes}</p>
      <p className="text-[24px] italic text-JA-creme-50">
        {minutes === 1 ? 'minuto' : 'minutos'}
      </p>
      <p className="text-[100px] text-JA-creme-50">{seconds}</p>
      <p className="text-[24px] italic text-JA-creme-50">
        {seconds === 1 ? 'segundo' : 'segundos'}
      </p>
    </>
  );
};
