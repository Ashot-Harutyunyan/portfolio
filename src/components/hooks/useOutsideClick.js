import { useEffect } from 'react'

export function useOutsideClick(ref, handler, enabled = true) {
    useEffect(() => {
        if (!enabled) return

        function onMouseDown(e) {
            if (ref.current && !ref.current.contains(e.target)) handler()
        }

        document.addEventListener('mousedown', onMouseDown)
        return () => document.removeEventListener('mousedown', onMouseDown)
    }, [ref, handler, enabled])
}