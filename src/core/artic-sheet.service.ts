export class ArticSheetService {
    
    // parseSheet(data:string=''): string {
    //     let lines = data.split("\n");
    //     let orderRows = false;
    //     let headerFound = true;
    //     let output = {};

    //     let currentCustomer = '';
    //     let currentSite = '';
    //     let currentHeaders = [];

    //     let searchingForHeader = false;

    //     for(var i = 0; i < lines.length;i++) {
            
    //         if(!orderRows && !searchingForHeader) {
    //             // assume we are looking for a header
    //             let firstLine:any = lines[i];
    //             let secondLine:any = lines[i +1];

    //             firstLine = firstLine.split(",").join('').split(' ').filter(i => i.trim() !== '' && (RegExp(/^\p{L}/,'u').test(i.charAt(0)) && i.indexOf(":") === -1));

    //             firstLine = firstLine.join(' ').replace("\r", "").replace("\n", "");

    //             currentCustomer = firstLine;

    //             secondLine = secondLine.split(',').filter(i => i.trim() !== '');
    //             secondLine = secondLine.map(i => i.trimStart().replace('"', '')).join(' ').trimStart();

    //             currentSite = secondLine;
    //             if(!output[currentCustomer + currentSite]) {
    //                 output[currentCustomer + currentSite] = {
    //                     "name": currentCustomer,
    //                     "location": currentSite,
    //                     "orders": [],
    //                 }
    //             }

    //             let thirdLine = lines[i + 2];

    //             currentHeaders = thirdLine.split(',').filter(i => i.trim() !== '');


    //             // move on 4 lines
    //             i += 4;

    //             orderRows = true;

    //         }
        

    //         if(orderRows) {
    //             let linesParts = lines[i].split(',');

    //             if(linesParts.join('').trim() === '') {
    //                 orderRows = false;
    //                 searchingForHeader = true;
    //             }

    //             let orderObj = {};

    //             currentHeaders.forEach((header, index) => {
    //                 orderObj[header.split(' ').join('_')] = linesParts[index];
    //             })

    //             output[currentCustomer + currentSite].orders.push(orderObj);

    //         }

    //         if(searchingForHeader) {
    //             let linesParts = lines[i].split(',');

    //             if(linesParts.join('').trim() === '') {
    //                 continue;
    //             } else {
    //                 i--;
    //                 searchingForHeader = false;
    //                 orderRows = false;
    //             }
    //         }
    //     }

    //     return JSON.stringify(output);

    // }
    parseSheet(data = '') {
        let lines = data.split("\n");
        let output = [];
        if (lines.length > 1) {
            var heads = lines[0].replace("\r", "").replace("\n", "").split(',');
            for (var i = 1; i < lines.length; i++) {
                var cells = lines[i].split(',');
                var jobject = {};
                heads.forEach((v, i, a) => {
                    jobject[v] = cells[i];
                });
                output.push(jobject);
            }
        }
        return JSON.stringify(output);
    }   
}