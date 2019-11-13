const format = (users = []) =>
    users.map(
        ({
            name,
            id,
            email,
            telephone,
            created_at: createdAt,
            confirmed,
            organizations
         }) => ({
             name,
             id,
             email,
             telephone,
             createdAt,
             confirmed,
             organizations
          } 
    ),
)



export const getUsers = async client => {
    const { users = [] } = await client.get('https://staging.getdirect.io/api/direct_admin/users').json()
    console.log(users)
    return format(users)
}    