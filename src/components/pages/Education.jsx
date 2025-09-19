import { educationData } from "../../data/educationData";

const Education = ({ isDarkMode }) => {
    const { introduction, collegeLife } = educationData;

    return (
        <div>
            {/* <div className="flex flex-col justify-center items-center p-8">
                <h1 className="text-lg">{introduction.heading}</h1>
                <h1 className="text-5xl">{introduction.title}</h1>
            </div> */}
            <div className="w-full h-screen p-6">
                <div className="flex flex-col md:flex-row gap-9 h-full">
                    {/* Left Column - Image */}
                    <div className="w-full md:w-1/2 md:h-full">
                        <img
                            src={introduction.image}
                            alt="Sample Image"
                            className="w-full h-full object-cover rounded-3xl shadow-lg"
                        />
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="bg-white rounded-3xl shadow-md border border-gray-200 w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center space-y-4 px-4">
                        <div className="text-center mb-12">
                            <p className="text-lg text-gray-600 mb-2 px-6">{collegeLife.title}</p>
                            <h1 className="text-2xl text-gray-900 mb-2 px-8">{collegeLife.heading}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Education;

// const Work = () => {
//     return (
//         <div className="flex flex-col justify-center items-center">
//             <h1 className="text-lg">I've only just begun</h1>
//             <h1 className = "text-5xl font-bold">Real World Experience</h1>
//         </div>
//     );
// }
// export default Work;