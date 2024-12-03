import { useEffect } from 'react'
import { useMotionValue, useSpring, frame } from 'framer-motion'

const spring = { damping: 10, stiffness: 100, restDelta: 1 };

export const useFollowPointer = (pointerRef) => {
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const x = useSpring(pointerX, spring);
    const y = useSpring(pointerY, spring);


    useEffect(() => {
        if (!pointerRef.current) return

        const handlePointerMove = ({ pageY, clientX }) => {
            const elemen = pointerRef.current;

            frame.read(() => {
                pointerX.set(clientX - elemen.offsetLeft - elemen.offsetWidth / 2);
                pointerY.set(pageY - elemen.offsetTop - elemen.offsetHeight / 2);
            })
        }

        window.addEventListener('pointermove', handlePointerMove);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
        }
    }, []);

    return { x, y }
}

