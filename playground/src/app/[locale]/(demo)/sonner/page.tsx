import type { Metadata } from 'next';
import { generateComponentMetadata } from '../components-meta';
import SonnerClient from './sonner-client';

export async function generateMetadata(): Promise<Metadata> {
  return await generateComponentMetadata('sonner');
}

const SonnerPage = () => {
  return <SonnerClient />;
};

export default SonnerPage;
