export default function SuperAdminDashboard() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Super Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-gray-500 text-sm font-medium">Total Colleges</h3>
                    <p className="text-3xl font-bold text-indigo-600 mt-2">0</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">0</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <h3 className="text-gray-500 text-sm font-medium">Active Sessions</h3>
                    <p className="text-3xl font-bold text-purple-600 mt-2">0</p>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">System Overview</h2>
                <p className="text-gray-500">System running normally</p>
            </div>
        </div>
    );
}
