
// Send GET and POST requests for the Canary Console API
export default async function sendAPIRequest(endpoint, method, authKey, body = null) {
    try {
        const headers = {
            'X-Canary-Auth-Token': authKey,
            'Content-Type': 'application/json',
        };

        const requestOptions = {
            method: method.toUpperCase(),
            headers: headers,
            credentials: 'include'
        };

        let url = endpoint;
        if (method.toUpperCase() === 'GET' && body) {
            const params = new URLSearchParams();
            Object.entries(body).forEach(([key, value]) => {
                params.append(key, value);
            });
            url += `?${params.toString()}`;
        }
        else if (body && method.toUpperCase() === 'POST') {
            headers['Content-Type'] = 'application/x-www-form-urlencoded';
            const params = new URLSearchParams();
            Object.entries(body).forEach(([key, value]) => {
                params.append(key, value);
            });
            requestOptions.body = params;
        }

        const response = await fetch(url, requestOptions);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Request failed:', error);
        throw error;
    }
}

// Get the console name of the logged in user from reghost cookie
export async function getReghost () {
    const response = await fetch('https://register.canary.tools/regconsole', {
        method: 'GET', 
        credentials: 'include'
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}
