class Orange {
    constructor({ $orangeWrap, $soundEffect }) {
        this.$orangeWrap = $orangeWrap
        this.$soundEffect = $soundEffect
        this.render()
    }

    render() {
        this.$orange = document.createElement('img')
        this.$orangeWrap.appendChild(this.$orange)
        this.$orange.setAttribute('src', '../asset/images/orange.png')
        this.$orange.addEventListener('click', this.popOrange.bind(this))
    }

    popOrange() {
        this.$orange.setAttribute('src', '../asset/images/orangepop.png')
        this.$soundEffect.play()
        // const refresh = () => {
        //     if (this.$orange.classList.contains('pop')) {
        //         this.$orange.classList.remove('pop')
        //         this.$orange.setAttribute('src', '../asset/images/orange.png')
        //     }
        // }

        // let debounce;
        // debounce = setTimeout(() => {
        //     refresh()
        // }, 3000)
    }
}
export default Orange
