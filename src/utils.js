

export const scrollHelper = (location, block='end') => {
    const locationIdSelect = document.getElementById(location);
    locationIdSelect.scrollIntoView({ behavior: 'smooth', block: block});
}