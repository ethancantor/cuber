import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
    return new PrismaClient()
}
    
declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;
    
const basic_prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

const prisma = basic_prisma;
    
export default prisma
    
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = basic_prisma

