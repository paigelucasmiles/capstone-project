import './Information.css'

export default function Information(){
    return(
        <main id='information'>
            <div className='information-page-wrapper'>
                    <h1 className='information-title'>Information Page</h1>
                    <h2 className='information-subtitle'>Sizing</h2>
                    <p className='text'>Our organic linen and bamboo pieces are all made to be loose fitting for a relaxed and comfortable feel.</p>
                    <h3>Size: S</h3>
                    <p className='text'>UK 8-10</p>
                    <h3>Size: M</h3>
                    <p className='text'>UK 12-14</p>
                    <h3>Size: L</h3>
                    <p className='text'>UK 16</p>
                    <h2 className='information-subtitle'>Care Instructions</h2>
                    <p className='text'>All of our pieces are handmade in the UK from carefully sourced organic materials. If they are properly cared for they will serve you well.</p>
                    <h3 className='care-title'>Care Instructions for linen</h3>
                    <p className='text'>Fosse linen pices can be washed at 30 degress celcius with non-bio detergent. Do not tumble dry. Shake out and dry flat.
                        Linen will always seize up after washing, but this is normal. We recommend ironing your linen products and as soon as you start to wear/use the fibres will relax again.
                        We recommend washing alone for the first few washes in case the colour runs.
                    </p>
                    <h3 className='care-title'>Care Instructions for bamboo silk</h3>
                    <p className='text'>Fosse bamboo silk pieces can be washed in the machine on a cold wash (20 degrees celcius) using
                        hand wash/delicate/silk wash setting with a slow spin. Make sure to place silk pieces in a washing machine bag that is small enough to hold your garments snuggly so nothing can catch on it.
                        We recommend washing alone. Alternatively, bamboo pieces can be hand washed or dry cleaned.
                    </p>
                    <p className='text'>
                        NOTE: Although we wash our pieces in the machine, we cannot account for difference settings on everyones machine.
                        If you are unsure about specific machine settings, we recommend washing by hand to ensure your items are not damaged.
                    </p>
                    <h2 className='information-subtitle'>Payment Types</h2>
                    <p className='text'>Credit/Debit Card, PayPal</p>
            </div>
        </main>
    )
}