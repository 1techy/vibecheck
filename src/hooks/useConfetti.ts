import { useCallback } from 'react';
import confetti from 'canvas-confetti';

export function useConfetti() {
  const triggerConfetti = useCallback(() => {
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 999,
    };

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(200 * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#22c55e', '#ffffff', '#000000'],
    });

    fire(0.2, {
      spread: 60,
      colors: ['#22c55e', '#ffffff', '#000000'],
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#22c55e', '#ffffff', '#000000'],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#22c55e', '#ffffff', '#000000'],
    });

    fire(0.1, {
      spread: 200,
      startVelocity: 45,
      colors: ['#22c55e', '#ffffff', '#000000'],
    });
  }, []);

  return { triggerConfetti };
}
