// Функция для того чтобы преоброзовать массив в нужный модель
export const arrToEntity = <T, J extends new (arg: T) => any>(arr: T[], instance: J) => arr.map(p => new instance(p))
