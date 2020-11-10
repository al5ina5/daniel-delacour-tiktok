export default function DazedInAlico() {
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

                    <div className='space-x-4 text-2xl text-center text-green-400'>
                        <a href='https://music.apple.com/us/album/dazed-in-alico-ep/1476649213' target='_blank'>
                            <i className='fab fa-apple' />
                        </a>
                        <a href='https://open.spotify.com/album/67WMkW44aNxhYRChPs4OXG' target='_blank'>
                            <i className='fab fa-spotify' />
                        </a>
                        <a href='https://soundcloud.com/underviews/sets/dazed-in-alico' target='_blank'>
                            <i className='fab fa-soundcloud' />
                        </a>
                        <a
                            href='https://music.youtube.com/playlist?list=OLAK5uy_m1apAUT16dqpxD0DHrYzmq_AwQFsE8tpA'
                            target='_blank'>
                            <i className='fab fa-youtube' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
