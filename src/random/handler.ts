export const random = (): { random: number } => {
  const number: number = Math.floor(Math.random() * 100);
  return {
    random: number,
  }
}