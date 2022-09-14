

export const getAll = async params => {
  const response = await fetch(`${process.env.API_URL}/${params}`)

  const data = await response.json()

  return data
}
