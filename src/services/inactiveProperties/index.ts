import { NODE_URL } from "../../config/env";

const format = (inactiveProperties = []) =>
inactiveProperties.map(
    ({
        id,
        active,
        name,
        property_type: propertyType,
        units
    }) => ({
        id,
        active,
        name,
        propertyType,
        units
    })
)

export const getInactiveProperties = async (client, organizationId) => {
    const {inactiveProperties = []} = await client.get(`https://app.getdirect.io/api/${organizationId}/properties/inactive`).json()
    return format(inactiveProperties)
};

console.log(NODE_URL)
