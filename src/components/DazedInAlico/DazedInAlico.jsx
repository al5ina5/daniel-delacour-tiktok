export default function PageTwo() {
    return (
        <>
            <div
                style={{
                    backgroundImage: 'url("/img/dia-bg.jpg")',
                    backgroundSize: 'cover'
                }}
                className='flex w-full h-full text-white bg-green-400 playfair-font'>
                <div className='max-w-md p-6 m-auto space-y-6'>
                    <img src='/img/dia-cover.jpg' alt='' className='border border-green-900 rounded-md shadow ' />

                    <div className='text-center text-green-400'>
                        {/* <p className='text-xs font-black uppercase'>Daniel Delacour x KVON are the...</p> */}
                        <h1 className='text-4xl font-black'>Dazed in Alico</h1>
                        <p>The audio story of a boy from Florida.</p>
                    </div>

                    <div className='space-x-4 text-lg text-center text-green-400'>
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
