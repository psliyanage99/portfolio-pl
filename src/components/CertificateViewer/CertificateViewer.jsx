import React from 'react';
import { FaTimes } from 'react-icons/fa';

const CertificateViewer = ({ isViewerOpen, viewerOnClose, certificates }) => {
    if (!isViewerOpen || !certificates) return null;

    const { name, link } = certificates;

    return (
        // Modal Backdrop
        <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-md">
            
            {/* Viewer Content */}
            <div className="bg-gray-900 rounded-3xl shadow-2xl w-full max-w-4xl lg:max-w-4xl border border-violet-700/50 overflow-hidden relative">
                
                {/* Header (Title and Close Button) */}
                <div className=" border-b border-gray-800 flex justify-between items-center sticky bg-gray-900 z-10">
                    <div className='p-8 sm:p-12'>
                        <h3 className="text-lg font-bold text-white">{name}</h3>
                        <p className="text-xs text-gray-500">Document Viewer (Secured via Google Drive)</p>
                    </div>
                    
                    {/* Close Button */}
                    <div className='mr-10'>
                        <button
                            onClick={viewerOnClose}
                            className="text-gray-500 hover:text-white transition duration-200 bg-gray-700 p-2 rounded-full hover:bg-gray-800"
                        >
                            <FaTimes className="w-5 h-5 rounded-full" />
                        </button>
                    </div>
                </div>

                {/* Document Body (PDF EMBED VIA IFRAME) */}
                <div className="h-[80vh] overflow-hidden">
                    {/* IFRAME EMBED: Use the modified Google Drive link */}
                    <iframe 
                        src={link} 
                        title={name}
                        allowFullScreen 
                        loading="lazy"
                        className="w-full h-full border-none" 
                    >
                        This browser does not support PDFs. Please download the document: 
                        <a href={link} target="_blank" rel="noopener noreferrer">Download PDF</a>.
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default CertificateViewer;