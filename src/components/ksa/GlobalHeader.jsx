import React from 'react';
import { ChevronRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo, languages } from '../../data/data';

const GlobalHeader = () => {
    const [selectedLang, setSelectedLang] = React.useState(languages[0]);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = React.useState(false);

    const handleLanguageChange = (lang) => {
        setSelectedLang(lang);
        setIsLangDropdownOpen(false);
        console.log('Language changed to:', lang.code);
    };

    return (
        <div className="bg-white border-b border-gray-200 py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo and Breadcrumb */}
                    <div className="flex items-center space-x-3">
                        <Link to="/" className="text-xl font-bold text-primary hover:text-red-700 transition-colors">
                            {companyInfo.name}
                        </Link>
                        <ChevronRight size={16} className="text-gray-400" />
                        <span className="text-gray-700 font-semibold">KSA</span>
                    </div>

                    {/* Language Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                            className="flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-gray-300 hover:border-primary transition-all text-sm"
                        >
                            <Globe size={16} />
                            <span>{selectedLang.flag}</span>
                            <span className="font-medium">{selectedLang.code.toUpperCase()}</span>
                        </button>

                        {isLangDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-2 border border-gray-200 z-50">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLanguageChange(lang)}
                                        className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-3 text-sm"
                                    >
                                        <span>{lang.flag}</span>
                                        <span className="text-gray-700">{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalHeader;
