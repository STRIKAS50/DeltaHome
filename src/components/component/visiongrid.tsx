import Image from "next/image"
import FeatureIMage from "../../../public/VisionIMage.png"
import { CircleCheckIcon } from "lucide-react"
export function Visiongrid() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto py-12 px-4 md:px-0">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          alt="Featured Image"
          className="bg-gradient-to-b h-full w-full dark:from-black"
          // height={700}
          src={FeatureIMage}
          style={{
            // aspectRatio: "800/600",
            // objectFit: "cover",
          }}
        // width={300}
        />
        <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent left-0 w-full p-4">
          <h2 className="text-4xl font-bold text-white tracking-tight flex justify-end">Sandip Mevada</h2>
          <p className="text-xl font-bold text-white tracking-tight flex justify-end">Chief Managing Director</p>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-7xl font-bold text-teal-600 tracking-tight">Founder's Vision</h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <div className="flex-none">
              <CircleCheckIcon className="w-10 h-10 text-gray-900 dark:text-gray-50" />
            </div>
            <div>
              <h3 className="font-semibold lg:text-4xl md:text-xl sm:text-lg text-teal-400">Trust</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Trust ..... (here some text )
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex-none">
              <CircleCheckIcon className="w-10 h-10 text-gray-900 dark:text-gray-50" />
            </div>
            <div>
              <h3 className="font-semibold lg:text-4xl md:text-xl sm:text-lg text-teal-400">Partnership</h3>
              <p className="text-gray-500 dark:text-gray-400 ">
                Text about Partnership
              </p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="flex-none">
              <CircleCheckIcon className="w-10 h-10 text-gray-900 dark:text-gray-50" />
            </div>
            <div>
              <h3 className="font-semibold lg:text-4xl md:text-xl sm:text-lg text-teal-400">Transparency</h3>
              <p className="text-gray-500 text-Gluten dark:text-gray-400">
                Text about Transparncy
              </p>
            </div>
          </li>

        </ul>
        <div className="flex flex-col items-end  gap-4">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 relative">
            <div className="prose prose-stone text-3xl  dark:prose-invert">
              <blockquote>
                <p className="my-5">“ Helping MSME's in Technology to scale and exponential growth. Visionary and dedicated toward Mission to become ”</p>
              </blockquote>
            </div>
            {/* <div className="absolute bottom-0 left-4 -mb-4 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-gray-100 dark:border-r-gray-800 border-b-8 border-b-transparent" /> */}
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-sm">- Sandip Mevada</div>
        </div>
      </div>
    </div>
  )
}
