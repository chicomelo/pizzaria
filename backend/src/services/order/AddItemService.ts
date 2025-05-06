import prismaClient from "../../prisma";

interface ItemRequest{
    order_id: string;
    product_id: string;
    amount: number
}

class AddItemService{
    async execute({ order_id, product_id, amount }: ItemRequest){

        const order = await prismaClient.item.create({
            data: {
                amount,
                order_id,
                product_id
            }
        })

        return order;

    }
}

export { AddItemService }