const format = (users = []) => 
    users.map(
        ({
            name,
            id,
            email,
            telephone,
            created_at: createdAt,
            confirmed,
            organizations : [{
                name : orgName,
                url: orgUrl
            }]
// something is not working with organizations for user query 
         }) => ({
             name,
             id,
             email,
             telephone,
             createdAt,
             confirmed,
             organizations:{
                orgName,
                orgUrl
             }
             

         })
    )


export const getUsers = async client => {
    const { users = [] } = await client.get('https://staging.getdirect.io/api/direct_admin/users').json()
    console.log(format(users))
    return format(users)
}    