import React from 'react';

import './styles.css';

export const metadata = {
  title: 'Default Title',
}

function ScreenSaverLayout({ children }) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default ScreenSaverLayout;
