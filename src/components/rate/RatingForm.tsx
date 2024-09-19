import { For, type Accessor, type Setter } from "solid-js";

export default function RatingForm({
  choice,
  setChoice,
  handleChoice,
}: {
  choice: Accessor<number>;
  setChoice: Setter<number>;
  handleChoice: () => void;
}) {
  return (
    <>
      <div class="flex flex-row items-center justify-between">
        <For each={[1, 2, 3, 4, 5]}>
          {(item) => (
            <label class="bg-dark-blue has-[:checked]:text-dark-blue hover:bg-orange hover:text-dark-blue flex size-9 cursor-pointer items-center justify-center rounded-full has-[:checked]:bg-white sm:size-12">
              <input
                type="radio"
                name="rating"
                value={item}
                class="m-0 size-0 appearance-none bg-transparent checked:opacity-0"
                onInput={() => setChoice(item)}
                id={`rating-${item}`}
                aria-keyshortcuts={item.toString()}
              />
              {item}
            </label>
          )}
        </For>
      </div>

      <button
        disabled={choice() < 1 || choice() > 5}
        class="bg-orange disabled:hover:bg-orange text-dark-blue w-full rounded-full p-3 text-sm font-bold uppercase tracking-[0.125rem] hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
        onClick={handleChoice}
        aria-keyshortcuts="Enter"
        id="submit-button"
      >
        Submit
      </button>
    </>
  );
}
