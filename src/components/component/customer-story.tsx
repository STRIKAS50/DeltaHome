
"use client"
import { useState } from "react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Testlogo from "../../../public/testingggg.svg"
import Image from "next/image"

import Desire from "../../../public/Clientlogo/Logo/DesireLogos.png"
import Duke from "../../../public/Clientlogo/Logo/DukeLogos.png"
export default function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedStory, setSelectedStory] = useState(null)
  const customerStories = [
    {
      id: 1,
      image:Duke.src,
      title: "Prabhudas Patel",
      designation: "Managing Director, Duke Plasto Technique",
      description: "The people at Delta Infosoft not only make everything simple but also assist us at any given point in time. Their level of understand with customer requirements is tremendous. which is very supportive and work 24/7 to help us.",
      videoUrl: "https://www.youtube.com/embed/a4TAZsAiRks?si=UAx59LJMsU6MYp1m",
    },
    {
      id: 2,
      image: Desire.src,
      title: "Gaurav Gupta",
      designation: "Managing Director, Desire Energy Solution",
      description: "“ Delta Team is our IT Partner since 10 year, they has made work for manage day to day all operation simple and easy for us in Delta iERP and Mobile Applications. Behind growth of Desire energy there are equally contribution of Delta Infosoft. ”",
      videoUrl: "https://www.youtube.com/embed/a4TAZsAiRks?si=UAx59LJMsU6MYp1m",
    },
    {
      id: 3,
      image: "/placeholder.svg",
      title: "Monal Chokshi",
      designation: "Managing Director, PowerH20 Water Technologies",
      description: "“Delta's IOT and Mobile APPs plays a significant role in our water treatment projects with the highest level of accuracy, especially when you are dealing with government tenders and a large number of Data from Our Devices, It has a powerful advanced Portal for Data Monitoring with great support.”",
      videoUrl: "https://www.youtube.com/embed/a4TAZsAiRks?si=UAx59LJMsU6MYp1m",
    },
    {
      id: 4,
      image: "/placeholder.svg",
      title: "Dr. Hashmukh Modi",
      designation: "Group Director, Vidyamandir Trust",
      description: "Quality of Team & Involvement in Product Development Education iERP module is definitely one of the best time saving tools provided by Delta Infosoft Team. Thanks to delta team for great tool. The service and personal attention are extraordinary. Excellent service all the way around from start to finish.",
      complement: "Keep up the Great work!",
      videoUrl: "https://www.youtube.com/embed/a4TAZsAiRks?si=UAx59LJMsU6MYp1m",
    },

  ]
  const handleCardClick = (story) => {
    setSelectedStory(story)
    setIsModalOpen(true)
  }
  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedStory(null)
  }
  return (
    <div>
      <section className="grid grid-cols-1 p-10 pt-20 mt-20 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {customerStories.map((story) => (
          <div
            key={story.id}
            className="relative group overflow-hidden bg-opacity rounded-lg shadow-lg flex justify-center hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 cursor-pointer"
            onClick={() => handleCardClick(story)}
          >
            <Image
              src={story.image}
              alt={story.title}
              width={250}
              height={150}
              className="object-cover  rounded-lg"
            />
            <div className="bg-white p-4 h-full dark:bg-gray-950">
              <h3 className="font-bold text-3xl">{story.title}</h3>
              <p className="text-xl text-gray-500 dark:text-gray-400">{story?.designation}</p>
              <section className="mt-10">
                <p>      <p className="text-xl ">{story.description}</p></p>
              </section>
            </div>
          </div>
        ))}
      </section>
      {isModalOpen && selectedStory && (
        <Dialog open={isModalOpen} onOpenChange={handleModalClose}>
          <DialogContent className="sm:max-w-[800px]">
            <div className="relative w-full aspect-video">
              <iframe
                src={selectedStory.videoUrl}
                title={selectedStory.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div>
              {/* <Button variant="ghost" size="icon" className="absolute top-4 right-4 rounded-full">
                <XIcon className="w-6 h-6" />
              </Button> */}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
