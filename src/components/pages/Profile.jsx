import { profileData } from '../../data/profileData';
import CurrentPersonalCarousel from '../UI/CurrentPersonalCarousel';
import CurrentUpdatesCarousel from '../UI/CurrentUpdatesCarousel';
import CurrentWorkCarousel from '../UI/CurrentWorkCarousel';
import Navbar from '../UI/contactNavbar';
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
        <div className="h-screen px-5">
          <div className="flex p-6 text-center md:text-middle ">
            <h1 className="text-5xl font-bold mb-2">
              What I've been up to
            </h1>
          </div>
          <div className="grid md:grid-cols-3 gap-1 mt-8">

            {/* <div className=" rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.concat(skills.backend, skills.tools).map((skill) => (
                <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div> */}

            {/* Current Updates Section
            Carousel component for your current updates that displays one update at a time with navigation dots and auto-scroll functionality.
            */}


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



          {/* Contact Section
          <div className=" rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-700 dark:text-slate-300">
              {contact.email && <p>📧 {contact.email}</p>}
              {contact.phone && <p>📱 {contact.phone}</p>}
              {contact.location && <p>🌍 {contact.location}</p>}
              {contact.linkedin && <p>💼 <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn Profile</a></p>}
              {contact.github && <p>🐙 <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"
              >GitHub Profile</a></p>}
              {contact.website && <p>🔗 <a href
                ={contact.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Website</a></p>}
              {contact.portfolio && <p>🖥️ <a href
                ={contact.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Portfolio</a></p>}
            </div>
          </div> */}
        </div>
      </div>

    </div>



  );
};

export default Profile;