'use client';

import { useCallback, useRef, useEffect, useMemo } from 'react';
import type { AnimationController, AutoAnimateOptions } from '@formkit/auto-animate';
import autoAnimate from '@formkit/auto-animate';

export function useAutoAnimate(options?: AutoAnimateOptions): [element: (node?: HTMLElement) => void, setEnabled: (enabled?: boolean) => void] {
  const controller = useRef<AnimationController | null>(null);

  const memoizedOptions = useMemo(() => options, []);

  const element = useCallback((node?: HTMLElement) => {
    if (node instanceof HTMLElement) {
      controller.current = autoAnimate(node, memoizedOptions);
    }
  }, [memoizedOptions]);

  const setEnabled = useCallback((enabled?: boolean) => {
    if (controller.current) {
      enabled ? controller.current.enable() : controller.current.disable();
    }
  }, [controller]);

  useEffect(() => {
    return () => {
      let _a;
      // eslint-disable-next-line no-cond-assign
      (_a = controller.current === null || controller.current === void 0 ? void 0 : controller.current.destroy) === null || _a === void 0 ? void 0 : _a.call(controller.current);
    };
  }, []);

  return [element, setEnabled];
}
