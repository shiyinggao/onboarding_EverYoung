import { APIGatewayProxyHandler } from 'aws-lambda';

const normalizeName = (name: string): string => {
    return name.replace(/\s+/g, '').toLowerCase();
};

const matchName = (inputName: string, userNames: string[]): string => {
    const normalizedInput = normalizeName(inputName);
    for (const name of userNames) {
        const normalized_name = normalizeName(name);
        if (normalizedInput.includes(normalized_name) || normalized_name.includes(normalizedInput)) {
            return name;
        }
    }
    return "No match found";
};

const userNames = [
    "David Smith 大卫 斯密斯",
    "Yueling Zhang 月林张",
    "Huawen Wu 华文吴",
    "Annie Lee 李安妮"
];

export const handler: APIGatewayProxyHandler = async (event, _context) => {
    console.log("Event: ", JSON.stringify(event));  
    try {
        const inputName = event.queryStringParameters?.name || '';
        console.log("Input Name: ", inputName);  
        const matchedName = matchName(inputName, userNames);
        console.log("Matched Name: ", matchedName);  
        
        return {
            statusCode: 200,
            body: JSON.stringify({
                input: inputName,
                matchedName: matchedName
            }),
        };
    } catch (error) {
        console.error("Error: ", error);  
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Internal server error"
            }),
        };
    }
};
