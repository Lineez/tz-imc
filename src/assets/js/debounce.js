export default function debounce(f, ms) {
    let inProcess = false;

    return function () {
        if (inProcess) return;

        f.apply(this, arguments);
        inProcess = true;

        setTimeout(() => (inProcess = false), ms);
    };
}
