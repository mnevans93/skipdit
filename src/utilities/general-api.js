import sendRequest from './send-request'

export function create (url, payload) {
    return sendRequest(url, 'POST', payload);
}

export function read (url, payload) {
    return sendRequest(url, 'GET', payload);
}

export function update (url, payload) {
    return sendRequest(url, 'PUT', payload)
}

export function destroy (url, payload) {
    return sendRequest(url, 'DELETE', payload)
}
