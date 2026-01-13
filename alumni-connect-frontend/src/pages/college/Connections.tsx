export default function Connections() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Connections</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">Connection Requests</h2>
                    <p className="text-gray-500">No pending requests</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">My Connections</h2>
                    <p className="text-gray-500">No connections yet</p>
                </div>
            </div>
        </div>
    );
}