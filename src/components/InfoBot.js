import React from 'react'
import '../pages/assets/images/bitmoji.png'
const InfoBot = ({
    title,
    desc
}) => {
    return (
        <>
        <div className='info-main'>
        <div className='info-bot'>
            <div className='title'>
                {
                    title
                }
            </div>
            <div className='desc'>
                {
                    desc
                }
            </div>
        </div>
        
            <img src={require('../pages/assets/images/bitmoji.png')} alt='bitmoji' />

        </div>
        {/* add an image here inside pages/assets/images/bitmoji.png */}
        
        </>
    )
}

export default InfoBot