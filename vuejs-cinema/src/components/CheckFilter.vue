<template>
    <div :class="['checked-filter', isActive]" @click="toggleCheck">
        <input type="checkbox" class="checkbox" v-model="checked">
        <span class="check-filter-title">{{ title }}</span>
    </div>
</template>
<script>
export default {
    name: 'CheckFilter',
    data () {
        return {
            checked: false
        };
    },
    props: ['title', 'category'],
    computed: {
        isActive () {
            return this.checked ? 'active' : '';
        }
    },
    methods: {
        toggleCheck (event) {
            debugger;
            if (event.target.type !== 'checkbox') {
                this.checked = !this.checked;
            }
            this.$bus.$emit('check-filter', this.title, this.category, this.checked);
        }
    }
}
</script>