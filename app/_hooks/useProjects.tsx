export const useProjects = async () => {
return await     fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/project/${'69777d53f34c5481bb1b78cb'}`, {
      method: 'GET'
    })
   
}

