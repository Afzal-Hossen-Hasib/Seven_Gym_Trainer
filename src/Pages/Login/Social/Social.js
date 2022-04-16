import React from 'react';
import google from '../../../image/Social/google.png'
import github from '../../../image/Social/github.png'

const Social = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-secondary w-50'></div>
                <p className='mt-2 px-3'>or</p>
                <div style={{height: '1px'}} className='bg-secondary w-50'></div>
            </div>

            <div>
                <button className='btn btn-secondary d-block mx-auto w-50 my-3'>
                    <img style={{width: "30px"}} src={google} alt="" />
                    <span className='px-3'>Google Sign In</span>
                </button>

                <button className='btn btn-secondary d-block mx-auto w-50'>
                    <img style={{width: "30px"}} src={github} alt="" />
                    <span className='px-3'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default Social;