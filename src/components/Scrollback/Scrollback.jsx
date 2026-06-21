import { useSyncExternalStore } from 'react'

const Scrollback = () => {

    const subscribe = (fn) => {
        window.addEventListener('scroll', fn)
        return () => window.removeEventListener('scroll', fn)
    }

    const getSnapshot = () => {
        return window.scrollY
    }

    const scroll = useSyncExternalStore(subscribe, getSnapshot)

    return (<>
        {scroll > 100
            ? <div onClick={()=> window.scrollTo(0, 0 )} className='scrollback'>
                <img src="/arrow-up.svg" alt="arrow up" />
            </div>
            : null
        }
    </>)
}
export default Scrollback