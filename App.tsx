
import React from 'react';
import RecommendationDashboard from './components/RecommendationDashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 3a1 1 0 011-1h6a1 1 0 011 1v2.586l1.293 1.293a1 1 0 01.293.707V16a1 1 0 01-1 1h-2v2a1 1 0 11-2 0v-2H8a1 1 0 01-1-1v-8.414a1 1 0 01.293-.707L8.586 5.586 10 4.172 11.414 5.586 12.707 4.293 11.293 2.879A1 1 0 0111.586 2H8.414a1 1 0 01-.707-.293L6.293.293A1 1 0 016 1.707V3zm2-1a1 1 0 012 0v1h-2V2zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm1 3a1 1 0 100 2h2a1 1 0 100-2H8z" clipRule="evenodd" transform="translate(0, -0.5) scale(1.2)"/>
            </svg>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">CareerMitra</h1>
          </div>
          <p className="hidden md:block text-sm text-gray-500 dark:text-gray-400">Your AI-Powered Career Co-pilot</p>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <RecommendationDashboard />
      </main>

      <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} CareerMitra. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
