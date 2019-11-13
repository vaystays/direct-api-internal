const format = (employees = []) => 
employees.map(
    ({
        is_confirmed: isConfirmed,
        email,
        id,
        margin,
        name,
        organization_id: organizationId,
        role,
        team,
        payout_frequency: payoutFrequency

    }) => ({
        isConfirmed,
        email,
        id,
        margin,
        name,
        organizationId,
        role,
        team,
        payoutFrequency
    })
)


export const getEmployees = async (client, organizationId ) => {
    const {employees = []} = await client.get(`https://app.getdirect.io/api/${organizationId}/employees`).json()
    return format(employees)
}