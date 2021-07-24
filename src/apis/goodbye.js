export const handler = async (event, context) => {

    console.log(event)
    console.log(context)

    const data = JSON.parse(event.body)
    return { statusCode: 201, body: JSON.stringify({ 'information': 'Goodbye ' + data.name + '!' }) }
}
