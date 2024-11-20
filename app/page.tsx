import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl p-4">Hello World!</h1>
      <p className="m-4">
        Welcome to the CS Hub! This is a collection of resources for computer
        science students.
      </p>

      <Button>Click me</Button>
    </main>
  );
}
