import Canvas from "@/components/app/Home";
import Navbar from "@/components/app/Navbar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  console.log(session?.user);
  return (
    <div className="text-center">
      <div className="mb-4 shadow-lg shadow-gray-800">
        <Navbar user={session?.user} />
      </div>
      <Canvas />
    </div>
  );
}
