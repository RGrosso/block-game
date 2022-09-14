import { ref } from "vue";

type Options = {
    volume?: number;
};
export default (url: string, config: Options = {}) => {
    const sound = ref(new Audio(url));

    if (config.volume !== undefined) {
        sound.value.volume = config.volume;
    }
    return {
        play: (delay?: number) => {
            setTimeout(() => {
                sound.value.play();
            }, delay || 0);
        },
        pause: () => sound.value.pause(),
        stop: () => {
            sound.value.pause();
            sound.value.currentTime = 0;
        },
    };
};
