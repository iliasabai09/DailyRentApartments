// Функция для того чтобы преоброзовать массив в нужный модель
// @ts-ignore
export const arrToEntity = <T, J>(arr: T[], instance: J) => arr.map(p => new instance(p))
