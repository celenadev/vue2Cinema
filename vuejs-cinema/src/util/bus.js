// 75. Procesamiento del evento check-filter en la instancia raíz
function checkFilter (title, category, checked) {
    debugger;
    if (checked) {
        this[category].push(title);
    } else {
        let index = this[category].indexOf(title);
        if (index > -1) {
            this[category].splice(index, 1);
        }
    }
}

export { checkFilter };