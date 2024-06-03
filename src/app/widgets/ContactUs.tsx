"use client"
import { MagicCard, MagicContainer } from '@/components/magicui/magic-card'
import { BackgroundBeams } from '@/components/ui/background-beams'
import React from 'react'
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Input, Form, Button } from 'antd';
import logo from "../../../public/deltainfosoftonly.png"
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import Image from 'next/image';

const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: '#',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
const Contactus = () => {

  return (
    <>

      <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-start antialiased">
      
        <div className="flex justify-center mt-20 items-center mb-10">
          <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#108A93] via-[#35DDE9] to-[#47E0EB] bg-clip-text text-7xl font-bold leading-none tracking-tighter text-transparent">
          Let’s Start The Conversation
          </span>
        </div>


        <div className="flex mt-10 items-center p-3 justify-center w-full">
          <MagicContainer className="relative flex h-full flex-col lg:h-auto lg:flex-row items-center justify-center">
            <MagicCard
              borderWidth={3}
              className="relative flex w-full cursor-pointer flex-col lg:flex-row items-center justify-center overflow-hidden bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)] p-20 shadow-2xl"
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
                <h1 className="text-lg md:text-7xl bg-clip-text  bg-gradient-to-b text-black dark:text-neutral-300 text-center font-sans font-bold">
                  Reach Out Us
                </h1>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center text-black dark:text-neutral-300">
                    <PhoneOutlined className="mr-4" />
                    <span>(+91) 79403 71010</span>
                  </div>
                  <div className="flex items-center text-black dark:text-neutral-300">
                    <MailOutlined className="mr-4" />
                    <span>info@deltainfosoft.com</span>
                  </div>
                  <div className="flex items-center text-black dark:text-neutral-300">
                    <UserOutlined className="mr-4" />
                    <span>B-1010, Infinity Tower<br />
                      NR Ramada Hotel<br />
                      SG Road, Ahmedabad
                      Gujarat - 380015</span>
                  </div>
                </div>
              </div>
              <BackgroundBeams />
              <div className="flex w-full lg:w-1/2 flex-col items-center justify-center p-4 z-10">
                <Form layout="vertical" className="w-full max-w-md custom-form">
                  <Form.Item name="name">
                    <Input placeholder="Your Name" className="bg-grey-300 text-black" />
                  </Form.Item>
                  <Form.Item name="email">k
                    <Input placeholder="Your Email" className="bg-gray-300 text-black" />
                  </Form.Item>
                  <Form.Item name="phone">
                    <Input placeholder="Your Phone Number" className="bg-gray-300 text-black" />
                  </Form.Item>
                  <Form.Item name="description">
                    <Input.TextArea rows={4} placeholder="How can we help you?" className="bg-gray-300 text-black" />
                  </Form.Item>
                  <Dragger {...props} className='text-black dark:text-neutral-300'>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="text-black dark:text-white text-lg">Click or drag file to this area to upload</p>
                    <p className="text-black dark:text-neutral-300">
                      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                      banned files.
                    </p>
                  </Dragger>
                  <Button type="primary" htmlType="submit" className="my-4 w-full">
                    Submit
                  </Button>
                </Form>
              </div>
              {/* <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" /> */}
            </MagicCard>
          </MagicContainer>
        </div>
      </div>

    </>
  )
}

export default Contactus
