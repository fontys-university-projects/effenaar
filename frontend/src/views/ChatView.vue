<template>
    <div>
        <chatBox />
        <chatOur />
        <chatTheir />
    </div>
</template>

<script>
import chatBox from '@/components/chatBox.vue'
import chatOur from '@/components/chatOur.vue'
import chatTheir from '@/components/chatTheir.vue'

export default {
    components: {
        chatBox,
        chatOur,
        chatTheir
    }
}
</script>