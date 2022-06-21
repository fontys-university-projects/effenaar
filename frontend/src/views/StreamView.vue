<template>
<div class="flex flex-row">
  <div class="basis-3/4">
    <div class="flex flex-col bg-emerald-500 h-screen select-none">
      <div>
        <div class="flex flex-row font-bold text-4xl text-white uppercase font-sans drop-shadow-md">
          <div class="basis-10/12 m-2">
              <p class="border-solid justify-self-start text-left">Random concert aaaa 123</p>
            </div>
            <div class="basis-2/12 m-2">
              <div class="bg-red-600 border-solid text-center rounded animate-pulse">Live</div>
            </div>
        </div>
      </div>
      <div>
        <div class="h-96 bg-red-300">
            <iframe class="aspect-video justify-center gap-x-2 drop-shadow-md h-full w-full" src="https://www.youtube.com/embed/nfUsovHcw4s?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
      </div>
      <div class="flex justify-center mt-2 gap-x-2">
        <div>
          <button class="bg-emerald-300 hover:bg-emerald-400 text-white font-bold py-2 px-4 rounded-full drop-shadow-md">
            <img class="aspect-square h-5 w-5 scale-100 hover:scale-125 ease-in duration-300" src="../assets/clapping-hands_1f44f.png" alt="Clapping gands emoji"/>
          </button>
        </div>
        <div>
          <button class="bg-emerald-300 hover:bg-emerald-400 text-white font-bold py-2 px-4 rounded-full drop-shadow-md">
            <img class="aspect-square h-5 w-5 scale-100 hover:scale-125 ease-in duration-300" src="../assets/party-popper_1f389.png" alt="Party popper_1f389 emoji"/>
          </button>
        </div>
        <div>
          <button class="bg-emerald-300 hover:bg-emerald-400 text-white font-bold py-2 px-4 rounded-full drop-shadow-md">
            <img class="aspect-square h-5 w-5 scale-100 hover:scale-125 ease-in duration-300" src="../assets/red-heart_2764-fe0f.png" alt="Red heart emoji"/>
        </button>
        </div>
      </div>
    </div>
  </div>
 <div class="basis-1/4">add chat here</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>