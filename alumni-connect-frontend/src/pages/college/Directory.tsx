export default function Directory() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Alumni Directory</h1>
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <input
                    type="text"
                    placeholder="Search alumni..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>
            <div className="text-center text-gray-500 py-8">
                No alumni found. Try adjusting your search.
            </div>
        </div>
    );
}