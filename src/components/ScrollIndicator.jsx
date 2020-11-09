export default function ScrollIndicator({ onClick, pageNumber, totalPages, setPageNumber }) {
    const lastPage = pageNumber >= totalPages
    return (
        <>
            {/* <div className='absolute z-50 flex w-full h-full text-gray-600 bg-gray-900'>
                <div className='m-auto text-center'>
                    <p className='font-black uppercase'>Daniel Delacour</p>
                    <p className='text-sm font-light uppercase animate-pulse'>Swipe to Experience</p>
                </div>
            </div> */}
            <div className='absolute bottom-0 right-0 z-50 p-2'>
                {/* <div onClick={() => setPageNumber((s) => s - 1)} className='px-2'>
                    <svg
                        className='w-5 h-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
                    </svg>
                </div> */}

                <div
                    className='p-2 text-gray-400 bg-gray-900 bg-opacity-75 rounded-full animate-bounce'
                    onClick={() => setPageNumber((s) => s + 1)}>
                    <svg
                        className='w-3 h-3'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                    </svg>
                </div>
            </div>
            {/* <div
                className='absolute left-0 z-50 w-12 m-auto animate-pulse'
                style={{ top: '50%', bottom: '50%' }}
                onClick={() => setPageNumber((s) => s - 1)}>
                <div className='flex items-center space-x-2 text-xs uppercase transform rotate-90 opacity-50 hover:opacity-100'>
                    <span>
                        <svg
                            className='w-2 h-2'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'>
                            <path
                                fillRule='evenodd'
                                d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </span>
                    <span>Previous</span>
                </div>
            </div>
            <div
                className='absolute right-0 z-50 w-12 m-auto animate-pulse'
                style={{ top: '50%', bottom: '50%' }}
                onClick={() => setPageNumber((s) => s + 1)}>
                <div className='flex items-center space-x-2 text-xs uppercase transform rotate-90 opacity-50 hover:opacity-100'>
                    <span>Next</span>
                    <span>
                        <svg
                            className='w-2 h-2'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'>
                            <path
                                fillRule='evenodd'
                                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </span>
                </div>
            </div> */}
        </>
    )
}
