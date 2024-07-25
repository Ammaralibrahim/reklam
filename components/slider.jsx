import React from 'react'

export default function Slider() {
  return (
    <div className="carousel relative container mx-auto max-w-full">
      <div className="carousel-inner relative overflow-hidden w-full">
        {/* Slide 1 */}
        <input
          className="carousel-open hidden"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          defaultChecked="checked"
        />
        <div className="carousel-item absolute opacity-0 h-48 md:h-[80vh]">
          <div
            className="block h-full w-full mx-auto flex md:pt-0 md:items-center bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://img.freepik.com/free-photo/gleaming-industrial-printer-with-orange-panels-stands-ready-bright-hightech-factory_91128-4603.jpg?t=st=1721727738~exp=1721731338~hmac=14869568b7ae34cb113651e8c9d54eea01e6ba77071b54869d46962643eec18b&w=1380")'
            }}
          >
            <div className="container mx-auto h-full flex items-center justify-center md:justify-start bg-black bg-opacity-50">
              <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p className="text-white text-2xl md:text-4xl lg:text-7xl font-bold my-4">
                Broşürden kataloğa, tüm baskı ihtiyaçlarınız.
                </p>
              </div>
            </div>
          </div>
        </div>

        <label
          htmlFor="carousel-3"
          className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black rounded-full bg-transparent leading-tight text-center z-10 inset-y-0 left-0 my-auto flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 text-gray-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </label>
        <label
          htmlFor="carousel-2"
          className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black rounded-full bg-transparent leading-tight text-center z-10 inset-y-0 right-0 my-auto flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 text-gray-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </label>

        {/* Slide 2 */}
        <input
          className="carousel-open hidden"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div className="carousel-item absolute opacity-0 h-48 md:h-[80vh]">
          <div
            className="block h-full w-full mx-auto flex md:pt-0 md:items-center bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://img.freepik.com/free-photo/printing-press-machine-mass-production-action_91128-4369.jpg?t=st=1721727370~exp=1721730970~hmac=2ea3d05010258840b43c527e9c2de3b3a8db95c1770c4e9a5440c13c21f77a4f&w=1380")'
            }}
          >
            <div className="container mx-auto h-full flex items-center justify-center md:justify-start bg-black bg-opacity-50">
              <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p className="text-white text-2xl md:text-4xl lg:text-7xl font-bold my-4">
                  Özel tasarımlar, benzersiz baskılar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <label
          htmlFor="carousel-1"
          className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black rounded-full bg-transparent leading-tight text-center z-10 inset-y-0 left-0 my-auto flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 text-gray-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </label>
        <label
          htmlFor="carousel-3"
          className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black rounded-full bg-transparent leading-tight text-center z-10 inset-y-0 right-0 my-auto flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 text-gray-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </label>

        {/* Slide 3 */}
        <input
          className="carousel-open hidden"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden=""
        />
        <div className="carousel-item absolute opacity-0 h-48 md:h-[80vh]">
          <div
            className="block h-full w-full mx-auto flex md:pt-0 md:items-center bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://img.freepik.com/free-photo/modern-industrial-printer-with-vibrant-orange-elements-showcasing-sleek-machinery-welllit-factory-setting_91128-4382.jpg?t=st=1721727621~exp=1721731221~hmac=12f922ff67e6b29c6b5b5b436ad81bea736b5bb4dc854ae3402c80fd90ab1ef5&w=1380")'
            }}
          >
            <div className="container mx-auto h-full flex items-center justify-center md:justify-start bg-black bg-opacity-50">
              <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                <p className="text-white text-2xl md:text-4xl lg:text-7xl font-bold my-4">
                  Sınırları zorlayan baskı çözümleri
                </p>
              </div>
            </div>
          </div>
        </div>

        <label
          htmlFor="carousel-2"
          className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black rounded-full bg-transparent leading-tight text-center z-10 inset-y-0 left-0 my-auto flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 text-gray-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </label>
        <label
          htmlFor="carousel-1"
          className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black rounded-full bg-transparent leading-tight text-center z-10 inset-y-0 right-0 my-auto flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 text-gray-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </label>
      </div>
    </div>
  )
}
