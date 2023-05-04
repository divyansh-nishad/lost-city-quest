import React from 'react'

const InfoBot = ({
    title,
    desc
}) => {
    return (
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
    )
}

export default InfoBot