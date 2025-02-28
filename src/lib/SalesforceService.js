const baseUrl = 'https://personalproject6-dev-ed.develop.my.salesforce-sites.com/api/services/apexrest/v1';

export function getProjects() {
    return fetch(`${baseUrl}/projects`)
        .then(res => res.json())
        .then(data => data)
}

export function getSchools() {
    return fetch(`${baseUrl}/schools`)
        .then(res => res.json())
        .then(data => data)
}

export function getProfile() {
    return fetch(`${baseUrl}/profile`)
        .then(res => res.json())
        .then(data => data)
}

export function getEmployment() {
    return fetch(`${baseUrl}/employer`)
        .then(res => res.json())
        .then(data => data)
}