import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="bg-background text-foreground relative flex flex-1 flex-col items-center justify-center font-sans">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between px-16 py-32 sm:items-start">
        <h1 className="w-full text-center text-2xl font-bold">
          Hello, YenTech!
        </h1>
      </main>
    </div>
  );
}
