import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClasses = ({ isActive }) =>
    `flex items-center p-2 rounded-lg transition-colors 
     ${isActive 
        ? "bg-blue-600 text-white" 
        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
     }`;

  return (
    <div>
      {/* Mobile Toggle Button */}
      <button
        data-drawer-target="separator-sidebar"
        data-drawer-toggle="separator-sidebar"
        aria-controls="separator-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink to="/company-dashboard" className={linkClasses}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.5 2c-.18 0-.36.01-.49.02a1 1 0 0 0-.94 1V11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 8.5 8.5 0 0 0-8.57-9z"/>
                  <path d="M11 6a1 1 0 0 0-1-1 8.5 8.5 0 1 0 9 9 1 1 0 0 0-1-1h-7V6z"/>
                </svg>
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/messager" className={linkClasses}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.71.71L9.41 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4z"/>
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M8 17.2 10.24 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.71.71L14.59 18H9a1 1 0 0 1-1-.8z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Messages</span>
                <span className="ml-auto inline-flex items-center justify-center px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded-full">
                  3
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/company-profile" className={linkClasses}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M12 20a8 8 0 0 1-5-1.76v-.68c0-1.8 1.49-3.25 3.33-3.25h3.34c1.84 0 3.33 1.46 3.33 3.25v.68A8 8 0 0 1 12 20zM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.44 9.96-9.93 10A10 10 0 0 1 2 12zm10-5c-1.84 0-3.33 1.46-3.33 3.25S10.16 13.5 12 13.5s3.33-1.46 3.33-3.25S13.84 7 12 7z"/>
                </svg>
                <span className="ms-3">Company Profiles</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/all-applications" className={linkClasses}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.13 12.63v-1.8a5.4 5.4 0 0 0-4.15-5.26V3.1a1 1 0 0 0-2 0v2.46a5.4 5.4 0 0 0-4.15 5.26v1.8C6.87 15.02 5 15.61 5 16.8c0 .6 0 1.2.54 1.2h12.92c.54 0 .54-.6.54-1.2 0-1.19-1.87-1.79-1.87-4.17z"/>
                </svg>
                <span className="ms-3">Applications</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/job-listing" className={linkClasses}>
               <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/> </svg>
                <span className="ms-3">Job Listing</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/schedule" className={linkClasses}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M6 5V4a1 1 0 1 1 2 0v1h8V4a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v2H3V7a2 2 0 0 1 2-2h1zM3 19v-8h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM8 13a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z"/>
                </svg>
                <span className="ms-3">Schedule</span>
              </NavLink>
            </li>
          </ul>

          {/* Bottom Section */}
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <NavLink to="/company-setting" className={linkClasses}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.83 5a3 3 0 0 0-5.66 0H4a1 1 0 0 0 0 2h1.17a3 3 0 0 0 5.66 0H20a1 1 0 0 0 0-2h-9.17zM4 11h9.17a3 3 0 0 1 5.66 0H20a1 1 0 0 1 0 2h-1.17a3 3 0 0 1-5.66 0H4a1 1 0 0 1 0-2zm1.17 6H4a1 1 0 0 0 0 2h1.17a3 3 0 0 0 5.66 0H20a1 1 0 0 0 0-2h-9.17a3 3 0 0 0-5.66 0z"/>
                </svg>
                <span className="ms-3">Settings</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/help" className={linkClasses}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.98 4c-.37 0-.74.08-1.08.24-.32.15-.61.37-.85.64-1.82 1.82-2.35 3.87-1.9 5.94.44 1.99 1.78 3.89 3.46 5.57 1.68 1.68 3.58 3.02 5.57 3.46 2.06.46 4.11-.07 5.94-1.89.27-.24.49-.52.64-.85.16-.34.24-.71.24-1.08 0-.37-.08-.74-.24-1.08-.15-.32-.37-.61-.64-.85l-1.21-1.21a2.7 2.7 0 0 0-1.9-.79c-.71 0-1.4.28-1.9.79l-.62.62a.8.8 0 0 1-1.14 0l-1.85-1.85a.8.8 0 0 1 0-1.14l.62-.62c.5-.5.79-1.19.79-1.9s-.28-1.4-.79-1.9L8.9 4.88c-.24-.27-.52-.49-.85-.64A2.7 2.7 0 0 0 6.98 4z"/>
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M18.03 8.98c0 .55-.45 1-1 1h-3.03c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1 .55 0 1 .45 1 1v.58l3.32-3.29a1 1 0 0 1 1.41 1.41l-3.3 3.27h.6c.55 0 1 .45 1 1z"/>
                </svg>
                <span className="ms-3">Help Center</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
