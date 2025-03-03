import Link from "next/link";
import Rectangle from "./components/Rectangle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Rectangle color={"green"} />
      <Link href="/Page2" className="text-blue-500 hover:underline">
       Go to Page 2
      </Link>
      <Link href="/Grid" className="text-blue-500 hover:underline">
       Go to 3x3 Grid
      </Link>
    </div>
  );
}
