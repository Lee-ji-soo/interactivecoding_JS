class Bubble {
    constructor({ $bubbleWrap, $soundEffect }) {
        this.$bubbleWrap = $bubbleWrap
        this.$soundEffect = $soundEffect
        this.render()
    }

    render() {
        this.$bubble = document.createElement('img')
        this.$bubbleWrap.appendChild(this.$bubble)
        this.$bubble.setAttribute('src', '../asset/images/bubble.png')
        this.$bubble.addEventListener('click', this.popBubble.bind(this))
    }

    popBubble() {

        this.$bubble.style.opacity = '0.3'
        this.$soundEffect.play()
        // const refresh = () => {
        //     if (this.$bubble.style.opacity === '0.3') {
        //         this.$bubble.style.opacity = '1'
        //     }
        // }

        // let debounce;
        // debounce = setTimeout(() => {
        //     refresh()
        // }, 3000)
    }
}
export default Bubble
