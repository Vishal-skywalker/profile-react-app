const baseUrl = 'https://personalproject6-dev-ed.develop.my.salesforce-sites.com/api/services/apexrest/v1';

export function getProjects() {
    return get('projects');
}

export function getSchools() {
    return get('schools');
}

export function getProfile() {
    return get('profile');
}

export function getEmployment() {
    return get('employer');
}

export function getSkills() {
    return get('skills');
}

export function getCertifications() {
    return get('certifications');
}

export function sendMessage(body) {
    return post('sendMessage', body);
}

async function get(path) {
    const res = await fetch(`${baseUrl}/${path}`);
    const data = await res.json();
    return data;
}

async function post(path, body) {
    const res = await fetch(`${baseUrl}/${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
}