import IllustrationThanks from "./IllustrationThanks";

export default function ThankYouCard({ rating }: { rating: number }) {
  return (
    <>
      <IllustrationThanks />
      <span class="bg-dark-blue text-orange grid h-8 place-content-center rounded-full px-3 py-1 text-sm sm:px-5 sm:text-base">
        You selected {rating} out of 5
      </span>
      <div class="flex flex-col gap-2">
        <h1 class="text-center text-2xl font-bold sm:text-[1.75rem]">
          Thank you!
        </h1>
        <p class="text-light-gray text-center text-sm leading-6 sm:text-base">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </>
  );
}
