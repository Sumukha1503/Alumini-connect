import { useTenant } from '../../hooks/useTenant';

export default function TenantHeader() {
    const { currentCollege } = useTenant();

    if (!currentCollege) return null;

    return (
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    {currentCollege.logo && (
                        <img
                            src={currentCollege.logo}
                            alt={currentCollege.name}
                            className="h-8 w-8 rounded-full"
                        />
                    )}
                    <div>
                        <h2 className="font-semibold">{currentCollege.name}</h2>
                        {currentCollege.location && (
                            <p className="text-sm text-indigo-100">{currentCollege.location}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
