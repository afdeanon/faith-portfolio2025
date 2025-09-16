const Projects = () => {
    return (
        
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-6 text-center">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Project One</h2>
                    <p className="text-gray-700 mb-4">A brief description of Project One, highlighting its features and technologies used.</p>
                    <a href="#" className="text-blue-500 hover:underline">View Project</a>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Project Two</h2>
                    <p className="text-gray-700 mb-4">A brief description of Project Two, highlighting its features and technologies used.</p>
                    <a href="#" className="text-blue-500 hover:underline">View Project</a>   
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">Project Three</h2>
                    <p className="text-gray-700 mb-4">A brief description of Project Three, highlighting its features and technologies used.</p>
                    <a href="#" className="text-blue-500 hover:underline">View Project</a>
                </div>
            </div>
        </div>
    );
}
export default Projects;
