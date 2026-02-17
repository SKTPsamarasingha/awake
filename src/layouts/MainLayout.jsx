import {Outlet, useNavigate} from "react-router";
import NavBar from "../component/NavBar.jsx";
import {Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "../component/common/ErrorFallback.jsx";
import LoadingSpinner from "../component/common/LoadingSpinner.jsx";


const MainLayout = () => {
    const navigate = useNavigate();

    return (
        <>
            <NavBar/>
            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                onReset={() => navigate('/')}
                fallback={<p>Something went wrong</p>}>

                <Suspense fallback={<LoadingSpinner/>}>
                    {/* Outlet renders the child routes defined in AllRoutes.jsx */}
                    <Outlet/>
                </Suspense>
            </ErrorBoundary>

            {/* Footer goes here */}
        </>
    );
};

export default MainLayout;
