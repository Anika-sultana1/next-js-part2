
export const feedback = [
    {
        id: 1,
        name:'rabeya',
        message:'it was deliciouse'
    },
    {
        id: 2,
        name:'rabeya khatun',
        message:'it was deliciouse and also tasty'
    }
]

export async function GET(request){
    return Response.json({
        status:200,
        message: "Yahoo. API  Created"
    })
}