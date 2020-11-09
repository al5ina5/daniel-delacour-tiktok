import Typed from 'react-typed'
import Timeline from '../timeline.json'

export default function ScrollIndicator({ onClick, pageNumber, totalPages, setPageNumber }) {
    const lastPage = pageNumber >= totalPages
    return (
        <>
            <div className='relative flex w-full h-full p-6 text-gray-600 bg-gray-900'>
                <div className='m-auto space-y-6 sm:space-y-12'>
                    <div>
                        <p className='font-black uppercase'>
                            <span className='block text-2xl sm:text-3xl'>
                                <span className='text-gray-700'>Daniel</span> Delacour
                            </span>
                        </p>
                    </div>

                    <div className='max-w-md space-y-4'>
                        <div className='flex items-center'>
                            <p className='inline-block px-2 py-1 text-xs font-black text-gray-900 uppercase bg-gray-600 rounded-sm'>
                                Latest Music
                            </p>
                            <div className='ml-auto' />
                            <div className='space-x-4'>
                                <a target='_blank' href='https://twitter.com/danieldelacour'>
                                    <i className='text-lg fab fa-twitter' />
                                </a>
                                <a target='_blank' href='https://instagram.com/daniel_delacour'>
                                    <i className='text-lg fab fa-instagram' />
                                </a>
                                <a target='_blank' href='mailto:music@danieldelacour.com'>
                                    <i className='text-lg fas fa-envelope' />
                                </a>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div
                                onClick={() => setPageNumber(1)}
                                className='col-span-2 overflow-hidden border border-gray-800 rounded-md cursor-pointer border-gold-500 animate-pulse'>
                                {Timeline[0].img && (
                                    <img className='w-full' src={Timeline[0].img} alt={Timeline[0].title} />
                                )}
                                <div className='relative px-4 py-2 text-left '>
                                    <div className='absolute top-0 right-0'>
                                        <p className='px-2 py-1 text-xs font-black text-gray-900 uppercase bg-yellow-400 rounded-bl-sm'>
                                            Latest
                                        </p>
                                    </div>
                                    <p className='text-xl font-black uppercase sm:text-2xl'>"{Timeline[0].title}"</p>
                                    <p className='text-xs text-gray-800'>{Timeline[0].date}</p>
                                </div>
                            </div>
                            {Timeline.slice(1, 3).map((release, index) => {
                                return (
                                    <div
                                        onClick={() => setPageNumber(release.page)}
                                        key={index}
                                        className='px-4 py-2 text-xs border border-gray-800 rounded-md cursor-pointer sm:text-sm'>
                                        <p className='text-sm sm:text-lg'>"{release.title}"</p>
                                        <p className='text-xs text-gray-800'>{release.date}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div
                        onClick={() => setPageNumber(1)}
                        className='flex cursor-pointer'
                        // className='absolute bottom-0 left-0 flex w-full px-2 py-12'>
                    >
                        <div className='flex items-center mx-auto space-x-4'>
                            <svg
                                className='w-3 h-3 sm:w-5 sm:h-5 animate-bounce'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                            </svg>
                            <p className='text-xs font-light uppercase sm:text-sm animate-pulse'>
                                <Typed
                                    strings={['Tap + Swipe', 'Click + Drag', 'Use Arrow Keys']}
                                    typeSpeed={40}
                                    loop
                                />
                                to Experience
                            </p>
                            <svg
                                className='w-3 h-3 sm:w-5 sm:h-5 animate-bounce'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='absolute right-0 z-50 py-2'>
                <div onClick={() => setPageNumber((s) => s - 1)} className='px-2'>
                    <svg
                        className='w-5 h-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 15l7-7 7 7' />
                    </svg>
                </div>

                <div onClick={() => setPageNumber((s) => s + 1)} className='px-2'>
                    <svg
                        className='w-5 h-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                    </svg>
                </div>
            </div> */}
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
