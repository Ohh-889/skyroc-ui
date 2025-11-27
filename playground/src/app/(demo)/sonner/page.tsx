import type { Metadata } from 'next';
import { generateComponentMetadata } from '../components-meta';
import SonnerClient from './sonner-client';

export const metadata: Metadata = generateComponentMetadata('sonner');

const SonnerPage = () => {
  return <SonnerClient />;
};

export default SonnerPage;
