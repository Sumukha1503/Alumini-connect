export default function Messages() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Messages</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-semibold mb-4">Conversations</h2>
                    <p className="text-gray-500 text-sm">No conversations yet</p>
                </div>
                <div className="lg:col-span-2 bg-white rounded-lg shadow p-4 flex items-center justify-center">
                    <p className="text-gray-500">Select a conversation to start messaging</p>
                </div>
            </div>
        </div>
    );
}