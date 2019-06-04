<template>
    <div class="look">{{message}}
         <p>接收的参数:{{$route.params.id}}</p>
    </div>
</template>

<script>
export default {
    name: 'Look',
    data () {
        return {
            message: '瞅你咋地啊，放学别走啊！'
        }
    }
}
</script>
