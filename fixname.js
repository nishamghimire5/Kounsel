export default function fixName(name) {
    let lc_name = name.toLowerCase();
    const name_arr = lc_name.split(" ");
    for (let i = 0; i < name_arr.length; ++i) {
        name_arr[i] = name_arr[i].charAt(0).toUpperCase() + name_arr[i].slice(1);
    }

    const finalName = name_arr.join(" ");
    return finalName;
}