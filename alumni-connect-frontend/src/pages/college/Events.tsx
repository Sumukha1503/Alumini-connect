export default function Events() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Events</h1>
            <div className="mb-6 flex justify-end">
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Create Event
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center text-gray-500 py-8 col-span-full">
                    No events scheduled. Create your first event!
                </div>
            </div>
        </div>
    );
}
