const switchBulb= {
    data() {
        return {
            lighton: true,
        };
    },
    methods: {
        changeStatus() {
            this.lightSwitch = !this.lightSwitch;
        },
    },
};

Vue.createApp(switchBulb).mount('#app');