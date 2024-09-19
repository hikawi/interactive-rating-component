import { createSignal } from "solid-js";
import RatingCard from "./rate/RatingCard";
import ThankYouCard from "./thanks/ThankYouCard";

export default function RatingApp() {
  const [choice, setChoice] = createSignal(0);
  const [submitted, setSubmitted] = createSignal(false);

  return (
    <main
      class="font-overpass flex max-h-[26rem] max-w-[26rem] flex-col justify-center gap-6 rounded-2xl p-6 text-white hover:shadow-2xl hover:shadow-white hover:duration-200 sm:gap-8 sm:rounded-[1.875rem] sm:p-8"
      style="background: var(--black-gradient, radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%));"
    >
      {submitted() ? (
        <ThankYouCard rating={choice()} />
      ) : (
        <RatingCard
          choice={choice}
          setChoice={setChoice}
          handleChoice={() => setSubmitted(true)}
        />
      )}
    </main>
  );
}
