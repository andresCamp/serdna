'use client'
import React, { ReactNode, useState, useEffect } from 'react';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Code, Copy, Check } from 'lucide-react';
import { Highlight as PrismHighlight, themes, Language } from 'prism-react-renderer';

interface DisplayBoxProps {
  children: ReactNode;
  code: string;
}

const DisplayBox: React.FC<DisplayBoxProps> = ({ children, code }) => {
    const [darkMode, setDarkMode] = useState<"light" | "dark">("light");
    const [codeMode, setCodeMode] = useState(false);
    const [copied, setCopied] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => prevMode === "light" ? "dark" : "light");
    };

    const toggleCodeMode = () => {
        // setDarkMode("dark")
        setCodeMode(prevMode => !prevMode);
    };

    const DarkModeToggle = () => {
        // if (codeMode) return null;
        return (
            <Toggle 
                aria-label="Toggle dark mode" 
                pressed={darkMode === "dark"}
                onPressedChange={toggleDarkMode}
                className='absolute top-0 right-0 m-1'
            >
                {darkMode === "light" ? (
                    <Sun className="h-4 w-4" />
                ) : (
                    <Moon className="h-4 w-4" />
                )}
            </Toggle>
        );
    };

    const CodeToggle = () => {
        return (
            <Toggle
                aria-label="Toggle code mode"
                pressed={codeMode}
                onPressedChange={toggleCodeMode}
                className={`absolute top-0 left-0 m-1 ${darkMode === 'dark' ? 'text-white' : 'text-black'}`}
            >
                <Code className="h-4 w-4" />
            </Toggle>
        );
    };

    const CopyButton = () => {
        const copyToClipboard = () => {
            navigator.clipboard.writeText(code);
            setCopied(true);
        };

        useEffect(() => {
            if (copied) {
                const timer = setTimeout(() => setCopied(false), 3000);
                return () => clearTimeout(timer);
            }
        });

        return (
            <Button
                onClick={copyToClipboard}
                className={`absolute top-0 right-11 m-1 p-2  ${darkMode === 'dark' ? 'text-white' : 'text-black'}`}
                variant="ghost"
                size="icon"
            >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
        );
    };

    
    

    return (
        <div className={`${darkMode}`}>
            <div className={`
                relative border-2 border-dashed flex justify-center items-center shrink-0 rounded-xl overflow-hidden
                ${!codeMode ? 'h-48 w-96 p-4' : 'w-[600px] h-full '}
                bg-[#FDFDF7] dark:bg-black dark:border-indigo-400
                transition-all duration-300
            `}>
                {codeMode ? (
                    <PrismHighlight  theme={darkMode === "light" ? themes.nightOwlLight : themes.jettwaveDark} code={code} language="tsx">
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                            <pre className={`${className} text-xs overflow-auto w-full h-full pt-14 pb-4 px-4`} style={style}>
                                {tokens.map((line, i) => (
                                    <div key={i} {...getLineProps({ line, key: i })}>
                                        <span style={{ display: 'inline-block', width: '2em', userSelect: 'none', opacity: 0.5 }}>
                                            {i + 1}
                                        </span>
                                        {line.map((token, key) => (
                                            <span key={key} {...getTokenProps({ token, key })} />
                                        ))}
                                    </div>
                                ))}
                            </pre>
                        )}
                    </PrismHighlight>
                ) : (
                    <div className="w-full">
                        {children}
                    </div>
                )}
                <DarkModeToggle />
                <CodeToggle />
                {codeMode && <CopyButton />}
            </div>
        </div>
    );
};

export default DisplayBox;  



// 'use client'
// import React, { ReactNode, useState } from 'react'
// import { Toggle } from './ui/toggle';
// import { Moon, Sun } from 'lucide-react';

// const DisplayBox: React.FC<{children: ReactNode}> = ({children}) => {
//     const [darkMode, setDarkMode] = useState<"light" | "dark">("light");

//     const toggleDarkMode = () => {
//         setDarkMode(prevMode => prevMode === "light" ? "dark" : "light");
//     };

//     const DarkModeToggle = () => {
//         return (
//             <Toggle 
//                 aria-label="Toggle dark mode" 
//                 pressed={darkMode === "dark"}
//                 onPressedChange={toggleDarkMode}
//                 className='absolute top-0 right-0 m-1'
//             >
//                 {darkMode === "light" ? (
//                     <Sun className="h-4 w-4" />
//                 ) : (
//                     <Moon className="h-4 w-4" />
//                 )}
//             </Toggle>
//         );
//     };

//     const CodeToggle = () => {
//         // div icon
//         // changes state variable to code mode
//         // display code block
//         // copy and paste button on the top right
//     }

//     return (
//         <div className={`${darkMode}`}>
//             <div className='relative border-2 border-dashed flex shrink-0 rounded-xl w-96 h-48  p-16 bg-[#FDFDF7] dark:bg-black dark:border-indigo-400'>
//                 {children}
//                 <DarkModeToggle/>
//             </div>
//         </div>
//     )
// }

// export default DisplayBox


