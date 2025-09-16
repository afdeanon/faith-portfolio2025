const Education = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">Education</h1>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Your Degree</h2>
                <p className="text-lg text-gray-600 dark:text-slate-300 mb-2">Your University Name</p>
                <p className="text-gray-700 dark:text-slate-400 mb-4">
                    Brief description of your studies, achievements, and any relevant coursework or projects.
                </p>
                <p className="text-gray-700 dark:text-slate-400">
                    Graduation Year: YYYY
                </p>
            </div>
        </div>
    );
}
export default Education;