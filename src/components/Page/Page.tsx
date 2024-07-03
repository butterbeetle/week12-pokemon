import { PropsWithChildren } from "react";

function Page({ children }: PropsWithChildren) {
  return (
    <main className="relative overflow-x-hidden container mx-auto max-w-[1024px] px-4 py-20  select-none">
      {children}
    </main>
  );
}

export default Page;
