// export const arrayChunk = (array: Array<any>, chunkSize: number) => {
//   const chunks = []
export const arrayChunk = <T>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize))
  }
  return chunks
}

export const defaultImage = 'assets/image/tests/test-1.jpg'

export const clickRoute = (url:string) => {
  console.log('clickRoute', url)
}
