import FakeError from "@/components/FakeError";
import QRGeneratorCard from "@/components/QRGeneratorCard";

export default function Home() {
  return (
    <div className="py-4 px-4 md:px-8 ">
      {/* <FakeError condition={true} skipBuild={true} /> */}
      <QRGeneratorCard />
    </div>
  );
}
