export default function PageOne() {
    return (
        <>
            <div style={{ backgroundColor: '#7DFFF4' }} className='flex w-full h-full'>
                <div className='max-w-xl p-4 m-auto space-y-6'>
                    <img src='/img/loaf-boys-bread.png' alt='Loaf Boys Bread' className='w-64 mx-auto' />
                    <img src='/img/loaf-boys.png' alt='Loaf Boys' className='animate-pulse' />

                    <div className='text-center text-blue-800'>
                        <p className='text-xs font-black uppercase'>Daniel Delacour x KVON are the...</p>
                        <h1 className='text-4xl font-black uppercase'>Loaf Boys</h1>
                    </div>

                    <div className='space-x-4 text-lg text-center text-blue-800'>
                        <i className='fab fa-apple' />
                        <i className='fab fa-spotify' />
                        <i className='fab fa-soundcloud' />
                        <i className='fab fa-youtube' />
                    </div>
                </div>
            </div>
        </>
    )
}
