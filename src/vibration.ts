export default function Vibrate(pattern: Iterable<number>){
    window.navigator.vibrate(pattern)
}