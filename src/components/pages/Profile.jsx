import { profileData } from '../../data/profileData';
import CurrentPersonalCarousel from '../UI/CurrentPersonalCarousel';
import CurrentUpdatesCarousel from '../UI/CurrentUpdatesCarousel';
import CurrentWorkCarousel from '../UI/CurrentWorkCarousel';
import Navbar from '../UI/contactNavbar';
import WorkPage from './Work';
import contactNavBar from '../UI/contactNavbar';
{/* Profile Component 
  This component displays the user's profile information including name, title, introduction, skills, and contact details.
  The profile picture is displayed as a circle that fits 2/3 of the screen height.
  It also adapts to dark and light modes based on the isDarkMode prop.
  To the right of the profile picture, the user's name, title, and introduction are displayed.
  Below that, there are three sections: Skills, Current Updates, and Contact.
  Skills are displayed as badges.
  Contact information includes email, phone, location, LinkedIn, GitHub, website, and portfolio links.
  Current Updates section displays recent activities with images and discriptions. Each update includes an image and a short description below. Each update will be shown one at a time. 
  There will be three dots below. The dot corresponding to the current update will be highlighted. The updates will automatically cycle every 5 seconds, but the user can also click on a dot to navigate to a specific update.
  When the dot is clicked, it will show the currentUpdate at the index.
*/}

const Profile = ({ isDarkMode }) => {
  const { profilePic, lightlogo, darklogo, name, title, introduction, skills, contact } = profileData;
  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-75 text-gray-900'
      }`}>
      <div className="">
        {/* 
        Introduction
        */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-middle px-16">
            <h2 className="text-5xl font-bold mb-2">Hi, I'm {name}! 👋🏼</h2>
            <p className="text-lg text-gray-700 dark:text-slate-600 mb-4">{title}</p>
            <p className="text-1xl ext-gray-700 dark:text-slate-600">
              {introduction}
            </p>
            <div className="py-2">
              <Navbar />
            </div>
          </div>
          <div>
            <div className="w-full h-screen">
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/*
        What I've Been Up to
        */}
        <div className="flex flex-row p-6 text-center md:text-middle">
            <h1 className="text-5xl mt-10">
              What I've been up to
            </h1>
          </div>
        <div className="flex grid px-5 min-h-screen">
          <div className="flex grid md:grid-cols-3 gap-2 mt-10">
            <div>
              <CurrentUpdatesCarousel />
            </div>
            <div>
              <CurrentWorkCarousel />
            </div>
            <div>
              <CurrentPersonalCarousel />
            </div>
          </div>
        </div>
      </div>

    </div>



  );
};

export default Profile;