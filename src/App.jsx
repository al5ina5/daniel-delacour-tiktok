import { useEffect, useState } from 'react'
import { Frame, Page } from 'framer'

import StressYou from './components/StressYou/StressYou'
import ScrollIndicator from './components/ScrollIndicator'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'

export default function MyComponent() {
    const totalPages = 2
    const [pageNumber, setPageNumber] = useState(0)

    // Manage ⬆️ & ⬇️ key press.
    const keyHandler = (e) => {
        if (e.key == 'ArrowDown') setPageNumber((s) => s + 1)
        if (e.key == 'ArrowUp') setPageNumber((s) => s - 1)
    }
    useEffect(() => {
        window.addEventListener('keydown', keyHandler)

        return () => window.removeEventListener('keydown', keyHandler)
    }, [keyHandler])

    // Manage reaching past first or last page.
    useEffect(() => {
        if (pageNumber > totalPages) setPageNumber(0)
        if (pageNumber <= -1) setPageNumber(totalPages)
    }, [pageNumber])

    return (
        <>
            <ScrollIndicator pageNumber={pageNumber} setPageNumber={setPageNumber} totalPages={totalPages} />
            <Page
                gap={0}
                onChangePage={(e) => setPageNumber(e)}
                currentPage={pageNumber}
                direction='vertical'
                height='100%'
                width='100%'>
                <Frame>
                    <PageOne />
                </Frame>
                <Frame>
                    <PageTwo />
                </Frame>
                <Frame>
                    <StressYou />
                </Frame>
            </Page>
        </>
    )
}
