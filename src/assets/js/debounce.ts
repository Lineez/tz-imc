export default function debounce(
    f: FunctionStringCallback,
    ms: number,
    ...args: any
) {
    let inProcess = false;

    return function () {
        if (inProcess) return;

        f.apply(this, args);
        inProcess = true;

        setTimeout(() => (inProcess = false), ms);
    };
}
