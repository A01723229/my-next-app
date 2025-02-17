import Link from "next/link";
import Square from "../components/Square";

export default function Grid() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="grid grid-cols-3">
        <Square color={"white"} />
        <Square color={"black"} />
        <Square color={"white"} />

        <Square color={"black"} />
        <Square color={"white"} />
        <Square color={"black"} />

        <Square color={"white"} />
        <Square color={"black"} />
        <Square color={"white"} />
      </div>
      <Link href="/" className="text-blue-500 hover:underline">
       Go to Home
      </Link>
    </div>
  );
}