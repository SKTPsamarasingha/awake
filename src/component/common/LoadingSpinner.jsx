const LoadingSpinner = () => {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-black">
            {/* Outer Ring */}
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"/>

            {/* Optional Text */}
            <p className="mt-4 text-lg font-medium text-gray-600">
                Loading your success...
            </p>
        </div>
    );
};

export default LoadingSpinner;
