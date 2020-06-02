<template>
    
</template>

<script>
  import {mapGetters, mapMutations, mapState} from 'vuex'

    export default {
        data () {
           return{
               fields: ['name', 'qty', 'price','actions']
           } 
        },
        computed: {
            ...mapState('cart', ['cart']),
            ...mapGetters('cart', ['totalCost']),
        },
        methods: {
            ...mapMutations('cart', ['removeProductFromCart'])
        }
    }
</script>>