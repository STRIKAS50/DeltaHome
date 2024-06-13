"use client"
import { MagicCard, MagicContainer } from '@/components/magicui/magic-card'
import { BackgroundBeams } from '@/components/ui/background-beams'
import React, { useState } from 'react'
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Input, Form, Button } from 'antd';
import logo from "../../../public/deltainfosoftonly.png"
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, notification } from 'antd';
import Image from 'next/image';
import axios from "axios"


// const props: UploadProps = {
//   name: 'file',
//   multiple: true,
//   action: '#',
//   onChange(info) {
//     const { status } = info.file;
//     if (status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully.`);
//     } else if (status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
//   onDrop(e) {
//     console.log('Dropped files', e.dataTransfer.files);
//   },
// };


const Contactus = () => {

  const [formdata, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    description: ""

  });
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement: any, message: any) => {
    api.info({
      message: `${message}`,
      description:
        // 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        placement,
    });
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {

    const { name, value } = e.target;
    if (name === 'phoneNumber') {

      const filteredValue = value.replace(/[^0-9]/g, '');
      setFormData({
        ...formdata,
        [name]: filteredValue
      });
    } else {
      setFormData({
        ...formdata,
        [name]: value
      });
    }

    console.log(formdata)
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (formdata.name == "" || formdata.phoneNumber == "" || formdata.email == "" || formdata.description == "") {

      openNotification('bottomRight', "All FIelds Are Mandatory")
      console.log("Response:")
    }
    else {
      try {

        const resposne = await axios.post("/api/contactus", formdata)
        openNotification('bottomRight', resposne.data.message)
        console.log("Response:", resposne)
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          description: ""
        })
      } catch (error) {
        console.log("Error on Sending FormData", error)

      }
    }
  }


  return (
    <>

      {contextHolder}

      <div className="h-full w-full  relative flex flex-col items-center justify-start antialiased">

        {/* <div className="flex justify-center mt-20 items-center mb-10">
          <span className=" md:text-4xl sm:3xl lg:text-7xl pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#108A93] via-[#35DDE9] to-[#47E0EB] bg-clip-text font-bold leading-none tracking-tighter text-transparent">
            Let’s Start The Conversation
          </span>

        </div> */}


        <div className="flex mt-10 items-center p-3 justify-center w-full">
          <MagicContainer className="relative flex h-full flex-col lg:h-auto lg:flex-row items-center justify-center">
            <MagicCard
              borderWidth={3}
              className="relative flex w-full cursor-pointer flex-col lg:flex-row items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#F86E04_0,#045C64_50%,#179092_70%)] p-20 shadow-2xl"
            >
              <div className="flex w-full lg:w-1/2 flex-col items-center justify-center p-4">
                <Image
                  src={logo}
                  alt='Company Logo'
                  height={300}
                  width={300}
                  quality={100}
                  className=' mb-6'
                />
                <h1 className="text-lg md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500   text-center font-sans font-bold">
                  Reach Out Us
                </h1>
                <div className="mt-8 space-y-4">
                  <div className="flex text-2xl items-center text-black dark:text-neutral-300">
                    <PhoneOutlined className="mr-4" />
                    <span>(+91) 79403 71010</span>
                  </div>
                  <div className="flex text-2xl items-center text-black dark:text-neutral-300">
                    <MailOutlined className="mr-4" />
                    <span>info@deltainfosoft.com</span>
                  </div>
                  {/* <div className="flex items-center text-black dark:text-neutral-300">
                    <UserOutlined className="mr-4" />
                    <span>B-1010, Infinity Tower<br />
                      NR Ramada Hotel<br />
                      SG Road, Ahmedabad
                      Gujarat - 380015</span>
                  </div> */}
                </div>
              </div>
              <BackgroundBeams />
              <div className="flex w-[20rem] lg:w-1/2 flex-col items-center justify-center p-4 z-10">
                <div className="max-w-md mx-auto p-6 rounded-lg ">
                  <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">Let's Discuss What we Can Provide.....</h2>
                  <form onSubmit={handleSubmit}>
                    <input type="text" id='name' name='name' value={formdata.name} onChange={handleChange} placeholder="Name" className="w-full p-2 mb-4 border-b-2 border-b-teal-600 rounded-md focus:outline-none  bg-transparent  dark:placeholder-zinc-400 dark:text-white" />
                    <input type="email" id='email' name='email' value={formdata.email} onChange={handleChange} placeholder="E-mail Address" className="w-full p-2 mb-4 border-b-2 rounded-md focus:outline-none bg-transparent  border-b-teal-600 dark:placeholder-zinc-400 dark:text-white" />
                    <input type="tel" id='phoneNumber' name='phoneNumber' value={formdata.phoneNumber} onChange={handleChange} placeholder="Contact Number" className="w-full p-2 mb-4 border-b-2 rounded-md focus:outline-none  bg-transparent border-b-teal-600 dark:placeholder-zinc-400 dark:text-white" />
                    <textarea id='description' name='description' value={formdata.description} onChange={handleChange} placeholder="How we can help you?" className="w-full p-2 mb-4 border-b-2 rounded-md focus:outline-none  bg-transparent border-b-teal-600 dark:placeholder-zinc-400 dark:text-white"></textarea>
                    {/* <Dragger {...props} className='text-black dark:text-neutral-300'>
                      <p className="ant-upload-drag-icon ">
                        <InboxOutlined style={{ color: "grey" }} />
                      </p>
                      <p className="text-black dark:text-white text-lg">Click or drag file to this area to upload</p>
                      <p className="text-black dark:text-neutral-300">
                        Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                        banned files.
                      </p>
                    </Dragger> */}
                    <button type="submit" className="w-full my-2 p-2 bg-black text-white rounded-md hover:bg-zinc-900 dark:bg-zinc-900 dark:hover:bg-zinc-700">Submit</button>

                  </form>
                </div>



              </div>
              {/* <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" /> */}
            </MagicCard>
          </MagicContainer>
        </div>
      </div >

    </>
  )
}

export default Contactus
