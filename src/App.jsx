import { useEffect, useState } from 'react'
import { Frame, Page } from 'framer'

import Index from './components/Index'
import ScrollIndicator from './components/ScrollIndicator'

import StressYou from './components/StressYou/StressYou'
import LoafBoys from './components/LoafBoys/LoafBoys'
import DazedInAlico from './components/DazedInAlico/DazedInAlico'

export default function MyComponent() {
    const totalPages = 3
    const [pageNumber, setPageNumber] = useState(0)

    // Manage ⬆️ & ⬇️ key press.
    const keyHandler = (e) => {
        if (e.key == 'ArrowDown') setPageNumber((s) => s + 1)
        if (e.key == 'ArrowUp') setPageNumber((s) => s - 1)
        if (e.key == 'ArrowRight') setPageNumber((s) => s + 1)
        if (e.key == 'ArrowLeft') setPageNumber((s) => s - 1)
    }

    // const scrollHandler = (e) => console.log('scroll')

    useEffect(() => {
        window.addEventListener('keydown', keyHandler)
        // window.addEventListener('scroll', scrollHandler)

        return () => {
            window.removeEventListener('keydown', keyHandler)
            // window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    // Manage reaching past first or last page.
    useEffect(() => {
        if (pageNumber > totalPages) setPageNumber(0)
        if (pageNumber <= -1) setPageNumber(totalPages)
    }, [pageNumber])

    const [lastScrollPos, setLastScrollPos] = useState()

    return (
        <>
            <ScrollIndicator pageNumber={pageNumber} setPageNumber={setPageNumber} totalPages={totalPages} />
            <Page
                wheelEnabled
                // onScrollEnd={(e) => {
                //     // Scrolled Down
                //     if (e.offset.y < lastScrollPos) {
                //         setPageNumber((s) => s + 1)
                //     }

                //     // Scrolled Up
                //     if (e.offset.y > lastScrollPos) {
                //         setPageNumber((s) => s - 1)
                //     }
                //     setLastScrollPos(e.offset.y)
                // }}
                gap={0}
                onChangePage={(e) => setPageNumber(e)}
                currentPage={pageNumber}
                direction='vertical'
                style={{
                    height: 'auto',
                    minHeight: '100%',
                    width: '100%'
                }}>
                <Frame>
                    <Index pageNumber={pageNumber} setPageNumber={setPageNumber} totalPages={totalPages} />
                </Frame>
                <Frame>
                    <LoafBoys />
                </Frame>
                <Frame>
                    <StressYou />
                </Frame>
                <Frame>
                    <DazedInAlico />
                </Frame>
            </Page>
        </>
    )
}
