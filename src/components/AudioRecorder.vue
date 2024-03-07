<template>
  <div>
    <div class=" bg-gray-300 text-4xl text-center p-6">
      <p class="text-sky-700">Record Audio</p>
    </div>
    <div class="flex flex-row py-6 px-6">
      <div class="basis-1/2">
        <audio-recorder
        :attempts="5"
        :time="3"
        :after-recording="callback"
        />
      </div>
      <div class="basis-1/2">
        <ul>
          <li class="rounded-full p-3 hover:shadow-lg  border mb-3" v-for="(msg,index) in messages" :key="index">
            <audio-player :src="msg"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      socket: null,
      
    };
  },
  mounted() {
    this.socket = new WebSocket(process.env.VUE_APP_WEBSOCKET_URL);
    this.socket.onmessage = (event) => {
      this.messages.push(event.data);
    };
  },
  methods: {
    
    callback(audio){
      this.socket.send(audio.url);
    },
    
  },
};
</script>