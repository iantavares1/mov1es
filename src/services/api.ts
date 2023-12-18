const apiReadToken = process.env.NEXT_PUBLIC_API_READ_TOKEN

const options = {
  method: "GET",
  params: {
    include_adult: "false",
    language: "pt-BR",
  },
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiReadToken}`,
  },
}

export async function callAPI(url: string) {
  if (apiReadToken) {
    try {
      const response = await fetch(url, options)
      const data = await response.json()
      return data
    } catch (error) {
      return error
    }
  }
}
