import { Terminal } from "@lucasmarkes/hairline/react";

export default function Page() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full max-w-[530px]">
        <Terminal play={true} intensity={0.7} />
      </div>
    </div>
  );
}
