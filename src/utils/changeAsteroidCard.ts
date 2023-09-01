export const changesDate = (date: string) => {
    let newDate = new Date(date);
    const day = newDate.getDate();
    const indexMonth = newDate.getMonth();
    const year = newDate.getFullYear();

    const MONTHS = [
        'янв',
        'февр',
        'март',
        'апр',
        'мая',
        'июня',
        'июля',
        'авг',
        'сент',
        'окт',
        'нояб',
        'дек'
    ];

    if (date.length > 10) {
        const hours = newDate.getHours();
        const minutes = newDate.getMinutes();

        return `${day} ${MONTHS[indexMonth]} ${year} ${hours}:${minutes}`
    }

    return `${day} ${MONTHS[indexMonth]} ${year}`
}

export const removesBrackets = (string: string) => {
    if (string[0] === '(' && string[string.length - 1] === ')') {
        return string.split('').splice(1, string.length - 2).join('');
    }
    return string;
}

export const roundsString = (string: string) => {
    return Math.round(Number(string)).toLocaleString();;
}

export const changesUnitsOrbits = (distance: string) => {
    const lastDigit = Number(distance) % 10;
    if (Number(distance) >= 11 && Number(distance) <= 13) {
        return 'лунных орбит'
    } else if (lastDigit == 1) {
        return 'лунная орбита';
    } else if (lastDigit >= 2 && lastDigit <= 3) {
        return 'лунные орбиты';
    }
    return 'лунных орбит';
}

export const translatesPlanets = (planet: string) => {
    switch (planet) {
        case 'Earth':
            return 'Земли';
        case 'Juptr':
            return 'Юпитера';
        case 'Mars':
            return 'Марса';
        case 'Merc':
            return 'Меркурия';
        case 'Venus':
            return 'Венеры';
        default:
            planet
    }
}
