'use client';

import type {
  GlobalOptions as ConfettiGlobalOptions,
  CreateTypes as ConfettiInstance,
  Options as ConfettiOptions,
} from 'canvas-confetti';
import confetti from 'canvas-confetti';
import type { ReactNode } from 'react';
import React, {
  createContext,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';

type Api = {
  fire: (options?: ConfettiOptions) => void;
};

type Props = React.ComponentPropsWithRef<'canvas'> & {
  options?: ConfettiOptions;
  globalOptions?: ConfettiGlobalOptions;
  manualstart?: boolean;
  children?: ReactNode;
};

export type FireworkRef = Api | null;

const FireworkContext = createContext<Api>({} as Api);

const Firework = forwardRef<FireworkRef, Props>((props, ref) => {
  const {
    options,
    globalOptions = { resize: true, useWorker: true },
    manualstart = false,
    children,
    ...rest
  } = props;
  const instanceRef = useRef<ConfettiInstance | null>(null);

  const canvasRef = useCallback(
    (node: HTMLCanvasElement) => {
      if (node !== null) {
        if (instanceRef.current) return;
        instanceRef.current = confetti.create(node, {
          ...globalOptions,
          resize: true,
        });
      } else {
        if (instanceRef.current) {
          instanceRef.current.reset();
          instanceRef.current = null;
        }
      }
    },
    [globalOptions]
  );

  const fire = useCallback(
    async (opts = {}) => {
      try {
        await instanceRef.current?.({ ...options, ...opts });
      } catch (error) {
        console.error('Firework error:', error);
      }
    },
    [options]
  );

  useEffect(() => {
    if (manualstart) return;

    const id = setInterval(() => {
      fire({
        particleCount: 20,
        spread: 90,
      });
    }, 500);

    return () => clearInterval(id);
  }, [manualstart, fire]);

  const api = useMemo(
    () => ({
      fire,
    }),
    [fire]
  );

  useImperativeHandle(ref, () => api, [api]);

  useEffect(() => {
    if (!manualstart) {
      (async () => {
        try {
          await fire();
        } catch (error) {
          console.error('Firework effect error:', error);
        }
      })();
    }
  }, [manualstart, fire]);

  return (
    <FireworkContext.Provider value={api}>
      <canvas ref={canvasRef} {...rest} />
      {children}
    </FireworkContext.Provider>
  );
});

Firework.displayName = 'Firework';

export const FireWork = Firework;

interface FireworkButtonProps extends React.ComponentProps<'button'> {
  options?: ConfettiOptions & ConfettiGlobalOptions & { canvas?: HTMLCanvasElement };
}

const FireworkButton = ({ options, children, ...props }: FireworkButtonProps) => {
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      await confetti({
        ...options,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
      });
    } catch (error) {
      console.error('Confetti button error:', error);
    }
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

FireworkButton.displayName = 'FireworkButton';

export const FireWorkButton = FireworkButton;
