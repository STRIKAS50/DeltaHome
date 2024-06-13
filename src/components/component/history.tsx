
import Link from "next/link"

export function History() {

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">

        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col  items-center justify-center space-y-5  text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our History</h2>
                <p className="max-w-[900px] text-gray-500 md:text-2xl/relaxed lg:text-base/relaxed xl:text-2xl/relaxed dark:text-gray-400">
                  Delta Inc has been at the forefront of innovation since our founding in 2010. Here's a look at our
                  journey so far.
                </p>
              </div>
            </div>
            <div className="after:absolute pt-20 after:inset-y-0 after:w-px after:bg-gray-500/20 relative pl-6 after:left-0 grid gap-10 dark:after:bg-gray-400/20">
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                <div className="text-xl text-bold">2010 - Founding of Delta Inc</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Delta Inc is founded by a team of visionary entrepreneurs with a mission to revolutionize the digital
                  landscape.
                </div>
              </div>
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                <div className="text-xl text-bold">2012 - Launch of our first product</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Delta Inc launches its first groundbreaking product, setting the stage for future innovations.
                </div>
              </div>
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                <div className="text-xl text-bold">2015 - Expansion into new markets</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Delta Inc expands its reach, opening new offices and partnerships in key markets around the world.
                </div>
              </div>
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                <div className="text-xl text-bold">2018 - Acquisition of leading industry player</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Delta Inc acquires a leading industry player, further strengthening its market position and
                  capabilities.
                </div>
              </div>
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                <div className="text-xl text-bold">2021 - Launch of new flagship product</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Delta Inc introduces its latest flagship product, setting a new standard in the industry.
                </div>
              </div>
              <div className="grid gap-1 text-sm relative">
                <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50" />
                <div className="text-xl text-bold">2023 - Global expansion and recognition</div>
                <div className="text-gray-500 dark:text-gray-400">
                  Delta Inc continues its global expansion, earning industry recognition and awards for its innovative
                  solutions.
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24  lg:py-32 border-t">
          <div className="container lg:pl-20 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our Journey
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Transforming the Digital Landscape
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  From our humble beginnings in 2010 to our global recognition today, Delta Inc has been at the forefront
                  of innovation, constantly pushing the boundaries of what's possible in the digital world.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <img
                  alt="Delta Inc Journey"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                  height="310"
                  src="/placeholder.svg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section> */}
      </main>

    </div>
  )
}
