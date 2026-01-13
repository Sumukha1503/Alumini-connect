export default function Feed() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Feed</h1>
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <textarea
                        placeholder="What's on your mind?"
                        className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows={3}
                    />
                    <div className="mt-4 flex justify-end">
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                            Post
                        </button>
                    </div>
                </div>
                <div className="text-center text-gray-500 py-8">
                    No posts yet. Be the first to share something!
                </div>
            </div>
        </div>
    );
}
