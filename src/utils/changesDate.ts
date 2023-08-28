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


    return `${day} ${MONTHS[indexMonth]} ${year}`
}
