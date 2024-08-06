import logo from "@/public/mystoryIcon.svg"
// import { ReactComponent as LogoSvg } from "@/public/mystoryIcon.svg"
import Image from "next/image";


export default function RivianNavBar() {
    const menuItems = ["R1T", "R1S", "R2", "R3"];
  
    return (
    //   <nav className="flex justify-between items-center p-4 bg-none hover:bg-white text-white hover:text-black">
    <nav className="flex justify-between w-full items-center p-4 bg-none hover:bg-white text-white hover:text-black transition-all duration-300 rounded-xl">
        <ul className="flex w-full justify-between">

            <div className="flex flex-row w-1/3 justify-start items-center">
                MyStory
            </div>

          <div className="text-3xl font-bold text-black flex items-center justify-center tracking-wide w-1/3">
                  <Image
                    src={logo}
                    alt=""
                    height={32}
                    width={32}
                    className="object-contain filter brightness-0"
                  />
          </div>

          <div className="w-1/3 flex flex-row items-center justify-end">
            <li className="hover:bg-blue-400 hover:text-white px-3 py-2 rounded cursor-pointer ">
                Begin
            </li>
          </div>

        </ul>
      </nav>
    );
  }









// function RivianNavBar() {
//     const menuItems = ["R1T", "R1S", "R2", "R3"];
  
//     return (
//       <nav className="flex justify-between items-center p-4 bg-white text-black">
//         <div className="text-2xl font-bold">RIVIAN</div>
//         <ul className="flex space-x-6">
//           {menuItems.map(item => (
//             <li key={item} className="hover:bg-blue-600 hover:text-white px-3 py-2 rounded cursor-pointer transition">
//               {item}
//             </li>
//           ))}
//           <li className="hover:bg-blue-600 hover:text-white px-3 py-2 rounded cursor-pointer transition">
//             Demo Drive
//           </li>
//           <li className="hover:bg-blue-600 hover:text-white px-3 py-2 rounded cursor-pointer transition">
//             Sign In
//           </li>
//         </ul>
//       </nav>
//     );
//   }

//   export default RivianNavBar