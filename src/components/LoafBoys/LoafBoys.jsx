export default function PageOne() {
    return (
        <>
            <div style={{ backgroundColor: '#7DFFF4' }} className='flex w-full h-full'>
                <div className='max-w-xl p-6 m-auto space-y-12'>
                    <img src='/img/loaf-boys-bread.png' alt='Loaf Boys Bread' className='w-40 mx-auto' />

                    <div className='space-y-6'>
                        <p className='font-bold text-center text-blue-800 uppercase'>Daniel Delacour x KVON are the</p>
                        <img src='/img/loaf-boys-blue.png' alt='Loaf Boys' className='animate-pulse' />
                    </div>

                    <div className='space-x-4 text-2xl text-center text-blue-800'>
                        <a href='https://music.apple.com/us/album/loaf-boyz-feat-kvon/1536490305?i=1536490306'>
                            <i className='fab fa-apple' />
                        </a>
                        <a href='https://open.spotify.com/album/2Drn4PMfDtVwlU25TAkbeR?si=UwrREuwpSqq_Ew6QcMft8A'>
                            <i className='fab fa-spotify' />
                        </a>
                        <a href='https://soundcloud.com/daniel-delacour-599737470/loaf-boyz-ft-kvon?ref=clipboard&p=i&c=1'>
                            <i className='fab fa-soundcloud' />
                        </a>
                        <a href='https://youtu.be/BZd_M_D-XsA'>
                            <i className='fab fa-youtube' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
