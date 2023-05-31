const projectId = '2LNTm1MAWqINT5Dl2u1mrJYBYXV';
const secret = '66fc8a55070e0aad11b62369f3a37bae';

const token = Buffer.from(`${projectId}:${secret}`).toString('base64');
console.log('Basic ' + token);
