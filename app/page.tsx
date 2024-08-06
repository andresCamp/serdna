import RivianNavBar from "@/components/RivianNavBar";
import RivianNavBarMyStory from "@/components/RivianNavBarMyStory";
import SamaraInput from "@/components/SamaraInput";
import Title from "@/components/Title";
import TruthyCheck from "@/components/TruthyCheck";
import HelpfulTipsComponent from "@/components/mystory-mvp/HelpfulTipsComponent";
import { Progress } from "@/components/ui/progress";



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col gap-3 items-center justify-center p-24">
      <Title>Andrés Campos</Title>
      <p>Web developer using Next.js, TailwindCSS, and TypeScript</p>

      {/* <RivianNavBarMyStory /> */}

      {/* <SamaraInput /> */}


      {/* <TruthyCheck/> */}
      {/* <Progress value={70} className="bg-red-500"/> */}
    </main>
  );
}





{/* <HelpfulTipsComponent/> */}
