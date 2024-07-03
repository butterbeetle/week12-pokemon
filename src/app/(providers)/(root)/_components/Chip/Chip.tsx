import { VariantProps, cva } from "class-variance-authority";

const chipVariants = cva(
  "text-base flex-1 text-center border rounded-full px-2.5 py-0.5 text-white",
  {
    variants: {
      type: {
        normal: "bg-[#949495]",
        fire: "bg-[#e56c3e]",
        water: "bg-[#5185c5]",
        grass: "bg-[#66a945]",
        electric: "bg-[#fbb917]",
        ice: "bg-[#6dc8eb]",
        fighting: "bg-[#e09c40]",
        poison: "bg-[#735198]",
        ground: "bg-[#9c7743]",
        flying: "bg-[#a2c3e7]",
        psychic: "bg-[#dd6b7b]",
        bug: "bg-[#9fa244]",
        rock: "bg-[#bfb889]",
        ghost: "bg-[#684870]",
        dragon: "bg-[#535ca8]",
        dark: "bg-[#4c4948]",
        steel: "bg-[#69a9c7]",
        fairy: "bg-[#dab4d4]",
      },
    },
    defaultVariants: {
      type: "normal",
    },
  }
);

type ChipVariantsType = VariantProps<typeof chipVariants>;

function Chip({ type }: ChipVariantsType) {
  return <div className={chipVariants({ type })}>{type}</div>;
}

export default Chip;
