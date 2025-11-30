import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const PublicOnlyRoute = ({ children }) => {
    const { user, loading } = useAuth();

    // Show loading state while checking authentication
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    // If user is authenticated, redirect to dashboard
    if (user) {
        return <Navigate to="/dashboard" replace />;
    }

    // If user is not authenticated, render the public content
    return children;
};

export default PublicOnlyRoute;