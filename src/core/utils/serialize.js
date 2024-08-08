// utils/serialize.js

/**
 * Convierte cualquier objeto en un formato plano.
 * @param {Object} instance - El objeto a convertir.
 * @returns {Object} - El objeto plano.
 */
export function serialize(instance) {
    if (instance instanceof Object) {
        return Object.entries(instance).reduce((acc, [key, value]) => {
            if (value instanceof Object) {
                // Si el valor es un objeto, lo serializamos recursivamente
                acc[key] = serialize(value);
            } else if (Array.isArray(value)) {
                // Si el valor es un array, lo serializamos recursivamente
                acc[key] = value.map(item => serialize(item));
            } else {
                // De lo contrario, simplemente copiamos el valor
                acc[key] = value;
            }
            return acc;
        }, {});
    }
    return instance;
}