import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ path = [], theme = 'dark', className = '', position = 'default' }) => {
    const isDark = theme === 'dark';

    const defaultPosition = isDark ? 'absolute top-20 left-0 right-0 z-30 bg-transparent' : 'bg-gray-50 border-b border-gray-200';
    const positionClass = position === 'relative' ? 'relative' : defaultPosition;

    const textColor = isDark ? 'text-white/80' : 'text-gray-600';
    const hoverColor = isDark ? 'hover:text-white' : 'hover:text-primary';
    const activeColor = isDark ? 'text-white' : 'text-gray-900';
    const separatorColor = isDark ? 'text-white/60' : 'text-gray-400';

    return (
        <div className={`${positionClass} ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center space-x-2 text-sm">
                    {/* Home Link */}
                    <Link
                        to="/"
                        className={`flex items-center ${textColor} ${hoverColor} transition-colors`}
                    >
                        <Home size={16} className="mr-1" />
                        <span className="font-medium">Home</span>
                    </Link>

                    {/* Path Items */}
                    {path.map((item, index) => (
                        <React.Fragment key={index}>
                            <ChevronRight size={16} className={separatorColor} />

                            {item.isActive ? (
                                <span className={`${activeColor} font-semibold`}>
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    to={item.href}
                                    className={`${textColor} font-medium ${hoverColor} transition-colors`}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
