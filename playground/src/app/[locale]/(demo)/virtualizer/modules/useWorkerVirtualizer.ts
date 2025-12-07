'use client';

import { useEffect, useRef, useState } from 'react';

export function useGenerateSentences(count: number) {
  const workerRef = useRef<Worker>(null);

  const [sentences, setSentences] = useState<string[] | null>(null);

  useEffect(() => {
    const worker = new Worker(
      new URL('./generateSentences.worker.ts', import.meta.url),
      { type: 'module' }
    );

    workerRef.current = worker;

    worker.onmessage = (event) => {
      setSentences(event.data.sentences);
    };

    worker.postMessage({ count });

    return () => worker.terminate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return sentences; // null = loading
}
