const baseUrl = 'https://personalproject6-dev-ed.develop.my.salesforce-sites.com/api/services/apexrest/v1';

import projects from '../data/projects.json';
import schools from '../data/schools.json';
import profile from '../data/profile.json';
import employer from '../data/employer.json';
import skills from '../data/skills.json';
import certifications from '../data/certifications.json';

export function getProjects() {
    return projects ?? get('projects');
}

export function getSchools() {
    return schools ?? get('schools');
}

export function getProfile() {
    return profile ?? get('profile');
}

export function getEmployment() {
    return employer ?? get('employer');
}

export function getSkills() {
    return skills ?? get('skills');
}

export function getCertifications() {
    return certifications ?? get('certifications');
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