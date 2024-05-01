const name = prompt('Name: ');

if (name.indexOf(' ') !== -1 && name.trim().length > 7) {
    alert('Access denied');
} else {
    if (name.length < 10) {
        const age = +prompt('Age: ');

        if (age > 18) {
            arr.push({
                name: name,
                age: age
            });
        }
    } else {
        alert('Access denied');
    }
}