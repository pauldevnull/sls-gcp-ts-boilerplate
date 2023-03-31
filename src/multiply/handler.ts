export const multiply = (request) => {
  const random: number = request?.body?.input?.body?.random || 0;
  return { multiplied: 1000 * random }
}
