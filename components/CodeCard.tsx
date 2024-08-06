import React, { useState, MouseEventHandler, ReactNode } from "react";
// import { SiGithub } from "react-icons/si";
// import { FiStar } from "react-icons/fi";
// import { Highlight, Prism } from "prism-react-renderer";
// import { Highlight } from "prism-react-renderer";

const CodeCard: React.FC = () => {
  const [selected, setSelected] = useState<"js" | "py">("js");

  return (
    <Card className="mx-auto max-w-3xl pt-3">
      <div className="-mx-6 mb-6 flex items-center justify-between border-b border-slate-700 px-6 pb-3">
        {/* <div className="flex items-center gap-3">
          <ToggleChip
            onClick={() => setSelected("js")}
            selected={selected === "js"}
          >
            JavaScript
          </ToggleChip>
          <ToggleChip
            onClick={() => setSelected("py")}
            selected={selected === "py"}
          >
            Python
          </ToggleChip>
        </div> */}
        {/* <button
          className={`
            relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-md 
            bg-gradient-to-br from-slate-800 to-slate-950 px-3 py-1.5
           text-xs font-medium text-slate-50
           transition-all duration-300
            
            before:absolute before:inset-0
            before:-z-10 before:translate-y-[200%]
            before:scale-[2.5]
            before:rounded-[100%] before:bg-slate-100
            before:transition-transform before:duration-500
            before:content-[""]
    
            hover:scale-105 hover:text-slate-900
            hover:before:translate-y-[0%]
            active:scale-100`}
        >
          <SiGithub />
          <FiStar className="hidden sm:inline" />
          <span className="hidden sm:inline">1,234</span>
        </button> */}
      </div>
      <div className="-mx-6 overflow-x-auto px-6">
        {/* <Markup code={selected === "js" ? javascriptCode : pythonCode} /> */}
      </div>
      <span className="absolute left-0 top-1/2 h-48 w-[1px] -translate-y-1/2 animate-pulse bg-gradient-to-b from-indigo-500/0 via-indigo-800 to-indigo-500/0" />
    </Card>
  );
};

interface ToggleChipProps {
  children: string;
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const ToggleChip: React.FC<ToggleChipProps> = ({
  children,
  selected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded px-1.5 py-0.5 text-sm font-medium transition-colors ${selected ? "bg-indigo-600 text-slate-50" : "bg-slate-900 text-slate-50 hover:bg-slate-700"}`}
    >
      {children}
    </button>
  );
};

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-950/50 to-slate-900/80 p-6 ${className ?? ''}`}
    >
      {children}
    </div>
  );
};

interface MarkupProps {
  code: string;
}

// const Markup: React.FC<MarkupProps> = ({ code }) => {
//   return (
//     <Highlight theme={theme} code={code} language="javascript">
//       {({ style, tokens, getLineProps, getTokenProps }) => (
//         <pre style={style}>
//           {tokens.map((line, i) => (
//             <div key={i} {...getLineProps({ line })}>
//               <span className="inline-block w-[40px] select-none text-slate-400 xl:text-black 2xl:text-black ">
//                 {i + 1}
//               </span>
//               {line.map((token, key) => (
//                 <span key={key} {...getTokenProps({ token })} />
//               ))}
//             </div>
//           ))}
//         </pre>
//       )}
//     </Highlight>
//   );
// };

const theme = {
  // Theme object (as in the original code)
};

const javascriptCode = `import { initializeSDK } from "your-package";
  
const app = initializeSDK({
    apiKey: "sk_abc123"
});

app.doCoolThing();`;

const pythonCode = `import your_package
  
app = your_package.init({
    "api_key": "sk_abc123"
})

app.do_cool_thing()`;

export default CodeCard;