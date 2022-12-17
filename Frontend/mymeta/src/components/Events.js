import React from 'react'
// https://www.matrise.no/wp-content/uploads/2020/11/metaverse_illustration-1536x864.jpg
function Events () {

  return (
    <div> <section class="text-gray-400 bg-gray-900 body-font" style={ {backgroundImage: 
      "url(' https://www.matrise.no/wp-content/uploads/2020/11/metaverse_illustration-1536x864.jpg')",}}>
    <div class="container px-5 py-24 mx-auto flex flex-wrap">
      <div class="flex flex-col text-center w-full mb-20">
        
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-white">Upcoming Evevts</h1>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
               
              </div>
              <h2 class="text-white text-lg title-font font-medium">Event 1</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">Just place holder text which will be replaced with event description</p>
              <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                
              </div>
              <h2 class="text-white text-lg title-font font-medium">Event 2</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">Just place holder text which will be replaced with event description.</p>
              <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
               
              </a>
            </div>
          </div>
        </div>
        <div class="p-4 md:w-1/3">
          <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
               
              </div>
              <h2 class="text-white text-lg title-font font-medium">Event 3</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">Just place holder text which will be replaced with event description</p>
              <a class="mt-3 text-indigo-400 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Events