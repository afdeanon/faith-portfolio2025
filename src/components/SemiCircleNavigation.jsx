import React, { useState, useEffect, useRef } from 'react';
import { User, GraduationCap, Briefcase, Code, Heart, Sun, Moon } from 'lucide-react';
import Profile from './pages/Profile';
import Education from './pages/Education';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Passion from './pages/Passion';

const SemiCircleNavigation = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // Refs for each section
  const sectionRefs = useRef({
    profile: null,
    education: null,
    work: null,
    projects: null,
    passion: null
  });

  const navItems = [
    { id: 'profile', label: 'Profile', icon: User, angle: -70 },
    { id: 'work', label: 'Work', icon: Briefcase, angle: -35 },
    { id: 'education', label: 'Education', icon: GraduationCap, angle: -0 },
    { id: 'projects', label: 'Projects', icon: Code, angle: 35 },
    { id: 'passion', label: 'Passion', icon: Heart, angle: 70 },
  ];

  const [radius, setRadius] = useState(Math.min(window.innerWidth, 480) / 4);
  const [centerX, setCenterX] = useState(window.innerWidth < 256 ? -window.innerWidth / 2 + 32 : -128 + 32);
  const [centerY, setCenterY] = useState(window.innerHeight / 2);

  // Handle navigation button clicks
  const handleNavClick = (sectionId) => {
    setIsScrolling(true);
    setActiveTab(sectionId);

    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      // Reset scrolling flag after animation
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  // Intersection Observer for scroll detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Adjust these values to control when sections become "active"
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      if (isScrolling) return; // Don't update during programmatic scrolling

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId && sectionId !== activeTab) {
            setActiveTab(sectionId);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [activeTab, isScrolling]);

  useEffect(() => {
    const handleResize = () => {
      setCenterY(window.innerHeight / 2);
      setRadius(Math.min(window.innerWidth, 480) / 4);
      const navWidth = Math.min(window.innerWidth, 256);
      setCenterX(-navWidth / 2 + 32);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getButtonPosition = (angle) => {
    const radian = (angle * Math.PI) / 180;
    const x = centerX + radius * Math.cos(radian);
    const y = centerY + radius * Math.sin(radian);
    return { x, y };
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation Container */}
      <div className="fixed left-0 top-0 h-screen w-64 flex items-center z-50">
        <div className="relative w-full h-full">
          {/* Semi-circle background */}
          <div
            className={`absolute transition-colors duration-300 ${isDarkMode
              ? 'bg-gradient-to-br from-slate-800 to-slate-700 shadow-2xl shadow-slate-900/50'
              : 'bg-gradient-to-br from-white to-gray-50 shadow-2xl shadow-gray-400/30'
              }`}
            style={{
              left: `${centerX + 132 - radius}px`,
              top: `${centerY - (radius / 2) + 23}px`,
              width: `${radius * 1.5}px`,
              height: `${radius * 1}px`,
              borderTopRightRadius: `${radius}px`,
              borderBottomRightRadius: `${radius}px`,
              overflow: 'hidden',
            }}
          />

          {/* Navigation Buttons */}
          {navItems.map((item) => {
            const position = getButtonPosition(item.angle);
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;

            return (
              <div key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${isActive
                    ? isDarkMode
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : isDarkMode
                      ? 'bg-slate-600 text-slate-300 hover:bg-slate-500 hover:text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800'
                    } hover:shadow-xl`}
                  style={{
                    left: `${position.x + 75}px`,
                    top: `${position.y}px`,
                  }}
                  title={item.label}
                >
                  <IconComponent size={20} />
                </button>

                {/* Active Tab Label */}
                {isActive && (
                  <div
                    className={`absolute text-sm font-semibold transition-all transform duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    style={{
                      left: `${position.x + radius + 10}px`,
                      top: `${position.y + 13}px`,
                    }}
                  >
                    {item.label}
                  </div>
                )}
              </div>
            );
          })}

          {/* Theme Toggle Button (Center) */}
          <button
            onClick={toggleTheme}
            className={`absolute w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${isDarkMode
              ? 'bg-yellow-500 text-yellow-900 hover:bg-yellow-400 shadow-lg shadow-yellow-500/30'
              : 'bg-slate-700 text-slate-200 hover:bg-slate-600 shadow-lg shadow-slate-700/30'
              } hover:shadow-xl`}
            style={{
              left: `${centerX + 115}px`,
              top: `${centerY}px`,
            }}
            title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>

      {/* Main Content Area with sections */}
      <div className="reflexive ml-52">
        <div
          ref={el => sectionRefs.current.profile = el}
          data-section="profile"
        >
          <Profile isDarkMode={isDarkMode} />
        </div>

        <div
          ref={el => sectionRefs.current.work = el}
          data-section="work"
          className = "pt-10"
        >
          <Work isDarkMode={isDarkMode} />
        </div>

        <div
          ref={el => sectionRefs.current.education = el}
          data-section="education"
        >
          <Education isDarkMode={isDarkMode} />
        </div>

        <div
          ref={el => sectionRefs.current.projects = el}
          data-section="projects"
        >
          <Projects isDarkMode={isDarkMode} />
        </div>

        <div
          ref={el => sectionRefs.current.passion = el}
          data-section="passion"
        >
          <Passion isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default SemiCircleNavigation;