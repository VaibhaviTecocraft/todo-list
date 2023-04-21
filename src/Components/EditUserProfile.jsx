import React, { useState } from 'react'
import { Images } from '../assets/Images/Images'



function EditUserProfile() {
    const [img, setImg] = useState(Images.User)
    const handleClick = (e) => {
        const file = e.target.files;
        if (e.target.files && e.target.files[0]) {
            for (let i = 0; i < file.length; i++) {
                const element = file[i];
                const reader = new FileReader();
                reader.addEventListener("load", function () {
                    let avatarImg = new Image();
                    let src = reader.result;
                    avatarImg.src = src;
                    setImg(src)
                },
                    false
                );
                reader.readAsDataURL(element);
            }
        }
    }

    return (
        <div>
            <div className="sidebar-list !mb-auto sm:p-6 p-4">
                <button type='button' className="img-wrapper p-[2px] flex justify-center relative group border border-primary border-solid rounded-full overflow-hidden flex-shrink-0  mx-auto w-fit">
                    <img src={img} className='w-[86px] h-[86px] object-cover object-center rounded-full' width={86} height={86} alt="user-img" />
                    <div className="absolute top-0 bottom-0 left-0 right-0 m-auto rounded-full w-[calc(100%-4px)] h-[calc(100%-4px)] invisible opacity-0 flex justify-center items-center bg-black bg-opacity-50 group-hover:opacity-100 group-hover:visible cursor-pointer" style={{ transition: 'all 0.3s ease-in' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='group-hover:scale-100 scale-125 ' style={{ transition: 'all 0.3s ease-in' }} viewBox="0 0 512 512" width={17} height={17}><path fill='#fff' d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" /></svg>
                        <input type="file" id="firstName" name="fname" placeholder='Please Enter your name' className='cursor-pointer opacity-0 absolute top-0 bottom-0 left-0 right-0 m-auto rounded-full' required="" onChange={handleClick} />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default EditUserProfile
