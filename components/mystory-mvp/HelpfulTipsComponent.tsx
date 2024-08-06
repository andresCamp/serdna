import Image from "next/image";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
// import { HomeIcon } from "@heroicons/react/16/solid";


export default function HelpfulTipsComponent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <HelpfulTips/>
      <Dialog>
        <DialogTrigger>Helpful Tips</DialogTrigger>
        <DialogContent className="flex items-center justify-center max-w-none w-10/12 p-24 bg-green-50">
          <div className="relative flex justify-center w-full">
            <HelpfulTips/>
            {/* Positioned Close Button inside the wrapper */}
            <div className="absolute bottom-[-30%] right-[45%] bg-[#D2D2AC] p-3">
            {/* Close button with transformation applied */}
            <DialogClose asChild className="">
              <button className="bg-[#D2D2AC] rounded-xl text-xl flex p-3">
                Close
              </button>
            </DialogClose>
          </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}


const HelpfulTips = () => {

  return(
    <div className="flex">
      <div className="grid grid-cols-3 gap-5">
        {tips.map((tip, index) => (
          <HelpfulTipsItem key={index} {...tip as any} />
          ))}
      </div>
    </div>
        )    
}

interface HelpfulTipsItemProps {
  icon: IconName;
  title: string;
  body: string;
  
}

import { HomeIcon, PhoneIcon, VideoCameraIcon, BoltIcon, FunnelIcon, SunIcon, RssIcon, BeakerIcon } from '@heroicons/react/16/solid';

type IconName = 'home' | 'wifi' | 'battery' | 'phone' | 'coffee' | 'camera' | 'happy';

// Map your string identifiers to actual icon components
const iconComponents = {
  home: HomeIcon,
  wifi: RssIcon,
  battery: BoltIcon,
  phone: PhoneIcon,
  coffee: BeakerIcon,
  camera: VideoCameraIcon,
  happy: SunIcon,
};

const HelpfulTipsItem: React.FC<HelpfulTipsItemProps> = ({icon, title, body}) => {
  const IconComponent = icon ? iconComponents[icon] : null;

  return(
    <div className="flex flex-row bg-[#D2D2AC] w-80 p-3 gap-3 items-start rounded-xl">
      <div className="h-full">
        {IconComponent && <IconComponent width={25} height={25}/>}
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-xl">
          {title}
        </h3>
        <p className="text-sm">
          {body}
        </p>
      </div>
    </div>
  )
}


const tips = [
  {icon: "home", title: "Find a quiet location", body: "Select a tranquil and undisturbed setting to ensure your life story is captured without any background noise or interruptions."},
  {icon: "wifi", title: "Check Wi-Fi Stability", body: "Confirm that your Wi-Fi connection is strong and reliable to avoid any disruptions during your video recording."},
  {icon: "battery", title: "Connect to Power", body: "Keep your computer plugged in and charging to prevent any power issues throughout the duration of your interview."},
  {icon: "phone", title: "Silence Your Phone", body: "Turn off or mute your phone to eliminate any unexpected calls or notifications that could interrupt your session."},
  {icon: "coffee", title: "Prepare a Beverage", body: "Consider having a cup of coffee or your preferred drink at hand to help create a relaxed and comfortable atmosphere."},
  {icon: "camera", title: "Lights and Camera", body: "Position your computer's camera at eye level and ensure your space is well-lit, so you are clearly visible."},
  {icon: "happy", title: "Relax & Be Yourself", body: "Remember to stay calm and be authentic; your life story is unique and worth sharing just as you are."},
]