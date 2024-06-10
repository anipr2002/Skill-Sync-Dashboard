import { Button } from "@/components/ui/button";
import Heading from "./_components/heading";
import Footer from "./_components/footer";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

export default function LandingPage() {
  return (
    <div className="h-fit flex flex-col">
      <div
        className="flex flex-col items-center justify-center
                  md:justify-start text-center gap-y-8 flex-1 px-6 py-10"
      >
        <Heading />
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />
      </div>

      <Footer />
    </div>
  );
}
