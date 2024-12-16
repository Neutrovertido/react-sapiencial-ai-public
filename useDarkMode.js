import { useState, useEffect } from 'react';
import { Appearance } from 'react-native';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');

  useEffect(() => {
    // Subscribe to color scheme changes
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === 'dark');
    });

    // Clean up the listener on component unmount
    return () => subscription.remove();
  }, []);

  return isDarkMode;
};

export default useDarkMode; 