export type InferType<T> = T extends { [key: string]: infer U } ? U : never
