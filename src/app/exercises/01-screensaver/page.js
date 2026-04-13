import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';

export const metadata = {
  title: 'Screensaver Color Options',
}

function ScreenSaverIndexPage() {
  return (
    <main>
      <p>Choose Your Color:</p>
      <ul>
        <li><Orange href="/exercises/01-screensaver/orange">orange</Orange></li>
        <li><Hotpink href="/exercises/01-screensaver/hotpink">hotpink</Hotpink></li>
        <li><Peachpuff href="/exercises/01-screensaver/peachpuff">peachpuff</Peachpuff></li>
        <li><White href="/exercises/01-screensaver/white">white</White></li>
      </ul>
    </main>
  );
}



const White = styled(Link)`
  color: white;
`;
const Peachpuff = styled(Link)`
  color: peachpuff;
`;
const Hotpink = styled(Link)`
  color: hotpink;
`;
const Orange = styled(Link)`
  color: orange;
`;

export default ScreenSaverIndexPage;


