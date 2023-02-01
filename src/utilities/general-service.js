import * as generalAPI  from './general-api'

export async function create (route, payload) {
    const createdItem = await generalAPI.create(`/api/${route}`, payload)
    return createdItem
}

export async function index (route) {
    const foundItems = await generalAPI.read(`/api/${route}`, null)
    return foundItems
}

export async function show (route, id) {
    const foundItem = await generalAPI.read(`/api/${route}/${id}`, null)
    return foundItem
}

export async function update (route, id, payload) {
    const updatedItem = await generalAPI.update(`/api/${route}/${id}`, payload)
    return updatedItem
}

export async function destroy (route, id) {
    const destroyedItem = await generalAPI.destroy(`/api/${route}/${id}`, null)
    return destroyedItem
}
