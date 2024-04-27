function solution(id_list, report, k) {
    const reportedMap = new Map();
    const filteredReport = [...new Set(report)];
    const answer = new Array(id_list.length).fill(0);
    for(let i = 0, max = filteredReport.length; i < max; i++) {
        const [reporter, reported] = filteredReport[i].split(" ");
        if(reportedMap[reported]) { 
            reportedMap[reported].push(reporter)
        } else { 
            reportedMap[reported] = [reporter]
        }
         
    }
    for(let i = 0, max = id_list.length; i < max; i++) {
        const reportedHistory = reportedMap[id_list[i]];
        if(reportedHistory && reportedHistory.length >= k){
            reportedHistory.forEach((reporter) => {
                answer[id_list.indexOf(reporter)] += 1;
            })
        }
    }
    return answer;
   
}