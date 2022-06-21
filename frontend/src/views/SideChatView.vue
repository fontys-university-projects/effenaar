<template>
  <div>
    <div class="grid grid-cols-7" style="height: calc(100vh - 84px)">
      <div class="col-span-7 bg-black md:col-span-4 lg:col-span-5"></div>
      <div class="relative col-span-7 md:col-span-3 lg:col-span-2">
        <div class="grid grid-cols-5 m-2 shadow-sm">
          <div class="col-start-1">
            <Switch
              v-model="enabled"
              :class="[
                enabled ? 'bg-emerald-300' : 'bg-gray-200',
                'relative mt-1 inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              ]"
            >
              <span class="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                :class="[
                  enabled ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                ]"
              />
            </Switch>
          </div>
          <div class="col-span-3 col-start-2 mt-1">
            <h1>Chat</h1>
          </div>
          
        </div>
        
        <div class="absolute bottom-0 m-2">
          <div class="flex items-start m-2 space-x-2 bottom-44 ma">
            <img
              class="inline-block w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div class="w-auto bg-gray-200 rounded-b-lg rounded-r-lg">
              <p class="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                officia rem maiores iure delectus
              </p>
            </div>
          </div>
          <div class="bottom-0 flex items-start m-2 space-x-2 ma">
            <div class="w-auto rounded-b-lg rounded-l-lg bg-emerald-300">
              <p class="m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                officia rem maiores iure delectus, eius esse autem, accusantium
                magni quas fuga!
              </p>
            </div>
            <img
              class="inline-block w-10 h-10 rounded-full"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="mb-3 mr-2">
            <div class="flex items-start space-x-2">
              <div class="flex-shrink-0">
                <img
                  class="inline-block w-10 h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="flex-1 min-w-0">
                <form action="#" class="relative">
                  <div
                    class="overflow-hidden border border-gray-300 rounded-lg shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500"
                  >
                    <label for="comment" class="sr-only"
                      >Add your comment</label
                    >
                    <textarea
                      rows="3"
                      name="comment"
                      id="comment"
                      class="block w-full py-3 ml-1 border-0 resize-none focus:ring-0 sm:text-sm"
                      placeholder="Add your comment..."
                    />

                    <!-- Spacer element to match the height of the toolbar -->
                    <div class="py-2" aria-hidden="true">
                      <!-- Matches height of button in toolbar (1px border + 36px content height) -->
                      <div class="py-px">
                        <div class="h-9" />
                      </div>
                    </div>
                  </div>

                  <div
                    class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2 "
                  >
                    <div class="flex items-center space-x-5">
                      <div class="flex items-center">
                        <button
                          type="button"
                          class="
                            -m-2.5
                            w-10
                            h-10
                            rounded-full
                            flex
                            items-center
                            justify-center
                            text-gray-400
                            hover:text-gray-500
                          "
                        >
                          <EmojiHappyIcon class="w-5 h-5" aria-hidden="true" />
                          <span class="sr-only">Send Emote</span>
                        </button>
                      </div>
                    </div>
                    <div class="flex-shrink-0">
                      <button
                        type="submit"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EmojiHappyIcon } from "@heroicons/vue/solid";

import { ref } from "vue";
import { Switch } from "@headlessui/vue";

const enabled = ref(false);
</script>