/**
 * Send a request through the proxy server
 * @param {string} endpoint - The API endpoint (e.g., '/users')
 * @param {string} method - The HTTP method ('GET', 'POST', etc.)
 * @param {string} authKey - The authorization key to be included in headers
 * @param {object} [body] - Optional request body for GET & POST methods
 * @returns {Promise} - Returns a promise that resolves with the response data
 */
export default 
async function sendAPIRequest(endpoint, method, authKey, body = null) {
    
    try {
        const headers = {
            'X-Canary-Auth-Token': authKey,
            'Content-Type': 'application/json',
        };

        const requestOptions = {
            method: method.toUpperCase(),
            headers: headers,
        };

        let url = `${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
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
export async function getReghost () {
    const response = await fetch('https://register.canary.tools/regconsole', {
        method: 'GET', 
        credentials: "same-origin"
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}
