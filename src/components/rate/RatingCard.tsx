import IconStar from "../rate/IconStar";
import RatingForm from "./RatingForm";
import RatingCardText from "./RatingCardText";
import { onMount, type Accessor, type Setter } from "solid-js";

function onKeydown(event: KeyboardEvent) {
  event.preventDefault();
  switch (event.key) {
    case "Enter":
    case "Return":
      document.getElementById("submit-button")?.click();
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
      document.getElementById(`rating-${event.key}`)?.click();
      break;
  }
}

export default function RatingCard({
  choice,
  setChoice,
  handleChoice,
}: {
  choice: Accessor<number>;
  setChoice: Setter<number>;
  handleChoice: () => void;
}) {
  onMount(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  return (
    <>
      <IconStar />
      <div class="flex flex-col gap-6">
        <RatingCardText />
        <RatingForm
          choice={choice}
          setChoice={setChoice}
          handleChoice={handleChoice}
        />
      </div>
    </>
  );
}
