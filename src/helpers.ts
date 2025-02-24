const formatter = new Intl.DateTimeFormat('fr-FR', { 
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
})

export function formatDate(date: Date) {
    return formatter.format(date);
}