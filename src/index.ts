import * as parser from '@babel/parser';
import fs from 'fs';
import path from 'path';
async function main () {
    // const json = fs.readFileSync(path.join(__dirname,'../1.json'),{ encoding: 'utf8' });
    // const obj = JSON.parse(data);
    // 1. 获取数据
    // const response = await axios({
    //     url: 'http://192.168.111.43:8090/dddcgs/api/json',
    //     method: 'get'
    // });
    // const data: APIResponse = response.data;
    // console.log(data);

    // 2. 解析模板
    const template = fs.readFileSync(path.join(__dirname,'../template/class-template.ts'),{ encoding: 'utf8' });
    // console.log(template);
    console.log('parser',parser);

    const ast = parser.parse(template,{
        sourceType: 'unambiguous',
        plugins: ['typescript'],
        tokens: true
    });
    console.log(ast);

}

try {
    main();
} catch (error) {
    console.log(error);
}
