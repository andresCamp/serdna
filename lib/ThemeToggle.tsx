'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@/components/ui/switch';
import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
        <div className="absolute flex gap-3 items-center space-x-2 m-8">
            <SunIcon 
                className="h-4 w-4 text-blue-700 dark:text-white" 
                style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
                />
            <Switch
                checked={theme === 'dark'}
                onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                />
            <MoonIcon 
                className="h-4 w-4 " 
                style={{ color: theme === 'dark' ? '#ffffff' : '#000000' }}
            />
        </div>
		// <div className="bg-background text-primary-green">
		// 	The current theme is: {theme}
		// 	<br />
		// 	<button onClick={() => setTheme('light')}>Light Mode</button>
		// 	<br />
		// 	<button onClick={() => setTheme('dark')}>Dark Mode</button>
		// </div>
	);
};

export default ThemeToggle;