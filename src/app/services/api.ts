const apiReadToken = process.env.API_READ_TOKEN

export async function callAPI(url: string, page?: number) {
  const options = {
    method: "GET",
    params: {
      include_adult: "false",
      language: "pt-BR",
      page,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadToken}`,
    },
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json()

    return data.results
  } catch (error) {
    return error
  }
}
