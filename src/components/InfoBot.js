import React from 'react'
import '../pages/assets/images/bitmoji.png'
const InfoBot = ({
    title,
    desc
}) => {
    return (
        <>
        <div className='info-main-t'>
        <div className='info-bot-t'>
            <div className='title-t'>
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
        
            <img className='info-img-1' src={require('../pages/assets/images/bitmoji.png')} alt='bitmoji' />

        </div>
        {/* add an image here inside pages/assets/images/bitmoji.png */}
        
        </>
    )
}

export default InfoBot