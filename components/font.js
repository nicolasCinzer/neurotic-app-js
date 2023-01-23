import { DM_Sans as DMSans } from '@next/font/google';
import { Space_Grotesk } from '@next/font/google';

const dm_sans = DMSans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dmsans',
});

const space_grotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-spacegrotesk',
});

module.exports = { dm_sans, space_grotesk };
