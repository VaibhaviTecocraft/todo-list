import React, { useEffect, useState } from 'react'

function AddForm() {
    const [personalInfo, setPersonalInfo] = useState(JSON.parse(localStorage.getItem("personalInfo")) || [])
    const [addInfo, setAddInfo] = useState({})
    const [customModal, setCustomModal] = useState('hidden')
    const [sidebar, setsidebar] = useState('hidden')
    const [count, setCount] = useState(JSON.parse(localStorage.getItem("count")) || 0)
    const [editInfo, seteditInfo] = useState()

    const addinfo = (e) => {
        setAddInfo({ ...addInfo, [e.target.name]: e.target.value })
    }
    const onSubmitData = () => {
        setCount(count + 1)
        console.log(count);
        localStorage.setItem("count", count + 1)
        const obj = [
            ...personalInfo,
            {
                id: count + 1,
                data: addInfo
            },
        ]
        setPersonalInfo(obj)
    }
    const setStrgFun = (e) => {
        localStorage.setItem("personalInfo", JSON.stringify(personalInfo))
    }

    const customModalFun = (id) => {
        setCount(id)
        localStorage.setItem("personalInfo", JSON.stringify(personalInfo))
        setCustomModal('show')
        setsidebar('show')
    }
    const closeFun = () => {
        setCustomModal('hidden')
        setsidebar('hidden')
    }

    const editinfo = (e) => {

        seteditInfo({ ...editInfo, [e.target.name]: e.target.value })
        console.log(personalInfo);
    }

    const submitEdit = (e) => {
       
        localStorage.setItem("personalInfo", JSON.stringify(personalInfo))
    }

    const removeDataFun = (id) => {
        const removebox = personalInfo.filter((e) => { return e.id !== id })
        setPersonalInfo(removebox)
        console.log(removebox);
        localStorage.removeItem('removebox', JSON.stringify(removebox))
    }

    useEffect(() => {
        localStorage.setItem("personalInfo", JSON.stringify(personalInfo))
        seteditInfo(personalInfo[count])
    }, [count, personalInfo])


    return (
        <>
            <div className="max-w-[900px] w-full m-auto py-10">
                <h1 className='text-center text-blogHeading1'>Personal Information</h1>
                <form className='pt-10'>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="mb-3">
                            <label htmlFor="firstName" className="pb-2 text-black block">First Name:</label>
                            <input type="text" id="firstName" name="fname" placeholder='Please Enter your name' onChange={addinfo} required="" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="middleName" className="pb-2 text-black block">Middle Name:</label>
                            <input type="text" id="middleName" name="mname" placeholder='Please Enter your middle name' onChange={addinfo} required="" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="pb-2 text-black block">Last Name:</label>
                            <input type="text" id="lastName" name="lname" placeholder='Please Enter your last name' onChange={addinfo} required="" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dateofbirth" className="pb-2 text-black block">Date Of Birth:</label>
                            <input type="date" id="dateofbirth" name="dateofbirth" onChange={addinfo} required="" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="radio" className="pb-2 text-black block">Gender:</label>
                            <div className="flex">
                                <div className="flex items-center mr-3">
                                    <input className="mr-2 w-auto" type="radio" name="radio" onChange={addinfo} id="radio" value="Male" required="" />
                                    <label htmlFor="maleRadio" className="text-black block">Male</label>
                                </div>
                                <div className="flex items-center">
                                    <input className="mr-2 w-auto" type="radio" name="radio" onChange={addinfo} id="radio" value="Female" required="" />
                                    <label htmlFor="femaleRadio" className="text-black block">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contactUs" className="pb-2 text-black block">Contact Us:</label>
                            <input type="tel" id="contactUs" name="contactus" placeholder='Please Enter your contact number' onChange={addinfo} required="" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="pb-2 text-black block">Email address:</label>
                            <input type="email" id="email" aria-describedby="emailHelp" name="email" placeholder='Please Enter your email address' onChange={addinfo} required="" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="language" className="pb-2 text-black block">Language:</label>
                            <select className="form-select mb-3 valid" name="language" onChange={addinfo} aria-label="Default select example" id="language" required="">
                                <option value="language" disabled="">language</option>
                                <option value="Hindi">Hindi</option>
                                <option value="English">English</option>
                                <option value="Gujarati">Gujarati</option>
                            </select>
                        </div>
                        <button type='button' className="theme_btn col-span-2 max-w-[210px]  mx-auto" onClick={() => { onSubmitData(); setStrgFun(); }}>Submit</button>
                    </div>
                </form>
            </div>

            <div className="max-w-[1300px] w-full mx-auto pb-10">
                <div className="grid grid-cols-4 gap-6">
                    {personalInfo.map((item, index) => {
                        if (item.data === undefined) {

                        } else {
                            return (
                                <div key={index} id={"index" + index} className='border border-listColor p-5 rounded-8 relative data-box'>
                                    <div className="text-left pb-2 last:pb-0">
                                        <span className='text-black font-RobotoMedium'>No : </span>
                                        <span className='text-listColor font-RobotoRegular'>{(item.id === undefined) ? "-" : item.id}</span>
                                    </div>
                                    <div className="text-left pb-2 last:pb-0">
                                        <span className='text-black font-RobotoMedium'>First Name : </span>
                                        <span className='text-listColor font-RobotoRegular'>{(item.data.fname === undefined) ? "-" : item.data.fname}</span>
                                    </div>
                                    <div className="text-left pb-2 last:pb-0">
                                        <span className='text-black font-RobotoMedium'>Middle Name : </span>
                                        <span className='text-listColor font-RobotoRegular'>{(item.data.mname === undefined) ? "-" : item.data.mname}</span>
                                    </div>
                                    <div className="text-left pb-2 last:pb-0">
                                        <span className='text-black font-RobotoMedium'>Last name : </span>
                                        <span className='text-listColor font-RobotoRegular'>{(item.data.lname === undefined) ? "-" : item.data.lname}</span>
                                    </div>
                                    <div className="text-left pb-2 last:pb-0">
                                        <span className='text-black font-RobotoMedium'>Date of Birth : </span>
                                        <span className='text-listColor font-RobotoRegular'>{(item.data.dateofbirth === undefined) ? "-" : item.data.dateofbirth}</span>
                                    </div>
                                    <div className="text-left pb-2 last:pb-0">
                                        <span className='text-black font-RobotoMedium'>Gender : </span>
                                        <span className='text-listColor font-RobotoRegular'>{(item.data.radio === undefined) ? "-" : item.data.radio}</span>
                                    </div>
                                    <div className="text-left pb-2 last:pb-0">
                                        <span className='text-black font-RobotoMedium'>Contact Us : </span>
                                        <span className='text-listColor font-RobotoRegular'>{(item.data.contactus === undefined) ? "-" : item.data.contactus}</span>
                                    </div>
                                    <div className="text-left pb-2 last:pb-0">
                                        <span className='text-black font-RobotoMedium'>Email Address : </span>
                                        <span className='text-listColor font-RobotoRegular'>{(item.data.email === undefined) ? "-" : item.data.email}</span>
                                    </div>
                                    <div className="text-left pb-2 last:pb-0">
                                        <span className='text-black font-RobotoMedium'>Language : </span>
                                        <span className='text-listColor font-RobotoRegular'>{(item.data.language === undefined) ? "-" : item.data.language}</span>
                                    </div>
                                    <div className="text-left pb-2 last:pb-0 edit-box absolute">
                                        <button type="button" className='text-black font-RobotoMedium flex mb-3 last:mb-0' onClick={() => { customModalFun(item.id); }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={20} height={20}><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" /></svg>
                                        </button>
                                        <button type="button" className='text-black font-RobotoMedium flex mb-3 last:mb-0' onClick={() => { removeDataFun(item.id); }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={18} height={18}><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            )

                        }
                    })}

                </div>
            </div>

            <div className={"custom-modal " + customModal}>
                <div className="overlay" onClick={closeFun}></div>
                <div className={"right-sidebar w-full max-h-fit overflow-y-auto h-full sm:p-[25px] p-[20px] z-[1] " + sidebar}>
                    <div className="modal-body text-center bg-white flex justify-between items-center">
                        <h2 className='lg:text-heading1 sm:text-heading2 text-heading3 font-RobotoMedium text-listColor'>Check In</h2>
                        <button type='button' onClick={closeFun} className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                <path d="M12.8132 14.7569L6.55936 8.5216C6.48513 8.44737 6.43267 8.36695 6.40199 8.28035C6.37081 8.19375 6.35522 8.10096 6.35522 8.00199C6.35522 7.90302 6.37081 7.81023 6.40199 7.72363C6.43267 7.63703 6.48513 7.55661 6.55936 7.48238L12.8132 1.22855C12.9864 1.05535 13.2029 0.96875 13.4627 0.96875C13.7225 0.96875 13.9452 1.06154 14.1308 1.24711C14.3163 1.43268 14.4091 1.64919 14.4091 1.89662C14.4091 2.14405 14.3163 2.36055 14.1308 2.54613L8.67489 8.00199L14.1308 13.4579C14.304 13.6311 14.3906 13.8443 14.3906 14.0977C14.3906 14.3516 14.2978 14.5713 14.1122 14.7569C13.9266 14.9424 13.7101 15.0352 13.4627 15.0352C13.2153 15.0352 12.9988 14.9424 12.8132 14.7569Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5" />
                                <path d="M2.04448 14.7569L8.29831 8.5216C8.37254 8.44737 8.425 8.36695 8.45568 8.28035C8.48685 8.19375 8.50244 8.10096 8.50244 8.00199C8.50244 7.90302 8.48685 7.81023 8.45568 7.72363C8.425 7.63703 8.37254 7.55661 8.29831 7.48238L2.04448 1.22855C1.87128 1.05535 1.65477 0.96875 1.39497 0.96875C1.13517 0.96875 0.912481 1.06154 0.726907 1.24711C0.541334 1.43268 0.448546 1.64919 0.448546 1.89662C0.448546 2.14405 0.541334 2.36055 0.726907 2.54613L6.18277 8.00199L0.726907 13.4579C0.553705 13.6311 0.467104 13.8443 0.467104 14.0977C0.467104 14.3516 0.559891 14.5713 0.745464 14.7569C0.931038 14.9424 1.14754 15.0352 1.39497 15.0352C1.6424 15.0352 1.85891 14.9424 2.04448 14.7569Z" fill="#3F3F3F" stroke="#3F3F3F" strokeWidth="0.5" />
                            </svg>
                        </button>
                    </div>
                    {
                        personalInfo.map((items, index) => {
                            console.log(personalInfo)
                            if (count === items.id) {
                                return (
                                    <div className='pt-6' key={index}>
                                        <div className="mb-3">
                                            <label htmlFor="firstName" className="pb-2 text-black block">First Name:</label>
                                            <input type="text" id="firstName" name="fname" placeholder='Please Enter your name' onChange={editinfo} value={items.data.fname} required="" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="middleName" className="pb-2 text-black block">Middle Name:</label>
                                            <input type="text" id="middleName" name="mname" placeholder='Please Enter your middle name' onChange={editinfo} value={items.data.mname} required="" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="lastName" className="pb-2 text-black block">Last Name:</label>
                                            <input type="text" id="lastName" name="lname" placeholder='Please Enter your last name' onChange={editinfo} value={items.data.lname} required="" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="dateofbirth" className="pb-2 text-black block">Date Of Birth:</label>
                                            <input type="date" id="dateofbirth" name="dateofbirth" required="" onChange={editinfo} value={items.data.dateofbirth} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="radio" className="pb-2 text-black block">Gender:</label>
                                            <div className="flex">
                                                <div className="flex items-center mr-3">
                                                    <input className="mr-2 w-auto" type="radio" name="radio" required="" value="male" />
                                                    <label htmlFor="maleRadio" className="text-black block">Male</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input className="mr-2 w-auto" type="radio" name="radio" required="" value="female" />
                                                    <label htmlFor="femaleRadio" className="text-black block">Female</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="contactUs" className="pb-2 text-black block">Contact Us:</label>
                                            <input type="tel" id="contactUs" name="contactus" placeholder='Please Enter your contact number' onChange={editinfo} value={items.data.contactus} required="" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="pb-2 text-black block">Email address:</label>
                                            <input type="email" id="email" aria-describedby="emailHelp" name="email" placeholder='Please Enter your email address' onChange={editinfo} value={items.data.email} required="" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="language" className="pb-2 text-black block">Language:</label>
                                            <select className="form-select mb-3 valid" name="language" aria-label="Default select example" id="language" onChange={editinfo} value={items.data.language} required="">
                                                <option value="language" disabled="">language</option>
                                                <option value="Hindi">Hindi</option>
                                                <option value="English">English</option>
                                                <option value="Gujarati">Gujarati</option>
                                            </select>
                                        </div>
                                        <div className="flex">
                                            <button type='button' className="theme_btn col-span-2 mx-auto mr-1" onClick={() => { submitEdit(); closeFun(); }}>Update & Close</button>
                                            <button type='button' className="theme_btn col-span-2 mx-auto ml-1" onClick={() => { closeFun(); }}>Close</button>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AddForm
