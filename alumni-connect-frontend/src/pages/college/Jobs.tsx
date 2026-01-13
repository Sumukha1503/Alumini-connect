export default function Jobs() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Job Opportunities</h1>
            <div className="mb-6 flex justify-end">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Post a Job
                </button>
            </div>
            <div className="space-y-4">
                <div className="text-center text-gray-500 py-8">
                    No job postings available. Be the first to post!
                </div>
            </div>
        </div>
    );
}
